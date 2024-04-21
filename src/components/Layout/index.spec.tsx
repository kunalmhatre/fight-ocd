import { BrowserRouter } from "react-router-dom";
import Layout from "./index";
import { render } from "@testing-library/react";

describe("<Layout />", () => {
  it("should render children", () => {
    const { getByText } = render(
      <BrowserRouter>
        <Layout>Children</Layout>
      </BrowserRouter>
    );

    expect(getByText("Children")).toBeInTheDocument();
  });

  it("should render header", () => {
    const { getByText } = render(
      <BrowserRouter>
        <Layout>Children</Layout>
      </BrowserRouter>
    );

    expect(getByText("Fight OCD")).toBeInTheDocument();
  });

  it("should render footer", () => {
    const { getByText } = render(
      <BrowserRouter>
        <Layout>Children</Layout>
      </BrowserRouter>
    );

    expect(getByText("About")).toBeInTheDocument();
    expect(getByText("Contribute")).toBeInTheDocument();
  });
});
