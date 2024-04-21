import Report from "./index";
import { render } from "@testing-library/react";
import { compulsionsState, obsessionsState } from "./mockData";
import { BrowserRouter } from "react-router-dom";

jest.mock("@react-pdf/renderer", () => ({
  PDFDownloadLink: ({ children }: { children: string }) => <>{children}</>,
  StyleSheet: {
    create: () => ({}),
  },
}));

describe("<Report />", () => {
  describe("when the user is on the obsessions report page", () => {
    beforeAll(() => {
      Object.defineProperty(window, "location", {
        writable: true,
        value: {
          pathname: "/obsessions-report",
        },
      });

      jest
        .spyOn(window.localStorage.__proto__, "getItem")
        .mockImplementation(() => JSON.stringify(obsessionsState));
    });

    it("should show the correct title", () => {
      const { getByText } = render(
        <BrowserRouter>
          <Report />
        </BrowserRouter>
      );

      expect(getByText("Obsessions Report")).toBeInTheDocument();
    });

    it("should show button to download report", () => {
      const { getByRole } = render(
        <BrowserRouter>
          <Report />
        </BrowserRouter>
      );

      expect(getByRole("button", { name: "Download" })).toBeInTheDocument();
    });

    it("should show button to identify compulsions", () => {
      const { getByRole } = render(
        <BrowserRouter>
          <Report />
        </BrowserRouter>
      );

      expect(
        getByRole("button", { name: "Identify Compulsions" })
      ).toBeInTheDocument();
    });

    it("should show button to clear data", () => {
      const { getByRole } = render(
        <BrowserRouter>
          <Report />
        </BrowserRouter>
      );

      expect(getByRole("button", { name: "Clear Data" })).toBeInTheDocument();
    });
  });

  describe("when the user is on the compulsions report page", () => {
    beforeAll(() => {
      Object.defineProperty(window, "location", {
        value: {
          pathname: "/compulsions-report",
        },
      });

      jest
        .spyOn(window.localStorage.__proto__, "getItem")
        .mockImplementation(() => JSON.stringify(compulsionsState));
    });

    it("should show the correct title", () => {
      const { getByText } = render(
        <BrowserRouter>
          <Report />
        </BrowserRouter>
      );

      expect(getByText("Compulsions Report")).toBeInTheDocument();
    });

    it("should show button to download report", () => {
      const { getByRole } = render(
        <BrowserRouter>
          <Report />
        </BrowserRouter>
      );

      expect(getByRole("button", { name: "Download" })).toBeInTheDocument();
    });

    it("should show button to identify obsessions", () => {
      const { getByRole } = render(
        <BrowserRouter>
          <Report />
        </BrowserRouter>
      );

      expect(
        getByRole("button", { name: "Identify Obsessions" })
      ).toBeInTheDocument();
    });

    it("should show button to clear data", () => {
      const { getByRole } = render(
        <BrowserRouter>
          <Report />
        </BrowserRouter>
      );

      expect(getByRole("button", { name: "Clear Data" })).toBeInTheDocument();
    });
  });
});
