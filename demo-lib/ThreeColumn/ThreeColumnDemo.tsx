import { ThreeColumnLayout } from "@components/ThreeColumnLayout";
import Navbar from "./Navbar";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/page_setup.js";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <style>{`
      img {
        max-height: 240px; 
      }
    `}</style>
    <Navbar />
    <ThreeColumnLayout layoutLevel="root" gap="26px" className="px-6">
      <ThreeColumnLayout.LeftColumn className="pl-1">
        <img
          className="w-full"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fst.hzcdn.com%2Fsimgs%2F34813b1306ce22ad_4-7944%2Fcontemporary-home-gym.jpg&f=1&nofb=1&ipt=0027e5d4cfd3ecde7426d2ba38278b68ca1c7d1151b56464538a2a9d3c6db5e7"
          alt=""
        />
        <a className="my-3 block text-xl font-bold hover:underline" href="">
          A Minimalist Home Gym Setup For Mainly Bodyweight Focused Exercise
        </a>
        <ul className="pl-0 *:hover:underline">
          <hr className="h-0.5 border-none bg-stone-700" />
          <li className="my-3">
            <a href="">Top 3 Ice Tub products</a>
          </li>
          <hr className="h-0.5 border-none bg-stone-700" />
          <li className="my-3">
            <a href="">Top 3 Tips for Better Sleep</a>
          </li>
          <hr className="h-0.5 border-none bg-stone-700" />
          <li className="my-3">
            <a href="">Tips for working out in the winter</a>
          </li>
          <hr className="h-0.5 border-none bg-stone-700" />
          <li className="my-3">
            <a href="">
              Why I don't train chest and why I don't think it's ncessary
            </a>
          </li>
          <hr className="h-0.5 border-none bg-stone-700" />
          <li className="my-3">
            <a href="">Solutions to Adequately Train Hamstrnigs at Home</a>
          </li>
        </ul>
      </ThreeColumnLayout.LeftColumn>

      <ThreeColumnLayout.MiddleColumn className="px-1">
        <div className="flex justify-center">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fshapingyouth.org%2Fwp-content%2Fuploads%2F2014%2F06%2FBigorexia-graphic.jpg&f=1&nofb=1&ipt=dafdceae2df38dcf31780508391dd0a441d6c83685e53d822c079ba1c860daf6"
            alt=""
          />
        </div>
        <a className="my-3 block text-xl font-bold hover:underline" href="">
          The Ultimate Solution to Body Dysmorphia
        </a>

        <img
          className="w-full"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpixnio.com%2Ffree-images%2F2019%2F01%2F10%2F2019-01-10-09-10-23-1200x800.jpg&f=1&nofb=1&ipt=9f553c8a418a334dbffb5ce79dbea94b8272fe8c08a8e17f14e6d651ffb9d46e"
          alt=""
        />
        <a className="my-3 block text-xl font-bold hover:underline" href="">
          Why I prefer working out at home
        </a>
      </ThreeColumnLayout.MiddleColumn>

      <ThreeColumnLayout.RightColumn className="pr-1">
        <div className="flex">
          <div className="basis-[30%]">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F51-Dc3DKvOL.jpg&f=1&nofb=1&ipt=ce6f9976e7a4bc8fd8822825565b7c9be8fd93dfa7d6be67b1d58e8a7a295b95"
              alt=""
            />
          </div>
          <a className="basis-[70%] pl-2 hover:underline" href="">
            The Simplest DIY Dip Belt
          </a>
        </div>
        <hr className="my-3 h-0.5 border-none bg-stone-700" />

        <div className="flex">
          <div className="basis-[30%]">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fshreddeddad.com%2Fwp-content%2Fuploads%2F2022%2F04%2FFreak-athletic-essentials-iron-tib-bar-17-1024x801.jpeg&f=1&nofb=1&ipt=66982c93efc43cbd025bbabf8a0f1e52fd27ddce6987e54be55bddfcaedfea62"
              alt=""
            />
            <a href="https://shreddeddad.com/tib-bar/">Image Source</a>
          </div>
          <a className="basis-[70%] pl-2 hover:underline" href="">
            DIY Tib Bar
          </a>
        </div>
        <hr className="my-3 h-0.5 border-none bg-stone-700" />

        <div className="flex">
          <div className="basis-[30%]">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Farmbet.net%2Fcdn%2Fshop%2Fproducts%2Fjudo-belt-with-hand_800x.jpg%3Fv%3D1636351841&f=1&nofb=1&ipt=412f70880c86ebf0c48c159a82c9a7ac49c4e3c56cf94450ed4dd4102d8d0364"
              alt=""
            />
            <a href="https://armbet.net/products/armwrestling-judo-belt">
              Image Source
            </a>
          </div>
          <a className="basis-[70%] pl-2 hover:underline" href="">
            The Rope/Judo Belt is a game changer for arms
          </a>
        </div>
      </ThreeColumnLayout.RightColumn>
    </ThreeColumnLayout>
  </StrictMode>,
);
