import FullScreenHero from "../../FullScreenHero";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../../../index.css";
import "../../../index2.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FullScreenHero rowGap="8px">
      <FullScreenHero.FullSection className="bg-red-400">
        <h2>Title</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates
          ad cupiditate neque quos magni quibusdam aperiam veniam dicta
          reprehenderit. Laboriosam molestiae recusandae illum distinctio
          pariatur fugiat praesentium consequuntur temporibus voluptatum.
        </p>
      </FullScreenHero.FullSection>

      <FullScreenHero.FullSection className="bg-green-500">
        <h2>Title 2</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis
          expedita assumenda commodi numquam adipisci rem praesentium dolores,
          modi possimus enim mollitia voluptas aperiam unde labore velit ut
          earum! Porro, consequatur.
        </p>
      </FullScreenHero.FullSection>
    </FullScreenHero>
  </StrictMode>,
);
