import CardGrid from "../../../../../../../src/components/CardGrid";

import { components } from "./list";

const ComponentGallery = () => {
  return (
    <CardGrid maxColumns={3} minItemPixelWidth="200px" gap="24px">
      {components.map((component) => {
        return (
          <a
            className="font-medium text-white no-underline hover:underline"
            href={component.pageLink}
          >
            {component.name}
          </a>
        );
      })}
    </CardGrid>
  );
};

export default ComponentGallery;
