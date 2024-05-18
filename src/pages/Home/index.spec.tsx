import Home from "./index";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";

describe("<Home />", () => {
  it("should show the link for the test", () => {
    const { getByText } = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    expect(getByText("Take a test for OCD")).toBeInTheDocument();
  });

  it("should show the link to learn about OCD", () => {
    const { getByText } = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    expect(getByText("Learn about OCD")).toBeInTheDocument();
  });
});
