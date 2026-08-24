import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { inflateSync } from "node:zlib";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputPath = join(__dirname, "..", "public", "downloads", "cleaning-log.pdf");
const logoPath = join(
  __dirname,
  "..",
  "public",
  "images",
  "wp-content",
  "uploads",
  "2023",
  "10",
  "logo-clean-scan-04.png",
);

const pageWidth = 595.28;
const pageHeight = 841.89;
const margin = 36;
const contentWidth = pageWidth - margin * 2;

function escapePdfText(value) {
  return value.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

function rgb(hex) {
  const value = hex.replace("#", "");
  return [0, 2, 4].map((index) => parseInt(value.slice(index, index + 2), 16) / 255);
}

function fill(hex) {
  return `${rgb(hex).map((n) => n.toFixed(4)).join(" ")} rg`;
}

function stroke(hex) {
  return `${rgb(hex).map((n) => n.toFixed(4)).join(" ")} RG`;
}

function text(value, x, y, size = 10, font = "F1", color = "#102235") {
  return [
    "BT",
    `/${font} ${size} Tf`,
    fill(color),
    `${x.toFixed(2)} ${y.toFixed(2)} Td`,
    `(${escapePdfText(value)}) Tj`,
    "ET",
  ].join("\n");
}

function drawImage(name, x, y, width, height) {
  return [
    "q",
    `${width.toFixed(2)} 0 0 ${height.toFixed(2)} ${x.toFixed(2)} ${y.toFixed(2)} cm`,
    `/${name} Do`,
    "Q",
  ].join("\n");
}

function rect(x, y, width, height, fillColor, strokeColor = null, lineWidth = 0.6) {
  const commands = [];
  if (fillColor) commands.push(fill(fillColor));
  if (strokeColor) {
    commands.push(stroke(strokeColor));
    commands.push(`${lineWidth} w`);
  }
  commands.push(`${x.toFixed(2)} ${y.toFixed(2)} ${width.toFixed(2)} ${height.toFixed(2)} re`);
  commands.push(fillColor && strokeColor ? "B" : fillColor ? "f" : "S");
  return commands.join("\n");
}

function line(x1, y1, x2, y2, color = "#dce7f0", lineWidth = 0.45) {
  return [
    stroke(color),
    `${lineWidth} w`,
    `${x1.toFixed(2)} ${y1.toFixed(2)} m`,
    `${x2.toFixed(2)} ${y2.toFixed(2)} l`,
    "S",
  ].join("\n");
}

function paethPredictor(left, up, upLeft) {
  const p = left + up - upLeft;
  const pa = Math.abs(p - left);
  const pb = Math.abs(p - up);
  const pc = Math.abs(p - upLeft);
  if (pa <= pb && pa <= pc) return left;
  if (pb <= pc) return up;
  return upLeft;
}

function parsePngRgba(filePath) {
  const png = readFileSync(filePath);
  const signature = "89504e470d0a1a0a";
  if (png.subarray(0, 8).toString("hex") !== signature) {
    throw new Error(`Invalid PNG signature: ${filePath}`);
  }

  let offset = 8;
  let width = 0;
  let height = 0;
  let bitDepth = 0;
  let colorType = 0;
  const idatChunks = [];

  while (offset < png.length) {
    const length = png.readUInt32BE(offset);
    const type = png.subarray(offset + 4, offset + 8).toString("ascii");
    const data = png.subarray(offset + 8, offset + 8 + length);
    offset += 12 + length;

    if (type === "IHDR") {
      width = data.readUInt32BE(0);
      height = data.readUInt32BE(4);
      bitDepth = data[8];
      colorType = data[9];
      const interlace = data[12];
      if (bitDepth !== 8 || colorType !== 6 || interlace !== 0) {
        throw new Error("Only non-interlaced 8-bit RGBA PNG logos are supported.");
      }
    }

    if (type === "IDAT") idatChunks.push(data);
    if (type === "IEND") break;
  }

  const channels = 4;
  const bytesPerPixel = channels;
  const stride = width * channels;
  const inflated = inflateSync(Buffer.concat(idatChunks));
  const rgba = Buffer.alloc(width * height * channels);
  let sourceOffset = 0;

  for (let row = 0; row < height; row += 1) {
    const filter = inflated[sourceOffset];
    sourceOffset += 1;
    const rowOffset = row * stride;
    const previousRowOffset = (row - 1) * stride;

    for (let column = 0; column < stride; column += 1) {
      const raw = inflated[sourceOffset + column];
      const left = column >= bytesPerPixel ? rgba[rowOffset + column - bytesPerPixel] : 0;
      const up = row > 0 ? rgba[previousRowOffset + column] : 0;
      const upLeft = row > 0 && column >= bytesPerPixel ? rgba[previousRowOffset + column - bytesPerPixel] : 0;

      let value;
      if (filter === 0) value = raw;
      else if (filter === 1) value = raw + left;
      else if (filter === 2) value = raw + up;
      else if (filter === 3) value = raw + Math.floor((left + up) / 2);
      else if (filter === 4) value = raw + paethPredictor(left, up, upLeft);
      else throw new Error(`Unsupported PNG filter: ${filter}`);

      rgba[rowOffset + column] = value & 255;
    }

    sourceOffset += stride;
  }

  return { width, height, rgba };
}

function splitRgbaChannels({ width, height, rgba }) {
  const rgbData = Buffer.alloc(width * height * 3);
  const alphaData = Buffer.alloc(width * height);

  for (let pixel = 0; pixel < width * height; pixel += 1) {
    rgbData[pixel * 3] = rgba[pixel * 4];
    rgbData[pixel * 3 + 1] = rgba[pixel * 4 + 1];
    rgbData[pixel * 3 + 2] = rgba[pixel * 4 + 2];
    alphaData[pixel] = rgba[pixel * 4 + 3];
  }

  return { rgbData, alphaData };
}

function asciiHexStream(data) {
  return `${data.toString("hex").toUpperCase()}>\n`;
}

function imageObject({ width, height, rgbData }, maskObjectId) {
  const imageStream = asciiHexStream(rgbData);
  return [
    `<< /Type /XObject /Subtype /Image /Width ${width} /Height ${height}`,
    `/ColorSpace /DeviceRGB /BitsPerComponent 8 /SMask ${maskObjectId} 0 R`,
    `/Filter /ASCIIHexDecode /Length ${Buffer.byteLength(imageStream, "utf8")} >>`,
    "stream",
    imageStream,
    "endstream",
  ].join("\n");
}

function alphaMaskObject({ width, height, alphaData }) {
  const maskStream = asciiHexStream(alphaData);
  return [
    `<< /Type /XObject /Subtype /Image /Width ${width} /Height ${height}`,
    `/ColorSpace /DeviceGray /BitsPerComponent 8`,
    `/Filter /ASCIIHexDecode /Length ${Buffer.byteLength(maskStream, "utf8")} >>`,
    "stream",
    maskStream,
    "endstream",
  ].join("\n");
}

const logoPng = parsePngRgba(logoPath);
const logoImage = { ...logoPng, ...splitRgbaChannels(logoPng) };

const commands = [];

commands.push(rect(0, 0, pageWidth, pageHeight, "#ffffff"));
commands.push(rect(0, pageHeight - 20, pageWidth, 20, "#1bbfb3"));
commands.push(rect(0, pageHeight - 24, pageWidth, 4, "#4014f5"));
commands.push(drawImage("Logo", margin, pageHeight - 80, 108, 40.3));

commands.push(text("CLEANING LOG", margin, pageHeight - 116, 25, "F2", "#102235"));
commands.push(text("Printable cleaning record for daily area checks, accountability, and manager verification.", margin, pageHeight - 136, 9.5, "F1", "#4f6a83"));

const fieldY = pageHeight - 180;
const fieldH = 36;
const fieldGap = 12;
const fieldW = (contentWidth - fieldGap) / 2;
commands.push(rect(margin, fieldY, fieldW, fieldH, "#f7fafc", "#dce7f0"));
commands.push(rect(margin + fieldW + fieldGap, fieldY, fieldW, fieldH, "#f7fafc", "#dce7f0"));
commands.push(text("Date / Month / Week", margin + 12, fieldY + 14, 10.5, "F2", "#34506a"));
commands.push(text("Location", margin + fieldW + fieldGap + 12, fieldY + 14, 10.5, "F2", "#34506a"));

const tableTop = fieldY - 18;
const headerH = 30;
const rowH = 21.5;
const rows = 21;
const colWidths = [52, 50, 98, 162, 72, 58, contentWidth - 492];
const tableH = headerH + rowH * rows;
const tableBottom = tableTop - tableH;
let x = margin;

commands.push(rect(margin, tableTop - headerH, contentWidth, headerH, "#e8fbf9", "#b7d3df", 0.7));
commands.push(rect(margin, tableBottom, contentWidth, tableH, null, "#b7d3df", 0.7));

const headers = ["Date", "Time", "Area", "Notes", "Done By", "Sign", "Verified"];
headers.forEach((label, index) => {
  commands.push(text(label, x + (index === 6 ? 3.5 : 7), tableTop - 19, index === 6 ? 7.1 : 8.8, "F2", "#102235"));
  if (index > 0) commands.push(line(x, tableBottom, x, tableTop, "#b7d3df", 0.55));
  x += colWidths[index];
});

for (let i = 1; i <= rows; i += 1) {
  const y = tableTop - headerH - rowH * i;
  commands.push(line(margin, y, margin + contentWidth, y, "#dce7f0", 0.42));
}

const verifiedX = margin + colWidths.slice(0, -1).reduce((sum, width) => sum + width, 0);
for (let i = 0; i < rows; i += 1) {
  const cellTop = tableTop - headerH - rowH * i;
  const boxSize = 8;
  commands.push(
    rect(
      verifiedX + (colWidths.at(-1) - boxSize) / 2,
      cellTop - rowH / 2 - boxSize / 2,
      boxSize,
      boxSize,
      null,
      "#8aa2b4",
      0.55,
    ),
  );
}

const notesY = margin + 36;
const notesH = 58;
commands.push(rect(margin, notesY + notesH - 24, contentWidth, 24, "#e8fbf9", "#b7d3df", 0.7));
commands.push(rect(margin, notesY, contentWidth, notesH, null, "#b7d3df", 0.7));
commands.push(text("NOTES", margin + contentWidth / 2 - 17, notesY + notesH - 16, 10.5, "F2", "#102235"));
commands.push(text("cleanscan.site", margin, 18, 8.5, "F1", "#4f6a83"));

const stream = commands.join("\n") + "\n";

const objects = [
  "<< /Type /Catalog /Pages 2 0 R >>",
  "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
  `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pageWidth} ${pageHeight}] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> /XObject << /Logo 6 0 R >> >> /Contents 8 0 R >>`,
  "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
  "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>",
  imageObject(logoImage, 7),
  alphaMaskObject(logoImage),
  `<< /Length ${Buffer.byteLength(stream, "utf8")} >>\nstream\n${stream}endstream`,
];

let pdf = "%PDF-1.4\n%\xE2\xE3\xCF\xD3\n";
const offsets = [0];

objects.forEach((object, index) => {
  offsets.push(Buffer.byteLength(pdf, "binary"));
  pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
});

const xrefOffset = Buffer.byteLength(pdf, "binary");
pdf += `xref\n0 ${objects.length + 1}\n`;
pdf += "0000000000 65535 f \n";
offsets.slice(1).forEach((offset) => {
  pdf += `${String(offset).padStart(10, "0")} 00000 n \n`;
});
pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, pdf, "binary");
console.log(`Generated ${outputPath}`);
