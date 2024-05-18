import { themes as obsessionTheme } from "../../../data/obsessions.json";
import { themes as compulsionTheme } from "../../../data/compulsions.json";
import { State } from "../reducer";
import { shouldIdentifyObsessions } from "./shouldIdentifyObsessions";

export const getInitialState = (): State => {
  const initialState: State = {
    isTestCompleted: false,
    currentTheme: 0,
    currentConcern: 0,
    themes: [],
  };

  if (shouldIdentifyObsessions()) {
    const obsessionsState = localStorage.getItem("obsessionsState");

    if (obsessionsState) {
      const parsedObsessionsState: State = JSON.parse(obsessionsState);

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
  } else {
    const compulsionsState = localStorage.getItem("compulsionsState");

    if (compulsionsState) {
      const parsedCompulsionsState: State = JSON.parse(compulsionsState);

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
  }

  return initialState;
};
