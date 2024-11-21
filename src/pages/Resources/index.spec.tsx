import Resources from ".";
import { render, screen } from "@testing-library/react";
import resources from "../../data/resources.json";
import { BrowserRouter } from "react-router-dom";

describe("Resources", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Resources />
      </BrowserRouter>
    );
  });

  it("renders resources to read", () => {
    resources.read.forEach((resource) => {
      expect(screen.getByText(resource.title)).toBeInTheDocument();
    });
  });

  it("renders resources to watch", () => {
    resources.watch.forEach((resource) => {
      expect(screen.getByText(resource.title)).toBeInTheDocument();
    });
  });

  it("renders resources to listen", () => {
    resources.listen.forEach((resource) => {
      expect(screen.getByText(resource.title)).toBeInTheDocument();
    });
  });
});
