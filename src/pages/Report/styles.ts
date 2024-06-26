import { StyleSheet } from "@react-pdf/renderer";
import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 2rem;

  h1 {
    font-size: 3rem;
    font-weight: 900;
    margin-bottom: 1rem;
  }

  hr {
    margin: 2.5rem 0;
  }

  @media only screen and (max-width: 576px) {
    padding-top: 1rem;

    h1 {
      font-size: 2rem;
      margin-bottom: 0.5rem;
    }

    hr {
      margin: 1.5rem 0;
    }
  }
`;

const Description = styled.p`
  font-size: 1.25rem;
  line-height: 2rem;
  width: 40vw;

  @media only screen and (max-width: 1200px) {
    width: 60vw;
  }

  @media only screen and (max-width: 768px) {
    width: 70vw;
  }

  @media only screen and (max-width: 576px) {
    font-size: 1rem;
    line-height: 1.75rem;
    width: 100%;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;

  button {
    margin-right: 1rem;
  }

  button:last-child {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    button {
      margin-right: 0;
      margin-bottom: 1rem;
    }

    button:last-child {
      margin-bottom: 0;
    }
  }

  @media only screen and (max-width: 576px) {
    button {
      margin-bottom: 0.5rem;
    }
  }
`;

const ConcernsListsContainer = styled.div`
  hr:last-child {
    display: none;
  }
`;

const pdfContentStyles = StyleSheet.create({
  page: {
    padding: 32,
  },
  date: {
    fontSize: 12,
    lineHeight: 1.5,
  },
  footer: {
    fontSize: 12,
    paddingTop: 24,
    marginTop: 24,
    borderTop: "1px solid grey",
  },
});

export {
  Wrapper,
  Description,
  ButtonsContainer,
  ConcernsListsContainer,
  pdfContentStyles,
};
