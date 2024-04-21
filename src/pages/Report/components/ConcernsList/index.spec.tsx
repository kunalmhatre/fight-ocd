import ConcernsList from "./index";
import { render, screen } from "@testing-library/react";
import { themes } from "./mockData";

jest.mock("@react-pdf/renderer", () => ({
  StyleSheet: {
    create: () => ({}),
  },
}));

describe("<ConcernsList />", () => {
  const title = "TEST TITLE";
  const discomfortLevel = 5;
  const discomfortLevelDescription = "TEST DESCRIPTION";

  beforeEach(() => {
    render(
      <ConcernsList
        title={title}
        discomfortLevel={discomfortLevel}
        discomfortLevelDescription={discomfortLevelDescription}
        themes={themes}
      />
    );
  });

  it("should show title", () => {
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(themes[0].title)).toBeInTheDocument();
    expect(screen.getByText(themes[0].concerns[0].concern)).toBeInTheDocument();
  });

  it("should show Discomfort Level", () => {
    expect(
      screen.getByText(`Discomfort Level: ${discomfortLevel} (out of 5)`)
    ).toBeInTheDocument();
  });

  it("should show description for Discomfort Level", () => {
    expect(screen.getByText(discomfortLevelDescription)).toBeInTheDocument();
  });

  it("should show theme title", () => {
    expect(screen.getByText(themes[0].title)).toBeInTheDocument();
  });

  it("should show concern", () => {
    expect(screen.getByText(themes[0].concerns[0].concern)).toBeInTheDocument();
  });
});
