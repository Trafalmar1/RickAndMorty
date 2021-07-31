import styled from "styled-components";

import { size } from "@utils/screenSizes";

const PaginatorWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 3rem 0;
  margin-top: 10rem;
  bottom: 0;
  grid-column: 1/-1;
  @media (max-width: 600px) {
    grid-row: 3/-1;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 30rem;
  @media (max-width: ${size.medium}) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, auto);
  }
  min-height: calc(100vh - 20rem);
`;

const List = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 10rem;
  a {
    width: auto;
  }
  @media (max-width: ${size.mobile}) {
    flex-direction: column;
    align-items: center;
    a {
      width: 100%;
    }
  }
`;

const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Aside = styled.aside`
  @media (max-width: ${size.medium}) {
    margin-bottom: 5rem;
    grid-row: 1/2;
  }
`;

const StickyContainer = styled.div`
  position: sticky;
  top: 5rem;
`;

export { PaginatorWrapper, Container, Section, Aside, List, StickyContainer };
