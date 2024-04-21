import EvaluateYourself from "./index";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";

describe("<EvaluateYourself />", () => {
  it("should show button for identifying obsessions", () => {
    const { getByText } = render(
      <BrowserRouter>
        <EvaluateYourself />
      </BrowserRouter>
    );

    expect(getByText("Identify Obsessions")).toBeInTheDocument();
  });

  it("should show button for identifying compulsions", () => {
    const { getByText } = render(
      <BrowserRouter>
        <EvaluateYourself />
      </BrowserRouter>
    );

    expect(getByText("Identify Compulsions")).toBeInTheDocument();
  });
});
