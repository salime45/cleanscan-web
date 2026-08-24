import { ImageResponse } from "next/og";

export const blogOgSize = {
  width: 1200,
  height: 630,
};

export const blogOgContentType = "image/png";

type BlogOgImageOptions = {
  kicker: string;
  title: string;
  bullets: string[];
  accent: string;
};

export function createBlogOgImage({ kicker, title, bullets, accent }: BlogOgImageOptions) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          backgroundColor: "#f7fbfd",
          color: "#123158",
          fontFamily: "Arial, sans-serif",
          padding: 64,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -110,
            right: -50,
            width: 360,
            height: 360,
            borderRadius: 180,
            backgroundColor: accent,
            opacity: 0.16,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -150,
            left: -80,
            width: 420,
            height: 420,
            borderRadius: 210,
            backgroundColor: "#1b7fbf",
            opacity: 0.12,
          }}
        />

        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            borderRadius: 40,
            border: "2px solid #dbe9ef",
            backgroundColor: "#ffffff",
            padding: 58,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", width: 710 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: 260,
                borderRadius: 999,
                backgroundColor: "#e8f7fb",
                color: "#1b7fbf",
                padding: "12px 20px",
                fontSize: 20,
                fontWeight: 700,
                letterSpacing: 1,
                textTransform: "uppercase",
              }}
            >
              {kicker}
            </div>

            <div
              style={{
                display: "flex",
                marginTop: 30,
                fontSize: 64,
                lineHeight: 1.02,
                fontWeight: 800,
                letterSpacing: -2,
              }}
            >
              {title}
            </div>

            <div style={{ display: "flex", alignItems: "center", marginTop: "auto", gap: 18 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 54,
                  height: 54,
                  borderRadius: 16,
                  backgroundColor: accent,
                  color: "#ffffff",
                  fontSize: 26,
                  fontWeight: 800,
                }}
              >
                CS
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", fontSize: 24, fontWeight: 800 }}>CleanScan</div>
                <div style={{ display: "flex", fontSize: 18, color: "#607887" }}>Restaurant cleaning operations</div>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", flex: 1, gap: 18, marginLeft: 54 }}>
            {bullets.map((bullet) => (
              <div
                key={bullet}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  border: "2px solid #dbe9ef",
                  borderRadius: 24,
                  backgroundColor: "#f7fbfd",
                  padding: "18px 20px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    width: 28,
                    height: 28,
                    borderRadius: 14,
                    backgroundColor: accent,
                  }}
                />
                <div style={{ display: "flex", fontSize: 25, fontWeight: 700, color: "#123158" }}>{bullet}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    blogOgSize,
  );
}
