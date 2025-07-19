import HolyGrailLayout from "../../HolyGrailLayout";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../../../index.css";
import "../../../index2.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
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
  </StrictMode>,
);
