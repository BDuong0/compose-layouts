import BentoGrid from "./components/BentoGrid";

function App() {
  return (
    <main>
      <BentoGrid numOfItems={7} layoutNum={2} gap="var(--spacing-6)">
        <BentoGrid.ItemOne>
          <div className="text-neutral-450 mx-9 text-4xl">
            <p className="">Item 1</p>
          </div>
        </BentoGrid.ItemOne>

        <BentoGrid.ItemTwo>
          <p>Item 2</p>
        </BentoGrid.ItemTwo>

        <BentoGrid.ItemThree>
          <p>Item 3</p>
        </BentoGrid.ItemThree>

        <BentoGrid.ItemFour>
          <p>Item 4</p>
        </BentoGrid.ItemFour>

        <BentoGrid.ItemFive>
          <p>Item 5</p>
        </BentoGrid.ItemFive>

        <BentoGrid.ItemSix>
          <p>Item 6</p>
        </BentoGrid.ItemSix>

        <BentoGrid.ItemSeven>
          <p>Item 7</p>
        </BentoGrid.ItemSeven>
      </BentoGrid>
    </main>
  );
}

export default App;
