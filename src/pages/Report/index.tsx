import Button from "../../components/Button";
import Layout from "../../components/Layout";
import { discomfortLevels as obsessionDiscomfortLevels } from "../../data/obsessions.json";
import { discomfortLevels as compulsionDiscomfortLevels } from "../../data/compulsions.json";
import {
  Wrapper,
  Description,
  ButtonsContainer,
  ConcernsListsContainer,
  pdfContentStyles,
} from "./styles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { transformConcerns } from "./helpers/transformConcerns";
import {
  PDFDownloadLink,
  Document,
  Page,
  Text,
  View,
  Link,
} from "@react-pdf/renderer";
import moment from "moment";
import { State, Theme } from "../IdentifyConcerns/reducer";
import ConcernsList from "./components/ConcernsList";
import { addMetaTagsViaHelmet } from "../../helpers/addMetaTags";

const Report = () => {
  const dateToday = moment().format("Do MMMM, YYYY");
  const navigate = useNavigate();

  const shouldShowObsessionsReport =
    window.location.pathname === "/obsessions-report";

  const [concerns, setConcerns] = useState<State | null>(
    shouldShowObsessionsReport
      ? JSON.parse(localStorage.getItem("obsessionsState") || "null")
      : JSON.parse(localStorage.getItem("compulsionsState") || "null")
  );

  let filteredThemesWithDiscomfortLevel5: Theme[] = [];
  let filteredThemesWithDiscomfortLevel4: Theme[] = [];
  let filteredThemesWithDiscomfortLevel3: Theme[] = [];

  let isReportEmpty = true;

  if (concerns) {
    filteredThemesWithDiscomfortLevel5 = transformConcerns({
      concerns,
      discomfortLevel: 5,
    });
    filteredThemesWithDiscomfortLevel4 = transformConcerns({
      concerns,
      discomfortLevel: 4,
    });
    filteredThemesWithDiscomfortLevel3 = transformConcerns({
      concerns,
      discomfortLevel: 3,
    });

    isReportEmpty =
      filteredThemesWithDiscomfortLevel5.length === 0 &&
      filteredThemesWithDiscomfortLevel4.length === 0 &&
      filteredThemesWithDiscomfortLevel3.length === 0;
  }

  const PDFContent = () => (
    <Document>
      <Page style={pdfContentStyles.page} wrap>
        <View>
          <Text style={pdfContentStyles.date}>{dateToday}</Text>
          <ConcernsList
            isForPdf
            title="Needs immediate attention!"
            discomfortLevel={5}
            discomfortLevelDescription={
              shouldShowObsessionsReport
                ? obsessionDiscomfortLevels[4].description
                : compulsionDiscomfortLevels[4].description
            }
            themes={filteredThemesWithDiscomfortLevel5}
          />
          <ConcernsList
            isForPdf
            title="Needs attention"
            discomfortLevel={4}
            discomfortLevelDescription={
              shouldShowObsessionsReport
                ? obsessionDiscomfortLevels[3].description
                : compulsionDiscomfortLevels[3].description
            }
            themes={filteredThemesWithDiscomfortLevel4}
          />
          <ConcernsList
            isForPdf
            title="Needs to be worked on before it gets worse"
            discomfortLevel={3}
            discomfortLevelDescription={
              shouldShowObsessionsReport
                ? obsessionDiscomfortLevels[2].description
                : compulsionDiscomfortLevels[2].description
            }
            themes={filteredThemesWithDiscomfortLevel3}
          />
          <Text style={pdfContentStyles.footer}>
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
      {addMetaTagsViaHelmet({
        title: `Fight OCD - ${
          shouldShowObsessionsReport ? "Obsessions" : "Compulsions"
        } Report`,
        description: `Download report of your ${
          shouldShowObsessionsReport ? "obsessions" : "compulsions"
        } that you can then share with a therapist (that treats OCD with ERP) to get help.`,
      })}
      <Wrapper>
        <h1>
          {shouldShowObsessionsReport ? "Obsessions" : "Compulsions"} Report
        </h1>
        <Description>
          {concerns && !isReportEmpty ? (
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
              important as physical health. We wish you well. The data regarding
              evaluation is stored in your browser and can be cleared by
              clicking the "Clear Data" button.
            </>
          )}{" "}
          If you have not taken the test to identify your{" "}
          {shouldShowObsessionsReport ? "compulsions" : "obsessions"} then you
          can take it by clicking the respective button below.
        </Description>
        <ButtonsContainer>
          {!isReportEmpty && concerns && (
            <Button
              data-umami-event={`download-${
                shouldShowObsessionsReport ? "obsessions" : "compulsions"
              }-report`}
            >
              <PDFDownloadLink
                document={<PDFContent />}
                fileName={`${
                  shouldShowObsessionsReport ? "obsessions" : "compulsions"
                }-report-${moment().format("DD-MM-YYYY")}.pdf`}
                style={{
                  color: "white",
                  textDecoration: "none",
                  padding: "0.75rem 0",
                }}
              >
                Download
              </PDFDownloadLink>
            </Button>
          )}
          <Button
            data-umami-event={`identify-${
              shouldShowObsessionsReport ? "compulsions" : "obsessions"
            }-after-${
              shouldShowObsessionsReport ? "obsessions" : "compulsions"
            }`}
            onClick={() =>
              navigate(
                shouldShowObsessionsReport
                  ? "/identify-compulsions"
                  : "/identify-obsessions"
              )
            }
          >
            {shouldShowObsessionsReport
              ? "Identify Compulsions"
              : "Identify Obsessions"}
          </Button>
          <Button
            data-umami-event={`clear-${
              shouldShowObsessionsReport ? "obsessions" : "compulsions"
            }-data`}
            className="clear-data-button"
            onClick={() => {
              localStorage.removeItem(
                shouldShowObsessionsReport
                  ? "obsessionsState"
                  : "compulsionsState"
              );

              setConcerns(null);
            }}
            state="danger"
            disabled={!concerns}
          >
            Clear Data
          </Button>
        </ButtonsContainer>
        {!isReportEmpty && !!concerns && (
          <div>
            <hr />
            <p>{dateToday}</p>
            <ConcernsListsContainer>
              {filteredThemesWithDiscomfortLevel5.length > 0 && (
                <ConcernsList
                  title="Needs immediate attention!"
                  discomfortLevel={5}
                  discomfortLevelDescription={
                    shouldShowObsessionsReport
                      ? obsessionDiscomfortLevels[4].description
                      : compulsionDiscomfortLevels[4].description
                  }
                  themes={filteredThemesWithDiscomfortLevel5}
                />
              )}
              <hr />
              {filteredThemesWithDiscomfortLevel4.length > 0 && (
                <ConcernsList
                  title="Needs attention"
                  discomfortLevel={4}
                  discomfortLevelDescription={
                    shouldShowObsessionsReport
                      ? obsessionDiscomfortLevels[3].description
                      : compulsionDiscomfortLevels[3].description
                  }
                  themes={filteredThemesWithDiscomfortLevel4}
                />
              )}
              <hr />
              {filteredThemesWithDiscomfortLevel3.length > 0 && (
                <ConcernsList
                  title="Needs to be worked on before it gets worse"
                  discomfortLevel={3}
                  discomfortLevelDescription={
                    shouldShowObsessionsReport
                      ? obsessionDiscomfortLevels[2].description
                      : compulsionDiscomfortLevels[2].description
                  }
                  themes={filteredThemesWithDiscomfortLevel3}
                />
              )}
              <hr />
            </ConcernsListsContainer>
          </div>
        )}
      </Wrapper>
    </Layout>
  );
};

export default Report;
