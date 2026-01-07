type component = {
  [key: string]: { mdxFilename: string; demoPath: string };
};

const components: component = {
  "One Column": {
    mdxFilename: "one-column",
    demoPath: "demo-lib/OneColumn/",
  },
  "Two Column": {
    mdxFilename: "two-column",
    demoPath: "demo-lib/TwoColumn/",
  },
  "Three Column": {
    mdxFilename: "three-column",
    demoPath: "demo-lib/ThreeColumn/",
  },
  "Three Section": {
    mdxFilename: "three-section",
    demoPath: "demo-lib/ThreeSection/",
  },
  "Holy Grail": {
    mdxFilename: "holy-grail",
    demoPath: "demo-lib/HolyGrail/",
  },
  "Full Screen Hero": {
    mdxFilename: "full-screen-hero",
    demoPath: "demo-lib/FullScreenHero/",
  },
  "Card Grid": {
    mdxFilename: "card-grid",
    demoPath: "demo-lib/CardGrid/",
  },
  "Bento Grid": {
    mdxFilename: "bento-grid",
    demoPath: "demo-lib/BentoGrid/",
  },
  "NavBar": {
    mdxFilename: "simple-navbar",
    demoPath: "demo-lib/NavBar/"
  }
};

export default components;
