import Button from "../../components/Button";
import Layout from "../../components/Layout";
import { discomfortLevels as obsessionDiscomfortLevels } from "../../data/obsessions.json";
import { Wrapper } from "./styles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Report = () => {
  const navigate = useNavigate();

  const shouldShowObsessionsReport =
    window.location.pathname === "/obsessions-report";

  const [concernsState, setConcernsState] = useState(
    shouldShowObsessionsReport
      ? JSON.parse(localStorage.getItem("obsessionsState") || "{}")
      : JSON.parse(localStorage.getItem("compulsionsState") || "{}")
  );

  let themesWithDiscomfortLevel5 = [];
  let themesWithDiscomfortLevel4 = [];
  let themesWithDiscomfortLevel3 = [];

  let filteredThemesWithDiscomfortLevel5 = [];
  let filteredThemesWithDiscomfortLevel4 = [];
  let filteredThemesWithDiscomfortLevel3 = [];

  let isReportEmpty = true;

  if (concernsState) {
    themesWithDiscomfortLevel5 = concernsState.themes.map((theme) => {
      const concernsWithDiscomfortLevel5 = theme.concerns.filter(
        (concern) => concern.discomfortLevel === 5
      );

      return {
        title: theme.title,
        concerns: concernsWithDiscomfortLevel5,
      };
    });

    filteredThemesWithDiscomfortLevel5 = themesWithDiscomfortLevel5.filter(
      (theme) => theme.concerns.length > 0
    );

    filteredThemesWithDiscomfortLevel5.sort((a, b) => {
      if (a.concerns.length > b.concerns.length) {
        return -1;
      }

      if (a.concerns.length < b.concerns.length) {
        return 1;
      }

      return 0;
    });

    themesWithDiscomfortLevel4 = concernsState.themes.map((theme) => {
      const concernsWithDiscomfortLevel4 = theme.concerns.filter(
        (concern) => concern.discomfortLevel === 4
      );

      return {
        title: theme.title,
        concerns: concernsWithDiscomfortLevel4,
      };
    });

    filteredThemesWithDiscomfortLevel4 = themesWithDiscomfortLevel4.filter(
      (theme) => theme.concerns.length > 0
    );

    filteredThemesWithDiscomfortLevel4.sort((a, b) => {
      if (a.concerns.length > b.concerns.length) {
        return -1;
      }

      if (a.concerns.length < b.concerns.length) {
        return 1;
      }

      return 0;
    });

    themesWithDiscomfortLevel3 = concernsState.themes.map((theme) => {
      const concernsWithDiscomfortLevel3 = theme.concerns.filter(
        (concern) => concern.discomfortLevel === 3
      );

      return {
        title: theme.title,
        concerns: concernsWithDiscomfortLevel3,
      };
    });

    filteredThemesWithDiscomfortLevel3 = themesWithDiscomfortLevel3.filter(
      (theme) => theme.concerns.length > 0
    );

    filteredThemesWithDiscomfortLevel3.sort((a, b) => {
      if (a.concerns.length > b.concerns.length) {
        return -1;
      }

      if (a.concerns.length < b.concerns.length) {
        return 1;
      }

      return 0;
    });

    isReportEmpty =
      filteredThemesWithDiscomfortLevel5.length === 0 &&
      filteredThemesWithDiscomfortLevel4.length === 0 &&
      filteredThemesWithDiscomfortLevel3.length === 0;
  }

  return (
    <Layout>
      <Wrapper>
        <h1>
          {shouldShowObsessionsReport ? "Obsessions" : "Compulsions"} Report
        </h1>
        <p className="description">
          {!isReportEmpty || !concernsState ? (
            <>
              You can download and share your report with a therapist who
              specializes in treating OCD using ERP. Your report is generated on
              your browser and we do not store your report or any of the data
              you provided for creating the report with us.
            </>
          ) : (
            <>
              You probably do not have{" "}
              {shouldShowObsessionsReport ? "obsessions" : "compulsions"} that
              needs attention at this time. But if something is bothering you
              about yourself then you should consult a therapist and get
              yourself treated as soon as possible because mental health is as
              important as physical health. We wish you well.
            </>
          )}{" "}
          If you have not taken the test to identify your{" "}
          {shouldShowObsessionsReport ? "compulsions" : "obsessions"} then you
          can take it by clicking the button below.
        </p>
        <div className="cta-containers">
          {!isReportEmpty && concernsState && (
            <Button onClick={() => null} disabled={!concernsState}>
              Download
            </Button>
          )}

          <Button
            onClick={() =>
              navigate(
                shouldShowObsessionsReport
                  ? "/identify-compulsions"
                  : "/identify-obsessions"
              )
            }
          >
            {shouldShowObsessionsReport
              ? "Identity Compulsions"
              : "Identify Obsessions"}
          </Button>
        </div>
        <Button
          className="clear-data-button"
          onClick={() => {
            localStorage.removeItem(
              shouldShowObsessionsReport
                ? "obsessionsState"
                : "compulsionsState"
            );

            setConcernsState(null);
          }}
          state="danger"
        >
          Clear Data
        </Button>
        <hr />
        {!isReportEmpty && !!concernsState && (
          <div>
            <p>October 22, 2023</p>
            {filteredThemesWithDiscomfortLevel5.length > 0 && (
              <>
                <h2 className="attention-title">Needs immediate attention!</h2>
                <p className="discomfort-level">
                  Discomfort Level: 5 (out of 5)
                </p>
                <p className="discomfort-level-description">
                  {obsessionDiscomfortLevels[4].description}
                </p>
                <ol>
                  {filteredThemesWithDiscomfortLevel5.map((theme) => (
                    <li className="theme-number">
                      <h3 className="theme">{theme.title}</h3>
                      <ol>
                        {theme.concerns.map((concern) => (
                          <li className="concern">{concern.concern}</li>
                        ))}
                      </ol>
                    </li>
                  ))}
                </ol>
                <hr />
              </>
            )}
            {filteredThemesWithDiscomfortLevel4.length > 0 && (
              <>
                <h2 className="attention-title">Needs attention</h2>
                <p className="discomfort-level">
                  Discomfort Level: 4 (out of 5)
                </p>
                <p className="discomfort-level-description">
                  {obsessionDiscomfortLevels[3].description}
                </p>
                <ol>
                  {filteredThemesWithDiscomfortLevel4.map((theme) => (
                    <li className="theme-number">
                      <h3 className="theme">{theme.title}</h3>
                      <ol>
                        {theme.concerns.map((concern) => (
                          <li className="concern">{concern.concern}</li>
                        ))}
                      </ol>
                    </li>
                  ))}
                </ol>
                <hr />
              </>
            )}
            {filteredThemesWithDiscomfortLevel3.length > 0 && (
              <>
                <h2 className="attention-title">
                  Needs to be worked on before it gets worse
                </h2>
                <p className="discomfort-level">
                  Discomfort Level: 3 (out of 5)
                </p>
                <p className="discomfort-level-description">
                  {obsessionDiscomfortLevels[2].description}
                </p>
                <ol>
                  {filteredThemesWithDiscomfortLevel3.map((theme) => (
                    <li className="theme-number">
                      <h3 className="theme">{theme.title}</h3>
                      <ol>
                        {theme.concerns.map((concern) => (
                          <li className="concern">{concern.concern}</li>
                        ))}
                      </ol>
                    </li>
                  ))}
                </ol>
                <hr />
              </>
            )}
            <p>Report generated by Fight OCD (https://www.fightocd.org)</p>
          </div>
        )}
      </Wrapper>
    </Layout>
  );
};

export default Report;
