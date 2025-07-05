import ThreeColumnLayout from "src/components/ThreeColumnLayout";

const ThreeColumnLayoutPlayground = () => {
  return (
    <ThreeColumnLayout layoutLevel="root">
      <ThreeColumnLayout.LeftColumn className="bg-red-400">
        <p>Left Column</p>
      </ThreeColumnLayout.LeftColumn>

      <ThreeColumnLayout.MiddleColumn className="bg-green-400">
        <p>Middle Column</p>
      </ThreeColumnLayout.MiddleColumn>

      <ThreeColumnLayout.RightColumn className="bg-blue-400">
        <p>Right Column</p>
      </ThreeColumnLayout.RightColumn>
    </ThreeColumnLayout>
  );
};

export default ThreeColumnLayoutPlayground;
