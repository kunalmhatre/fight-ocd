import { Link } from "./index";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("<Link />", () => {
  it("should render a link with text", () => {
    const { getByText } = render(
      <BrowserRouter>
        <Link to="/test">Test</Link>
      </BrowserRouter>
    );

    expect(getByText("Test")).toBeInTheDocument();
  });
});
