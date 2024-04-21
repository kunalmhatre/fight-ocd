import TestYourself from "./index";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";

describe("<TestYourself />", () => {
  it("should show button for identifying obsessions", () => {
    const { getByText } = render(
      <BrowserRouter>
        <TestYourself />
      </BrowserRouter>
    );

    expect(getByText("Identify Obsessions")).toBeInTheDocument();
  });

  it("should show button for identifying compulsions", () => {
    const { getByText } = render(
      <BrowserRouter>
        <TestYourself />
      </BrowserRouter>
    );

    expect(getByText("Identify Compulsions")).toBeInTheDocument();
  });
});
