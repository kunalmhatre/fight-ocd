import { useEffect, useReducer } from "react";
import Layout from "../../components/Layout";
import {
  discomfortLevels as obsessionDiscomfortLevels,
  themes as obsessionTheme,
} from "../../data/obsessions.json";
import {
  discomfortLevels as compulsionDiscomfortLevels,
  themes as compulsionTheme,
} from "../../data/compulsions.json";
import DiscomfortButton from "../../components/DiscomfortButton";
import {
  DiscomfortLevel,
  ProgressLabel,
  Wrapper,
  LabelContainer,
  Content,
  DiscomfortLevelInfoContainer,
  DiscomfortButtonsContainer,
  ButtonsContainer,
} from "./styles";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const reducer = (state, action) => {
  switch (action.type) {
    case "setDiscomfortLevel":
      return {
        ...state,
        themes: state.themes.map((theme, index) => {
          if (index === action.themeIndex) {
            return {
              ...theme,
              concerns: theme.concerns.map((concern, index) => {
                if (index === action.concernIndex) {
                  return {
                    ...concern,
                    discomfortLevel: action.discomfortLevel,
                  };
                }

                return concern;
              }),
            };
          }

          return theme;
        }),
      };
    case "setCurrentTheme":
      if (action.isPrevious) {
        return {
          ...state,
          currentTheme: action.currentTheme,
          currentConcern: state.themes[action.currentTheme].concerns.length - 1,
        };
      }

      return {
        ...state,
        currentTheme: action.currentTheme,
        currentConcern: 0,
      };
    case "setCurrentConcern":
      return {
        ...state,
        currentConcern: action.currentConcern,
      };
    default:
      return state;
  }
};

const IdentifyConcerns = () => {
  const shouldIdentifyObsessions =
    window.location.pathname === "/identify-obsessions";

  const initialState = {
    isTestCompleted: false,
    currentTheme: 0,
    currentConcern: 0,
  };

  let discomfortLevels = [];

  if (shouldIdentifyObsessions) {
    const obsessionsState = localStorage.getItem("obsessionsState");

    if (obsessionsState) {
      const parsedObsessionsState = JSON.parse(obsessionsState);

      if (parsedObsessionsState) {
        initialState.themes = parsedObsessionsState.themes;
        initialState.currentTheme = parsedObsessionsState.currentTheme;
        initialState.currentConcern = parsedObsessionsState.currentConcern;
        initialState.isTestCompleted = parsedObsessionsState.isTestCompleted;
      }
    } else {
      initialState.themes = obsessionTheme.map((theme) => ({
        title: theme.title,
        concerns: theme.obsessions.map((obsession) => ({
          concern: obsession,
          discomfortLevel: null,
        })),
      }));
    }

    discomfortLevels = obsessionDiscomfortLevels;
  } else {
    const compulsionsState = localStorage.getItem("compulsionsState");

    if (compulsionsState) {
      const parsedCompulsionsState = JSON.parse(compulsionsState);

      if (parsedCompulsionsState) {
        initialState.themes = parsedCompulsionsState.themes;
        initialState.currentTheme = parsedCompulsionsState.currentTheme;
        initialState.currentConcern = parsedCompulsionsState.currentConcern;
        initialState.isTestCompleted = parsedCompulsionsState.isTestCompleted;
      }
    } else {
      initialState.themes = compulsionTheme.map((theme) => ({
        title: theme.title,
        concerns: theme.compulsions.map((compulsion) => ({
          concern: compulsion,
          discomfortLevel: null,
        })),
      }));
    }

    discomfortLevels = compulsionDiscomfortLevels;
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  const { themes, currentTheme, currentConcern } = state;

  const totalThemes = themes.length;
  const totalConcerns = themes[currentTheme].concerns.length;

  const theme = themes[currentTheme];
  const concern = themes[currentTheme].concerns[currentConcern];

  const isPreviousDisabled = currentTheme === 0 && currentConcern === 0;
  const navigate = useNavigate();

  useEffect(() => {
    if (shouldIdentifyObsessions) {
      localStorage.setItem("obsessionsState", JSON.stringify(state));
    } else {
      localStorage.setItem("compulsionsState", JSON.stringify(state));
    }
  }, [state, shouldIdentifyObsessions]);

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
    if (shouldIdentifyObsessions) {
      localStorage.removeItem("obsessionsState");
    } else {
      localStorage.removeItem("compulsionsState");
    }

    // TODO: Find a way so that the page doesn't need to be reloaded
    window.location.reload();
  };

  return (
    <Layout>
      <Wrapper>
        <div>
          <h2>{theme.title}</h2>
          <LabelContainer>
            <ProgressLabel isActive={currentConcern + 1 === 1}>
              {currentTheme + 1} of {totalThemes} themes
            </ProgressLabel>
            <ProgressLabel isActive={currentConcern + 1 === 1}>
              {currentConcern + 1} of {totalConcerns}{" "}
              {shouldIdentifyObsessions ? "obsessions" : "compulsions"}
            </ProgressLabel>
          </LabelContainer>
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
                  state="success"
                  onClick={() => {
                    if (shouldIdentifyObsessions) {
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
            onClick={restart}
            disabled={isPreviousDisabled}
            state="danger"
          >
            Restart
          </Button>
          <hr />
          <div>
            {discomfortLevels.map((discomfortLevel) => (
              <DiscomfortLevelInfoContainer>
                <DiscomfortLevel level={discomfortLevel.level}>
                  {discomfortLevel.level}
                </DiscomfortLevel>
                <div>{discomfortLevel.description}</div>
              </DiscomfortLevelInfoContainer>
            ))}
          </div>
        </div>
      </Wrapper>
    </Layout>
  );
};

export default IdentifyConcerns;
