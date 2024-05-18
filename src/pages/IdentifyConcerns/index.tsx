import { useEffect, useMemo, useReducer } from "react";
import Layout from "../../components/Layout";
import DiscomfortButton from "../../components/DiscomfortButton";
import {
  DiscomfortLevel,
  ProgressIndicator,
  Wrapper,
  ProgressIndicatorsContainer,
  Content,
  DiscomfortLevelInfoContainer,
  DiscomfortButtonsContainer,
  ButtonsContainer,
  DiscomfortLevelDescription,
} from "./styles";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { reducer } from "./reducer";
import { discomfortLevels as obsessionDiscomfortLevels } from "../../data/obsessions.json";
import { discomfortLevels as compulsionDiscomfortLevels } from "../../data/compulsions.json";
import { getInitialState, shouldIdentifyObsessions } from "./helpers";
import { addMetaTagsViaHelmet } from "../../helpers/addMetaTags";

interface DiscomfortLevel {
  level: number;
  description: string;
}

const IdentifyConcerns = () => {
  const navigate = useNavigate();
  const initialState = useMemo(() => getInitialState(), []);
  const [state, dispatch] = useReducer(reducer, initialState);
  const { themes, currentTheme, currentConcern } = state;
  const totalThemes = themes.length;
  const totalConcerns = themes[currentTheme].concerns.length;
  const theme = themes[currentTheme];
  const concern = themes[currentTheme].concerns[currentConcern];
  const isPreviousDisabled = currentTheme === 0 && currentConcern === 0;
  const isIdentifyingObsessions = shouldIdentifyObsessions();
  const discomfortLevels: DiscomfortLevel[] = isIdentifyingObsessions
    ? obsessionDiscomfortLevels
    : compulsionDiscomfortLevels;

  const nextConcern = () => {
    if (currentConcern < totalConcerns - 1) {
      dispatch({
        type: "setCurrentConcern",
        currentConcern: currentConcern + 1,
      });
    } else {
      if (currentTheme < totalThemes - 1) {
        dispatch({
          type: "setCurrentTheme",
          isPrevious: false,
          currentTheme: currentTheme + 1,
        });
      }
    }
  };

  const previousConcern = () => {
    if (currentConcern > 0) {
      dispatch({
        type: "setCurrentConcern",
        currentConcern: currentConcern - 1,
      });
    } else {
      if (currentTheme > 0) {
        dispatch({
          type: "setCurrentTheme",
          isPrevious: true,
          currentTheme: currentTheme - 1,
        });
      }
    }
  };

  const restart = () => {
    if (isIdentifyingObsessions) {
      localStorage.removeItem("obsessionsState");
    } else {
      localStorage.removeItem("compulsionsState");
    }

    // TODO: Find a way so that the page doesn't need to be reloaded
    window.location.reload();
  };

  useEffect(() => {
    if (isIdentifyingObsessions) {
      localStorage.setItem("obsessionsState", JSON.stringify(state));
    } else {
      localStorage.setItem("compulsionsState", JSON.stringify(state));
    }
  }, [state, isIdentifyingObsessions]);

  return (
    <Layout>
      {addMetaTagsViaHelmet({
        title: `Fight OCD - Identify your ${
          isIdentifyingObsessions ? "obsessions" : "compulsions"
        }`,
        description: `Test to help you identify your ${
          isIdentifyingObsessions ? "obsessions" : "compulsions"
        } that need attention.`,
      })}
      <Wrapper>
        <div>
          <h2>{theme.title}</h2>
          <ProgressIndicatorsContainer>
            <ProgressIndicator $isActive={currentConcern + 1 === 1}>
              {currentTheme + 1} of {totalThemes} themes
            </ProgressIndicator>
            <ProgressIndicator $isActive={currentConcern + 1 === 1}>
              {currentConcern + 1} of {totalConcerns}{" "}
              {isIdentifyingObsessions ? "obsessions" : "compulsions"}
            </ProgressIndicator>
          </ProgressIndicatorsContainer>
          <div>
            <h1>{concern.concern}</h1>
            <Content>Choose your level of discomfort</Content>
            <DiscomfortButtonsContainer>
              <DiscomfortButton
                onClick={() => {
                  dispatch({
                    type: "setDiscomfortLevel",
                    themeIndex: currentTheme,
                    concernIndex: currentConcern,
                    discomfortLevel: 1,
                  });
                  nextConcern();
                }}
                level={1}
                isSelected={concern.discomfortLevel === 1}
              />
              <DiscomfortButton
                onClick={() => {
                  dispatch({
                    type: "setDiscomfortLevel",
                    themeIndex: currentTheme,
                    concernIndex: currentConcern,
                    discomfortLevel: 2,
                  });
                  nextConcern();
                }}
                level={2}
                isSelected={concern.discomfortLevel === 2}
              />
              <DiscomfortButton
                onClick={() => {
                  dispatch({
                    type: "setDiscomfortLevel",
                    themeIndex: currentTheme,
                    concernIndex: currentConcern,
                    discomfortLevel: 3,
                  });
                  nextConcern();
                }}
                level={3}
                isSelected={concern.discomfortLevel === 3}
              />
              <DiscomfortButton
                onClick={() => {
                  dispatch({
                    type: "setDiscomfortLevel",
                    themeIndex: currentTheme,
                    concernIndex: currentConcern,
                    discomfortLevel: 4,
                  });
                  nextConcern();
                }}
                level={4}
                isSelected={concern.discomfortLevel === 4}
              />
              <DiscomfortButton
                onClick={() => {
                  dispatch({
                    type: "setDiscomfortLevel",
                    themeIndex: currentTheme,
                    concernIndex: currentConcern,
                    discomfortLevel: 5,
                  });
                  nextConcern();
                }}
                level={5}
                isSelected={concern.discomfortLevel === 5}
              />
            </DiscomfortButtonsContainer>
          </div>
          <ButtonsContainer>
            <Button onClick={previousConcern} disabled={isPreviousDisabled}>
              Previous
            </Button>
            {currentConcern === totalConcerns - 1 &&
              currentTheme === totalThemes - 1 &&
              concern.discomfortLevel && (
                <Button
                  data-umami-event={`generate-${
                    isIdentifyingObsessions ? "obsessions" : "compulsions"
                  }-report`}
                  state="success"
                  onClick={() => {
                    if (isIdentifyingObsessions) {
                      navigate("/obsessions-report");
                    } else {
                      navigate("/compulsions-report");
                    }
                  }}
                >
                  Generate Report
                </Button>
              )}
          </ButtonsContainer>
          <Button
            data-umami-event={`restart-identifying-${
              isIdentifyingObsessions ? "obsessions" : "compulsions"
            }`}
            onClick={restart}
            disabled={isPreviousDisabled}
            state="danger"
          >
            Restart
          </Button>
          <hr />
          {discomfortLevels.map((discomfortLevel, index) => (
            <DiscomfortLevelInfoContainer key={index}>
              <DiscomfortLevel $level={discomfortLevel.level}>
                {discomfortLevel.level}
              </DiscomfortLevel>
              <DiscomfortLevelDescription>
                {discomfortLevel.description}
              </DiscomfortLevelDescription>
            </DiscomfortLevelInfoContainer>
          ))}
        </div>
      </Wrapper>
    </Layout>
  );
};

export default IdentifyConcerns;
