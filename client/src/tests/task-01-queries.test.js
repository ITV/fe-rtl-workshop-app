import { render, screen } from "@testing-library/react";
import InfoTile from "../components/InfoTile";

const infoTileMock = {
  name: "Llama",
  image_link: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Black_Llama.jpg",
  latin_name: "Lama glama",
  animal_type: "Mammal",
  active_time: "Diurnal",
  habitat: "High plateau",
};

const renderComponent = () => render(<InfoTile {...infoTileMock} />);

describe("given the InfoTile component is rendered", () => {
  it("then should contain a title", () => {});

  it("then should contain an image with the expect alt text and source", () => {});

  it("then should contain all 4 bullet points with expected text in the correct order", () => {});
});
