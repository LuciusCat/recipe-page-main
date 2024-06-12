import "../css/IntroRecipe.css";

interface Props {
  title: string;
  text: string;
}

export default function IntroRecipe({ title, text }: Props) {
  return (
    <>
      <h1 className="title-header">{title}</h1>
      <p className="text-header">{text}</p>
    </>
  );
}
