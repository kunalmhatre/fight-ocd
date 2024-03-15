import styled from "styled-components";
import { StyleSheet } from "@react-pdf/renderer";

const Wrapper = styled.div`
  h2 {
    font-size: 2.5rem;
  }

  h3 {
    font-size: 2rem;
  }
`;

const ThemesListItem = styled.li`
  margin-bottom: 0.5rem;

  &::marker {
    font-size: 2rem;
    font-weight: 700;
  }
`;

const ConcernsListItem = styled.li`
  font-size: 1.25rem;
  line-height: 1.5;
`;

const DiscomfortLevel = styled.p`
  font-size: 1.25rem;
  font-weight: 700;
`;

const DiscomfortLevelDescription = styled.p`
  font-size: 1.25rem;
  font-style: italic;
  font-weight: 700;
  color: ${({ theme }) => theme.grey};
`;

const pdfStyles = StyleSheet.create({
  header: {
    fontSize: 24,
    margin: "16px 0",
  },
  content: {
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
});

export {
  Wrapper,
  ThemesListItem,
  ConcernsListItem,
  DiscomfortLevel,
  DiscomfortLevelDescription,
  pdfStyles,
};
