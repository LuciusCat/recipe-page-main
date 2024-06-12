import "../css/ImageRecipe.css";

interface Props {
  src: string;
  alt: string;
}

export default function ImageRecipe({ src, alt }: Props) {
  return <img className="img-header" src={src} alt={alt} />;
}
