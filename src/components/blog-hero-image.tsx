import Image from "next/image";

type BlogHeroImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export default function BlogHeroImage({ src, alt, width, height }: BlogHeroImageProps) {
  return (
    <figure className="article-hero-image">
      <Image src={src} alt={alt} width={width} height={height} sizes="(max-width: 860px) 92vw, 772px" />
    </figure>
  );
}
