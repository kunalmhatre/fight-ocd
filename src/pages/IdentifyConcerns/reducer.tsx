interface Concern {
  concern: string;
  discomfortLevel: number | null;
}

export interface Theme {
  title: string;
  concerns: Concern[];
}

export interface State {
  isTestCompleted: boolean;
  currentTheme: number;
  currentConcern: number;
  themes: Theme[];
}

interface SetDiscomfortLevelAction {
  type: "setDiscomfortLevel";
  themeIndex: number;
  concernIndex: number;
  discomfortLevel: number;
}

interface SetCurrentThemeAction {
  type: "setCurrentTheme";
  currentTheme: number;
  isPrevious: boolean;
}

interface SetCurrentConcernAction {
  type: "setCurrentConcern";
  currentConcern: number;
}

type Action =
  | SetDiscomfortLevelAction
  | SetCurrentThemeAction
  | SetCurrentConcernAction;

export const reducer = (state: State, action: Action) => {
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
