import TwoColumnLayout from "../../TwoColumnLayout";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../../../index.css";
import "../../../index2.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TwoColumnLayout layoutLevel="root">
      <TwoColumnLayout.LeftColumn columnPercent={20} className="bg-red-400">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique,
          neque nihil. Omnis est enim, tenetur voluptate sed totam et nihil ab
          porro quam eveniet doloribus at eum expedita culpa vel! Aut optio
          accusamus dolorem, enim perspiciatis id et voluptate assumenda
          voluptatem ullam sequi esse error non quasi quaerat corrupti hic
          quibusdam sed fugiat? Error tempore, nulla illo dignissimos sed
          veniam.
        </p>
      </TwoColumnLayout.LeftColumn>
      <TwoColumnLayout.RightColumn
        columnPercent={80}
        minWidth={"65ch"}
        className="bg-blue-300"
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, sed?
          Sed, aut! Ipsam expedita perferendis et itaque necessitatibus libero
          veniam inventore vel rem esse, dicta perspiciatis unde dolore
          consectetur quasi. Adipisci quo rerum, natus dolorem aspernatur ab
          voluptate deserunt. Veniam maiores ducimus id soluta officiis, impedit
          qui facere eos! Libero, iusto cum optio ipsum itaque quibusdam quis
          quaerat voluptates culpa.
        </p>
      </TwoColumnLayout.RightColumn>
    </TwoColumnLayout>
  </StrictMode>,
);
