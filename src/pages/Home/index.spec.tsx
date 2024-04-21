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

    expect(getByText("Test yourself")).toBeInTheDocument();
  });
});
