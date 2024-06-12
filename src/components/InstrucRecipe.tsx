import "../css/InstrucRecipe.css";

interface dataRecipe {
  key: string;
  value: string;
}

interface Props {
  data: dataRecipe[];
}

export default function InstrucRecipe({ data }: Props) {
  return (
    <ol className="instruction-ol">
      {data.map((item, index) => (
        <li key={index} className="instruction-li">
          <span className="span-bold-ol">{item.key}</span>
          <span>{item.value}</span>
        </li>
      ))}
    </ol>
  );
}
