import "../css/PrepRecipe.css";

interface DataItem {
  key: string;
  value: string | number;
}

interface Props {
  title: string;
  data: DataItem[];
}

export default function PrepRecipe({ data, title }: Props) {
  return (
    <>
      <article className="prep-container">
        <h3 className="title-prep">{title}</h3>
        <ul className="prep-ul">
          {data.map((item, index) => (
            <li className="prep-li" key={index}>
              <span className="span-bold-ul">{item.key}</span>
              <span>{item.value}</span>
            </li>
          ))}
        </ul>
      </article>
    </>
  );
}
