import { OneColumnLayout } from "@components/OneColumnLayout";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/page_setup.js";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <OneColumnLayout maxWidth="60ch">
      <h1>What I wish I knew before starting college</h1>

      <h2>Introduction</h2>
      <p>
        As I was coming to terms with the fact that my last days of high school
        were coming to an end, I started to reflect on how eventful my senior
        year was. From the time spent with my high school orchestra, my
        cybersecurity field trip to the local bank building, and me having a
        massive crush on this girl in my orchestra, I started to be scared of
        the uncertainty of how my life will unfold after high school. Teachers
        loomed over my head the idea that college is this scary place and you're
        in the real world once you graduate high school, but having gone through
        3 years of college myself, I would like to say that all of my
        misconceptions were debunked, and I can say that college is quite
        similar to high school. College is like high school except you have more
        flexible hours and you don't have teachers hollaring you to get your
        assignments done. I want to list out some things I wish I knew before
        going through college.
      </p>

      <h2>Parking can be a pain in the ass</h2>
      <figure className="flex flex-col items-center justify-center">
        <img
          className="h-[240px]"
          src="https://www.stthomas.edu/_media-library/_images/campus-safety/stthomas-parking-transportation-lot.jpg"
          alt="Outdoor Parking lot"
        />
        <figcaption className="mx-auto">
          <a href="https://www.stthomas.edu/_media-library/_images/campus-safety/stthomas-parking-transportation-lot.jpg">
            Image from the University of St. Thomas in Minnesota
          </a>
        </figcaption>
      </figure>

      <p>
        If you're going to live on campus for your entire college experience you
        can disregard this piece of advice. If you're living off campus and you
        have to drive to your college campus for classes, timing is so
        important. What I mean is there's a limited amount of parking sports and
        depending on the time of week and time of day you drive to your college
        campus, a different amount of opened parking spots are avaliable.
        Parking spots closer to a specific campus building are valueable and
        these spots can be filled very fast. In a parking garage, usually all of
        the parking spots on the first floor are all filled, because no one
        likes walking a shit ton to their class.
      </p>

      <ul className="list-disc">
        <li>
          Morning [~6 AM - ~9 AM]: 50/50 chance that you go to any parking lot
          on your campus and there are opened spots. For parking garages,
          usualyl the first floor isn't filled up
        </li>
        <li>
          Evening [~4 PM - ~7 PM]: My first evening class was at ~5 PM, and the
          plus is that parking lots that are usually completely filled
        </li>
      </ul>

      <h3>Shortcut to know if a parking lot is completely full</h3>
      <p>
        When you drive around a parking lot, if you see more than one car
        exiting the parking lot, then that parking lot must be full, because no
        one likes to spend lots of time driving around in a parking lot.
      </p>

      <h2>
        Dealing with the hot days as you go to college your fall semesters
      </h2>
      <p>
        Your fall semester would usually be from August all the way to November
        or December and the heat goes crazy in August and September. You're
        driving to campus and on the way your head and back are sweating like
        crazy and now you have to go to class sweaty. Here's how you prevent
        that terrible situation from happening.
      </p>

      <h3>Bring a fan to cool yourself off</h3>
      <figure className="flex flex-col items-center justify-center">
        <img
          className="h-[240px]"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.printables.com%2Fmedia%2Fprints%2F609926%2Fimages%2F6973189_1c055628-31cb-45d7-a538-e7ff67e6d868_f66bd8a6-beb5-4ef9-ae3a-56f099aa88ee%2Fimg-3.jpg&f=1&nofb=1&ipt=bd36663e812dd8ec5dafa129c86daeb91fe539708725fda887999626232f121c"
          alt="A handheld fan is standing up on a table with a smartphone leaning against it"
        />
      </figure>
      <p>
        If you do sweat a lot and it's unfessible for you to take a shower,
        because you're on campus then just hold fan and blow cool air on
        wherever you're sweating so you can cool off faster.
      </p>
      <h3>Bring towels with you to wipe off sweat</h3>
      <figure className="flex flex-col items-center justify-center">
        <img
          className="h-[240px]"
          src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpngimg.com%2Fuploads%2Ftowel%2Ftowel_PNG5.png&f=1&nofb=1&ipt=507fb9ff0a65151316ab7d4bd39e8e9cd6f5df72d5c9be378d9a9797bb368359"
          alt="A neatly folded up orange towel"
        />
      </figure>
      <p>
        When you're driving in a car in hot weather, your head and back may
        sweat a lot, so having a towel on hand to wipe off the sweat is useful.
      </p>
    </OneColumnLayout>
  </StrictMode>,
);
