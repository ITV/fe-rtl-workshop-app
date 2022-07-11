import { fireEvent, render, screen } from "@testing-library/react";
import SavedList from "../components/SavedList";
import { LikesContext } from "../contexts/Likes";

const mockLikesWithItems = {
  one: {
    name: "Llama",
    image_link: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Black_Llama.jpg",
  },
  two: {
    name: "Ring-tailed Lemur",
    image_link: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Ring-tailed_lemur_%28Lemur_catta%29.jpg",
  },
};

const renderListComponent = () => {
  return render(<SavedList />);
};

describe("given the SavedList component is rendered", () => {
  describe("when multiple liked items exist", () => {
    it("then should contain a heading", () => {});

    it("then should contain multiple items with images", () => {});

    it("should contain checkboxes for each item", () => {});

    describe("and none have been checked", () => {
      it("then the remove button should be disabled", () => {});
    });

    describe("and the a checkbox for an item is selected", () => {
      describe("and the remove button is clicked", () => {
        it("then should call the removeItems function", () => {});
      });
    });
  });

  describe("when no liked items are stored", () => {
    it("then should not contain a heading", () => {});

    it("then should not contain items", () => {});
  });
});
