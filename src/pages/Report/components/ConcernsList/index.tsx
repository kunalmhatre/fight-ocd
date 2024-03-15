import { Theme } from "../../../IdentifyConcerns/reducer";
import {
  ConcernsListItem,
  DiscomfortLevel,
  DiscomfortLevelDescription,
  ThemesListItem,
  Wrapper,
  pdfStyles,
} from "./styles";
import { Text, View } from "@react-pdf/renderer";

interface ConcernsListProps {
  title: string;
  discomfortLevel: number;
  discomfortLevelDescription: string;
  themes: Theme[];
  isForPdf?: boolean;
}

const ConcernsList = ({
  title,
  discomfortLevel,
  discomfortLevelDescription,
  themes,
  isForPdf = false,
}: ConcernsListProps) => {
  if (isForPdf) {
    return (
      <>
        <Text style={pdfStyles.header}>{title}</Text>
        <Text style={pdfStyles.content}>
          {`Discomfort Level: ${discomfortLevel} (out of 5)`}
        </Text>
        <Text style={pdfStyles.caption}>{discomfortLevelDescription}</Text>
        <View>
          {themes.map((theme, themeIndex) => (
            <View key={themeIndex}>
              <Text style={pdfStyles.subheader}>{`${themeIndex + 1}. ${
                theme.title
              }`}</Text>
              <View style={pdfStyles.obsessions}>
                {theme.concerns.map((concern, concernIndex) => (
                  <Text style={pdfStyles.content} key={concernIndex}>{`${
                    concernIndex + 1
                  }. ${concern.concern}`}</Text>
                ))}
              </View>
            </View>
          ))}
        </View>
      </>
    );
  }

  return (
    <Wrapper>
      <h2>{title}</h2>
      <DiscomfortLevel>{`Discomfort Level: ${discomfortLevel} (out of 5)`}</DiscomfortLevel>
      <DiscomfortLevelDescription>
        {discomfortLevelDescription}
      </DiscomfortLevelDescription>
      <ol>
        {themes.map((theme, themeIndex) => (
          <ThemesListItem key={themeIndex}>
            <h3>{theme.title}</h3>
            <ol>
              {theme.concerns.map((concern, concernIndex) => (
                <ConcernsListItem key={concernIndex}>
                  {concern.concern}
                </ConcernsListItem>
              ))}
            </ol>
          </ThemesListItem>
        ))}
      </ol>
    </Wrapper>
  );
};

export default ConcernsList;
