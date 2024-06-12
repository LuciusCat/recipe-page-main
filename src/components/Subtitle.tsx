import "../css/Subtitle.css";

interface Props {
  text: string;
}

export default function Subtitle({ text }: Props) {
  return <h2 className="sutitle-recipe">{text}</h2>;
}
