import { BrowserRouter } from "react-router-dom";
import Contribute from "./index";
import { render } from "@testing-library/react";

describe("<Contribute />", () => {
  it("should show the Discord link", () => {
    const { getByText } = render(
      <BrowserRouter>
        <Contribute />
      </BrowserRouter>
    );

    expect(getByText("our Discord community")).toBeInTheDocument();
  });

  it("should show the Email ID", () => {
    const { getByText } = render(
      <BrowserRouter>
        <Contribute />
      </BrowserRouter>
    );

    expect(getByText("contact@fightocd.org")).toBeInTheDocument();
  });

  it("should show the GitHub link", () => {
    const { getByText } = render(
      <BrowserRouter>
        <Contribute />
      </BrowserRouter>
    );

    expect(getByText("our open source project on GitHub")).toBeInTheDocument();
  });
});
