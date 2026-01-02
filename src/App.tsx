import { CardGrid } from "@components/CardGrid";
import components from "../components_list";

function App() {
  return (
    <main>
      <CardGrid maxColumns={3} minItemPixelWidth="200px" gap="4px">
        {Object.entries(components).map(([componentName, properties]) => {
          const demoPath = properties["demoPath"];

          return (
            <a href={demoPath} key={componentName}>
              {componentName}
            </a>
          );
        })}
      </CardGrid>
    </main>
  );
}

export default App;
