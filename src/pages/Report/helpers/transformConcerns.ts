export const transformConcerns = (concerns, level) => {
  //console.log(concerns, "concerns");
  let themesWithDiscomfortLevel = [];
  let filteredThemesWithDiscomfortLevel = [];

  themesWithDiscomfortLevel = concerns.themes.map((theme) => {
    const concernsWithDiscomfortLevel = theme.concerns.filter(
      (concern) => concern.discomfortLevel === level
    );
    console.log(concernsWithDiscomfortLevel, "concernsWithDiscomfortLevel");
    return {
      title: theme.title,
      concerns: concernsWithDiscomfortLevel,
    };
  });
  console.log(themesWithDiscomfortLevel, "themesWithDiscomfortLevel");
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
  // console.log(
  //   filteredThemesWithDiscomfortLevel,
  //   "filteredThemesWithDiscomfortLevel"
  // );
  return filteredThemesWithDiscomfortLevel;
};
