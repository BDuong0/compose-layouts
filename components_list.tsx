type component = {
  [key: string]: { mdxFilename: string; demoPath: string };
};

const components: component = {
  "One Column": {
    mdxFilename: "one-column",
    demoPath: "src/components/demos/OneColumn/",
  },
  "Two Column": {
    mdxFilename: "two-column",
    demoPath: "src/components/demos/TwoColumn/",
  },
  "Three Column": {
    mdxFilename: "three-column",
    demoPath: "src/components/demos/ThreeColumn/",
  },
  "Three Section": {
    mdxFilename: "three-section",
    demoPath: "src/components/demos/ThreeSection/",
  },
  "Holy Grail": {
    mdxFilename: "holy-grail",
    demoPath: "src/components/demos/HolyGrail/",
  },
  "Full Screen Hero": {
    mdxFilename: "full-screen-hero",
    demoPath: "src/components/demos/FullScreenHero/",
  },
  "Card Grid": {
    mdxFilename: "card-grid",
    demoPath: "src/components/demos/CardGrid/",
  },
  "Bento Grid": {
    mdxFilename: "bento-grid",
    demoPath: "src/components/demos/BentoGrid/",
  },
  "NavBar": {
    mdxFilename: "simple-navbar",
    demoPath: "src/components/demos/NavBar/"
  }
};

export default components;
