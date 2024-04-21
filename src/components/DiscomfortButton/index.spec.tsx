import DiscomfortButton from "./index";
import { render, fireEvent } from "@testing-library/react";

describe("<DiscomfortButton />", () => {
  it("should render a button with text", () => {
    const { getByText } = render(
      <DiscomfortButton level={1} onClick={() => {}} />
    );

    expect(getByText("1")).toBeInTheDocument();
  });

  it("should call onClick when clicked", () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <DiscomfortButton level={1} onClick={onClick} />
    );

    fireEvent.click(getByText("1"));

    expect(onClick).toHaveBeenCalled();
  });
});
