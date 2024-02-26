import Button from "../../components/Button";
import Layout from "../../components/Layout";
import { discomfortLevels as obsessionDiscomfortLevels } from "../../data/obsessions.json";
import { discomfortLevels as compulsionDiscomfortLevels } from "../../data/compulsions.json";
import { Wrapper } from "./styles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { transformConcerns } from "./helpers/transformConcerns";
import {
  PDFDownloadLink,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 32,
  },
  header: {
    fontSize: 24,
    margin: "16px 0",
  },
  body: {
    fontSize: 12,
    lineHeight: 1.5,
  },
  caption: {
    fontSize: 12,
    lineHeight: 1.5,
    color: "grey",
    margin: "6px 0",
  },
  subheader: {
    fontSize: 18,
    margin: "12px 0",
  },
  obsessions: {
    paddingLeft: 24,
  },
  footer: {
    fontSize: 12,
    paddingTop: 24,
    marginTop: 24,
    borderTop: "1px solid grey",
  },
});

const Report = () => {
  const navigate = useNavigate();

  const shouldShowObsessionsReport =
    window.location.pathname === "/obsessions-report";

  const [concernsState, setConcernsState] = useState(
    shouldShowObsessionsReport
      ? JSON.parse(localStorage.getItem("obsessionsState") || "null")
      : JSON.parse(localStorage.getItem("compulsionsState") || "null")
  );

  let filteredThemesWithDiscomfortLevel5 = [];
  let filteredThemesWithDiscomfortLevel4 = [];
  let filteredThemesWithDiscomfortLevel3 = [];

  let isReportEmpty = true;

  if (concernsState) {
    filteredThemesWithDiscomfortLevel5 = transformConcerns(concernsState, 5);
    filteredThemesWithDiscomfortLevel4 = transformConcerns(concernsState, 4);
    filteredThemesWithDiscomfortLevel3 = transformConcerns(concernsState, 3);

    isReportEmpty =
      filteredThemesWithDiscomfortLevel5.length === 0 &&
      filteredThemesWithDiscomfortLevel4.length === 0 &&
      filteredThemesWithDiscomfortLevel3.length === 0;
  }

  const MyDoc = () => (
    <Document>
      <Page style={styles.page} wrap>
        <View>
          <Text style={styles.body}>October 22, 2023</Text>
          <View>
            {filteredThemesWithDiscomfortLevel5.length > 0 && (
              <>
                <Text style={styles.header}>Needs immediate attention!</Text>
                <Text style={styles.body}>Discomfort Level: 5 (out of 5)</Text>
                <Text style={styles.caption}>
                  {shouldShowObsessionsReport
                    ? obsessionDiscomfortLevels[4].description
                    : compulsionDiscomfortLevels[4].description}
                </Text>
                <View>
                  {filteredThemesWithDiscomfortLevel5.map(
                    (theme, themeIndex) => (
                      <View key={themeIndex}>
                        <Text style={styles.subheader}>{`${themeIndex + 1}. ${
                          theme.title
                        }`}</Text>
                        <View style={styles.obsessions}>
                          {theme.concerns.map((concern, concernIndex) => (
                            <Text style={styles.body} key={concernIndex}>{`${
                              concernIndex + 1
                            }. ${concern.concern}`}</Text>
                          ))}
                        </View>
                      </View>
                    )
                  )}
                </View>
              </>
            )}
          </View>
          <View>
            {filteredThemesWithDiscomfortLevel4.length > 0 && (
              <>
                <Text style={styles.header}>Needs attention</Text>
                <Text style={styles.body}>Discomfort Level: 4 (out of 5)</Text>
                <Text style={styles.caption}>
                  {shouldShowObsessionsReport
                    ? obsessionDiscomfortLevels[3].description
                    : compulsionDiscomfortLevels[3].description}
                </Text>
                <View>
                  {filteredThemesWithDiscomfortLevel4.map(
                    (theme, themeIndex) => (
                      <View key={themeIndex}>
                        <Text style={styles.subheader}>{`${themeIndex + 1}. ${
                          theme.title
                        }`}</Text>
                        <View style={styles.obsessions}>
                          {theme.concerns.map((concern, concernIndex) => (
                            <Text style={styles.body} key={concernIndex}>{`${
                              concernIndex + 1
                            }. ${concern.concern}`}</Text>
                          ))}
                        </View>
                      </View>
                    )
                  )}
                </View>
              </>
            )}
          </View>
          <View>
            {filteredThemesWithDiscomfortLevel3.length > 0 && (
              <>
                <Text style={styles.header}>
                  Needs to be worked on before it gets worse
                </Text>
                <Text style={styles.body}>Discomfort Level: 3 (out of 5)</Text>
                <Text style={styles.caption}>
                  {shouldShowObsessionsReport
                    ? obsessionDiscomfortLevels[2].description
                    : compulsionDiscomfortLevels[2].description}
                </Text>
                <View>
                  {filteredThemesWithDiscomfortLevel3.map(
                    (theme, themeIndex) => (
                      <View key={themeIndex}>
                        <Text style={styles.subheader}>{`${themeIndex + 1}. ${
                          theme.title
                        }`}</Text>
                        <View style={styles.obsessions}>
                          {theme.concerns.map((concern, concernIndex) => (
                            <Text style={styles.body} key={concernIndex}>{`${
                              concernIndex + 1
                            }. ${concern.concern}`}</Text>
                          ))}
                        </View>
                      </View>
                    )
                  )}
                </View>
              </>
            )}
          </View>
          <Text style={styles.footer}>
            Report generated by Fight OCD (
            <Link src="https://www.fightocd.org">https://www.fightocd.org</Link>
            )
          </Text>
        </View>
      </Page>
    </Document>
  );

  return (
    <Layout>
      <Wrapper>
        <h1>
          {shouldShowObsessionsReport ? "Obsessions" : "Compulsions"} Report
        </h1>
        <p className="description">
          {concernsState && !isReportEmpty ? (
            <>
              You can download and share your report with a therapist who
              specializes in treating OCD using ERP. Your report is generated on
              your browser and we do not store your report or any of the data
              you provided for creating the report with us. The data regarding
              evaluation is stored in your browser and can be cleared by
              clicking the "Clear Data" button.
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
          can take it by clicking the respective button below.
        </p>
        <div className="cta-containers">
          {!isReportEmpty && concernsState && (
            <Button>
              <PDFDownloadLink
                document={<MyDoc />}
                fileName="somename.pdf"
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
              >
                Download
              </PDFDownloadLink>
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
            disabled={!concernsState}
          >
            Clear Data
          </Button>
        </div>
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
                  {shouldShowObsessionsReport
                    ? obsessionDiscomfortLevels[4].description
                    : compulsionDiscomfortLevels[4].description}
                </p>
                <ol>
                  {filteredThemesWithDiscomfortLevel5.map(
                    (theme, themeIndex) => (
                      <li className="theme-number" key={themeIndex}>
                        <h3 className="theme">{theme.title}</h3>
                        <ol>
                          {theme.concerns.map((concern, concernIndex) => (
                            <li className="concern" key={concernIndex}>
                              {concern.concern}
                            </li>
                          ))}
                        </ol>
                      </li>
                    )
                  )}
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
                  {shouldShowObsessionsReport
                    ? obsessionDiscomfortLevels[3].description
                    : compulsionDiscomfortLevels[3].description}
                </p>
                <ol>
                  {filteredThemesWithDiscomfortLevel4.map(
                    (theme, themeIndex) => (
                      <li className="theme-number" key={themeIndex}>
                        <h3 className="theme">{theme.title}</h3>
                        <ol>
                          {theme.concerns.map((concern, concernIndex) => (
                            <li className="concern" key={concernIndex}>
                              {concern.concern}
                            </li>
                          ))}
                        </ol>
                      </li>
                    )
                  )}
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
                  {shouldShowObsessionsReport
                    ? obsessionDiscomfortLevels[2].description
                    : compulsionDiscomfortLevels[2].description}
                </p>
                <ol>
                  {filteredThemesWithDiscomfortLevel3.map(
                    (theme, themeIndex) => (
                      <li className="theme-number" key={themeIndex}>
                        <h3 className="theme">{theme.title}</h3>
                        <ol>
                          {theme.concerns.map((concern, concernIndex) => (
                            <li className="concern" key={concernIndex}>
                              {concern.concern}
                            </li>
                          ))}
                        </ol>
                      </li>
                    )
                  )}
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
