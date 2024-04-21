import Home from "./index";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";

describe("<Home />", () => {
  it("should show the button for evaluation", () => {
    const { getByText } = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    expect(getByText("Evaluate yourself")).toBeInTheDocument();
  });
});
