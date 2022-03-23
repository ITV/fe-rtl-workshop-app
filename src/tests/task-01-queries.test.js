import { render, screen } from "@testing-library/react";
import InfoTile from "../components/InfoTile";

const infoTileMock = {
  name: "test-name",
  image_link: "test-image-link",
  latin_name: "test-latin-name",
  animal_type: "test-animal-type",
  active_time: "test-active-time",
  habitat: "test-habitat",
};

const renderComponent = () => render(<InfoTile {...infoTileMock} />);

describe("given the InfoTile component is rendered", () => {
  it("then should contain a title", () => {});

  it("then should contain an image with the expect alt text and source", () => {});

  it("then should contain all 4 bullet points with expect text", () => {});
});
