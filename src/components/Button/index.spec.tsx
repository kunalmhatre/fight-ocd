import Button from "./index";
import { render, fireEvent } from "@testing-library/react";

describe("<Button />", () => {
  it("should render a button with text", () => {
    const { getByText } = render(<Button>Click me</Button>);

    expect(getByText("Click me")).toBeInTheDocument();
  });

  it("should render a button with a disabled state", () => {
    const { getByText } = render(<Button disabled>Click me</Button>);

    expect(getByText("Click me")).toBeDisabled();
  });

  it("should call onClick when clicked", () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button onClick={onClick}>Click me</Button>);

    fireEvent.click(getByText("Click me"));

    expect(onClick).toHaveBeenCalled();
  });
});
