import "../css/IngreRecipe.css";

interface Props {
  data: string[];
}

export default function IngreRecipe({ data }: Props) {
  return (
    <>
      <ul className="ingredients-ul">
        {data.map((item, index) => (
          <li className="ingredients-li" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
