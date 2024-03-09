import { State, Theme } from "../../IdentifyConcerns/reducer";

interface TransformConcernsParams {
  concerns: State;
  discomfortLevel: number;
}

export const transformConcerns = ({
  concerns,
  discomfortLevel,
}: TransformConcernsParams): Theme[] => {
  let themesWithDiscomfortLevel = [];
  let filteredThemesWithDiscomfortLevel = [];

  themesWithDiscomfortLevel = concerns.themes.map((theme) => {
    const concernsWithDiscomfortLevel = theme.concerns.filter(
      (concern) => concern.discomfortLevel === discomfortLevel
    );

    return {
      title: theme.title,
      concerns: concernsWithDiscomfortLevel,
    };
  });

  filteredThemesWithDiscomfortLevel = themesWithDiscomfortLevel.filter(
    (theme) => theme.concerns.length > 0
  );

  filteredThemesWithDiscomfortLevel.sort((a, b) => {
    if (a.concerns.length > b.concerns.length) {
      return -1;
    }

    if (a.concerns.length < b.concerns.length) {
      return 1;
    }

    return 0;
  });

  return filteredThemesWithDiscomfortLevel;
};
