import "./App.css";
import "./components/index";
import {
  ImageRecipe,
  IngreRecipe,
  InstrucRecipe,
  IntroRecipe,
  PrepRecipe,
  Subtitle,
  TableRecipe,
} from "./components/index";
import "./data/dataOmelette";
import {
  imgOmelette,
  ingreOmelette,
  instrucOmelette,
  introOmelette,
  prepOmelette,
  tableOmelette,
} from "./data/dataOmelette";

function App() {
  return (
    <>
      <div className="page">
        <div className="recipe">
          <header className="header-recipe">
            <ImageRecipe src={imgOmelette.src} alt={imgOmelette.alt} />

            <IntroRecipe
              title={introOmelette.title}
              text={introOmelette.text}
            />
          </header>
          <div className="content-recipe">
            <PrepRecipe title="Tiempo de preparación" data={prepOmelette} />

            <Subtitle text="Ingredientes" />
            <IngreRecipe data={ingreOmelette} />

            <Subtitle text="Instrucciones" />
            <InstrucRecipe data={instrucOmelette} />

            <Subtitle text="Nutrición" />
            <TableRecipe rows={tableOmelette} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
