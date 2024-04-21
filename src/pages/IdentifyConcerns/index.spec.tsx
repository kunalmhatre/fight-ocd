import IdentifyConcerns from "./index";
import { BrowserRouter } from "react-router-dom";
import { discomfortLevels as obsessionDiscomfortLevels } from "../../data/obsessions.json";
import { discomfortLevels as compulsionDiscomfortLevels } from "../../data/compulsions.json";
import { render } from "@testing-library/react";
import { compulsionsState } from "./mockData";

describe("<IdentifyConcerns />", () => {
  beforeAll(() => {
    Object.defineProperty(window, "location", {
      writable: true,
      value: {
        pathname: "/identify-obsessions",
      },
    });
  });

  it("should show buttons to rate a concern", () => {
    const { getByRole } = render(
      <BrowserRouter>
        <IdentifyConcerns />
      </BrowserRouter>
    );

    expect(getByRole("button", { name: "1" })).toBeInTheDocument();
    expect(getByRole("button", { name: "2" })).toBeInTheDocument();
    expect(getByRole("button", { name: "3" })).toBeInTheDocument();
    expect(getByRole("button", { name: "4" })).toBeInTheDocument();
    expect(getByRole("button", { name: "5" })).toBeInTheDocument();
  });

  it("should show button to navigate to a previous concern", () => {
    const { getByRole } = render(
      <BrowserRouter>
        <IdentifyConcerns />
      </BrowserRouter>
    );

    expect(getByRole("button", { name: "Previous" })).toBeInTheDocument();
  });

  it("should disable button to navigate to a previous concern on first concern", () => {
    const { getByRole } = render(
      <BrowserRouter>
        <IdentifyConcerns />
      </BrowserRouter>
    );

    expect(getByRole("button", { name: "Previous" })).toBeDisabled();
  });

  it("should show button to restart the rating process", () => {
    const { getByRole } = render(
      <BrowserRouter>
        <IdentifyConcerns />
      </BrowserRouter>
    );

    expect(getByRole("button", { name: "Restart" })).toBeInTheDocument();
  });

  it("should disable button to restart the rating process on first concern", () => {
    const { getByRole } = render(
      <BrowserRouter>
        <IdentifyConcerns />
      </BrowserRouter>
    );

    expect(getByRole("button", { name: "Restart" })).toBeDisabled();
  });

  describe("after rating is complete", () => {
    beforeAll(() => {
      Object.defineProperty(window, "location", {
        value: {
          pathname: "/identify-compulsions",
        },
      });

      jest
        .spyOn(window.localStorage.__proto__, "getItem")
        .mockImplementation(() => JSON.stringify(compulsionsState));
    });

    it("button to navigate to a previous concern should remain enabled", () => {
      const { getByRole } = render(
        <BrowserRouter>
          <IdentifyConcerns />
        </BrowserRouter>
      );

      expect(getByRole("button", { name: "Previous" })).not.toBeDisabled();
    });

    it("button to restart the rating process should remain enabled", () => {
      const { getByRole } = render(
        <BrowserRouter>
          <IdentifyConcerns />
        </BrowserRouter>
      );

      expect(getByRole("button", { name: "Restart" })).not.toBeDisabled();
    });

    it("should show button to generate report", () => {
      const { getByRole } = render(
        <BrowserRouter>
          <IdentifyConcerns />
        </BrowserRouter>
      );

      expect(
        getByRole("button", { name: "Generate Report" })
      ).toBeInTheDocument();
    });

    describe("should show correct information for progress indicators", () => {
      it("for themes", () => {
        const { getByText } = render(
          <BrowserRouter>
            <IdentifyConcerns />
          </BrowserRouter>
        );

        expect(
          getByText(
            `${compulsionsState.currentTheme + 1} of ${
              compulsionsState.themes.length
            } themes`
          )
        ).toBeInTheDocument();
      });

      it("for concerns", () => {
        const { getByText } = render(
          <BrowserRouter>
            <IdentifyConcerns />
          </BrowserRouter>
        );

        expect(
          getByText(
            `${compulsionsState.currentConcern + 1} of ${
              compulsionsState.themes[compulsionsState.currentTheme].concerns
                .length
            } compulsions`
          )
        ).toBeInTheDocument();
      });
    });
  });

  describe("should show information about different discomfort levels", () => {
    it("while identifying obsessions", () => {
      Object.defineProperty(window, "location", {
        value: {
          pathname: "/identify-obsessions",
        },
      });

      const { getByText } = render(
        <BrowserRouter>
          <IdentifyConcerns />
        </BrowserRouter>
      );

      expect(
        getByText(obsessionDiscomfortLevels[0].description)
      ).toBeInTheDocument();
      expect(
        getByText(obsessionDiscomfortLevels[1].description)
      ).toBeInTheDocument();
      expect(
        getByText(obsessionDiscomfortLevels[2].description)
      ).toBeInTheDocument();
      expect(
        getByText(obsessionDiscomfortLevels[3].description)
      ).toBeInTheDocument();
      expect(
        getByText(obsessionDiscomfortLevels[4].description)
      ).toBeInTheDocument();
    });

    it("while identifying compulsions", () => {
      Object.defineProperty(window, "location", {
        value: {
          pathname: "/identify-compulsions",
        },
      });

      const { getByText } = render(
        <BrowserRouter>
          <IdentifyConcerns />
        </BrowserRouter>
      );

      expect(
        getByText(compulsionDiscomfortLevels[0].description)
      ).toBeInTheDocument();
      expect(
        getByText(compulsionDiscomfortLevels[1].description)
      ).toBeInTheDocument();
      expect(
        getByText(compulsionDiscomfortLevels[2].description)
      ).toBeInTheDocument();
      expect(
        getByText(compulsionDiscomfortLevels[3].description)
      ).toBeInTheDocument();
      expect(
        getByText(compulsionDiscomfortLevels[4].description)
      ).toBeInTheDocument();
    });
  });
});
