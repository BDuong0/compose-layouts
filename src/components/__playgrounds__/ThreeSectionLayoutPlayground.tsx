import ThreeSectionLayout from "src/components/ThreeSectionLayout";

function App() {
  return (
    <main>
      <ThreeSectionLayout>
        <ThreeSectionLayout.Header className="bg-yellow-400">
          <p>Header</p>
        </ThreeSectionLayout.Header>
        <ThreeSectionLayout.Content className="bg-red-300">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
            ducimus delectus sunt. Odio aliquid non accusantium laboriosam
            quaerat dignissimos? Non quis architecto deleniti eveniet cumque
            deserunt expedita eos facere molestias! Rerum veritatis provident
            doloremque nesciunt illo id aspernatur cum qui modi iure, sapiente
            pariatur quisquam iste, voluptatibus distinctio corporis ea
            accusantium at cumque laudantium commodi enim non fugiat error.
            Deserunt? Obcaecati delectus quibusdam beatae neque temporibus
            tenetur ratione porro totam recusandae, similique, ipsam dolor rem
            aut! Distinctio laborum iusto ut sed magnam veniam rem. Laudantium
            ab quasi voluptatibus dolor reprehenderit.
          </p>
        </ThreeSectionLayout.Content>
        <ThreeSectionLayout.Footer className="bg- bg-purple-300">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
            quisquam eos eveniet voluptates perspiciatis laudantium, blanditiis
            illum. Incidunt asperiores, ratione exercitationem beatae blanditiis
            at aperiam. Delectus perspiciatis repellat perferendis esse! Cum
            ratione eos amet ab magnam maxime, earum odit autem impedit dolorem
            et eius suscipit rerum adipisci veniam nulla distinctio recusandae
            doloremque? Ex tempore voluptatibus quisquam dignissimos possimus
            incidunt aliquid. Molestias incidunt tempore nam impedit
            consequuntur vitae non mollitia, dicta dolorem consectetur? Ea,
            corrupti vel laudantium perspiciatis sunt odio cum sed quod
            perferendis aspernatur quo repellat, sit voluptates incidunt et.
          </p>
        </ThreeSectionLayout.Footer>
      </ThreeSectionLayout>
    </main>
  );
}

export default App;
