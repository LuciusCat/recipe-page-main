import "../css/TableRecipe.css";

interface TableRow {
  column1: string;
  column2: string;
}

interface Props {
  rows: TableRow[];
}

export default function TableRecipe({ rows }: Props) {
  return (
    <>
      <p>La siguiente tabla muestra los valores nutricionales por porción.</p>

      <table className="recipe-table">
        {rows.map((row, index) => (
          <tr key={index}>
            <td>{row.column1}</td>
            <td className="td-bold">{row.column2}</td>
          </tr>
        ))}
      </table>
    </>
  );
}
