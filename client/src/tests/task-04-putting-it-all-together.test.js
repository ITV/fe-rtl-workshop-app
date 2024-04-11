import { render, screen } from "@testing-library/react";
import App from "../App";

const mockData = {
  data: {
    id: "0",
    name: "Llama",
    image_link: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Black_Llama.jpg",
    latin_name: "Lama glama",
  },
};

const renderComponent = () => render(<App />);

describe("given the App is rendered", () => {
  it("should render the animal's latin name", () => {});

  describe("when the Next button is clicked", () => {
    it("should render another animal's latin name", () => {});
  });

  describe("when the Like button is clicked", () => {
    it("should render the liked animal's picture in the saved list", () => {});
  });
});
