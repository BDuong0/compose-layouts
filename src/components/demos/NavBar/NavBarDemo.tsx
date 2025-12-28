import {NavBar, NavBarLogo, NavBarOpenTrigger} from "../../NavBar.js";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../../../page_setup.js";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NavBar className="mx-auto flex w-8/10 items-center justify-around max-md:w-screen max-md:justify-between">
      <NavBarLogo>
        <img width={50} src="https://vite.dev/logo.svg" alt="Vite logo" />
      </NavBarLogo>

      <NavBarOpenTrigger/>
    </NavBar>
  </StrictMode>,
);
