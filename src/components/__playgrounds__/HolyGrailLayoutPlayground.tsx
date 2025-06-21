import HolyGrailLayout from "src/components/HolyGrailLayout";

function App() {
  return (
    <main>
      <HolyGrailLayout>
        <HolyGrailLayout.Header className="bg-yellow-400">
          <p>Header</p>
        </HolyGrailLayout.Header>

        <HolyGrailLayout.Left className="bg-red-400">
          <p>Left</p>
        </HolyGrailLayout.Left>

        <HolyGrailLayout.Content className="bg-blue-400">
          <p>Content</p>
        </HolyGrailLayout.Content>

        <HolyGrailLayout.Footer className="bg-orange-500">
          <p>Footer</p>
        </HolyGrailLayout.Footer>

        <HolyGrailLayout.Right className="bg-green-400">
          <p>Right</p>
        </HolyGrailLayout.Right>
      </HolyGrailLayout>
    </main>
  );
}

export default App;
