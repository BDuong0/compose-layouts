import BentoGrid from "../../../../lib/components/BentoGrid";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../../../index.css";
import "../../../index2.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BentoGrid numOfItems={7} layoutNum={2} gap="8px">
      <BentoGrid.ItemOne>
        <p>Item 1</p>
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
  </StrictMode>,
);
