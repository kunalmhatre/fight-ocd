import { BrowserRouter } from "react-router-dom";
import About from "./index";
import { render } from "@testing-library/react";

describe("<About />", () => {
  it("should render the About page", () => {
    const { getByRole } = render(
      <BrowserRouter>
        <About />
      </BrowserRouter>
    );

    expect(getByRole("heading")).toHaveTextContent("About");
  });
});
