import TwoColumnLayout from "../../TwoColumnLayout";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../../../page_setup.js";

import { Button } from "@/components/ui/button";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TwoColumnLayout layoutLevel="root">
      <TwoColumnLayout.LeftColumn
        columnPercent={50}
        minWidth="515px"
        className="grid h-dvh place-items-center *:col-span-full *:row-span-full"
      >
        <img
          className="h-full object-cover"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.curioscene.com%2Fwp-content%2Fuploads%2F2020%2F06%2Fcreate-essential-graphics-with-pr-ae-9-1024x576.jpg&f=1&nofb=1&ipt=73e173e7d391902e79f16965ec15d7f3960ab7bd0ff7266f18bd045b7990e537"
          alt=""
        />
        <div className="h-full w-full bg-stone-950/40"></div>
        <div className="flex flex-col items-center">
          <h1 className="mt-[0] text-center">After Effects for AMV 101</h1>
          <p className="font-accent font-bold">
            Introduction to Making Anime Music Videos in After Effects
          </p>
          <Button className="bg-stone-500 hover:bg-stone-600" asChild>
            <a href="">Learn More</a>
          </Button>
        </div>
      </TwoColumnLayout.LeftColumn>

      <TwoColumnLayout.RightColumn
        columnPercent={50}
        minWidth="515px"
        className="grid h-dvh place-items-center *:col-span-full *:row-span-full"
      >
        <img
          className="h-full object-cover"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.sketchfab.com%2Fmodels%2F0bfd0e2b49a348a4b64b20cc8196e3b3%2Fthumbnails%2Fe98eceb3eefb4aab9683f9aa71586913%2F7217f161fb684115b577d42d937622ce.jpeg&f=1&nofb=1&ipt=c9a22cece4abc30665dfdc7c2c34d6b84c60db94123d7d807bde41f0e01fd869"
          alt=""
        />
        <div className="h-full w-full bg-stone-950/40"></div>
        <div className="flex flex-col items-center">
          <h1 className="mt-[0] text-center">Human Modeling in Blender 101</h1>
          <p className="font-accent font-bold">
            Introduction to Modeling Humans in Blender
          </p>
          <Button className="bg-stone-500 hover:bg-stone-600" asChild>
            <a href="">Learn More</a>
          </Button>
        </div>
      </TwoColumnLayout.RightColumn>
    </TwoColumnLayout>
  </StrictMode>,
);
