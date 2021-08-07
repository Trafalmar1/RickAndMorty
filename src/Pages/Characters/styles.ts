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
  grid-template-columns: [main-start] auto [content-start] minmax(auto, 120rem) [content-end sidebar-start] 30rem [sidebar-end] auto [main-end];
  @media (max-width: ${size.medium}) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, auto);
  }
  min-height: calc(100vh - 20rem);
`;

const Section = styled.section`
  position: relative;
  grid-column: content-start/content-end;
  place-items: center;
  display: flex;
  flex-direction: column;
  @media (max-width: ${size.medium}) {
    grid-column: 1/-1;
  }
`;

const List = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  max-width: 116rem;
  flex-wrap: wrap;
  justify-content: center;

  margin-bottom: 10rem;
  article {
    margin: 1rem;
  }
  @media (max-width: ${size.mobile}) {
    flex-direction: column;
    align-items: center;
    article {
      font-size: 1.5rem;
      margin: 0;
      margin: 1rem 0;
    }
  }
`;

const Aside = styled.aside`
  grid-column: sidebar-start/sidebar-end;
  @media (max-width: ${size.medium}) {
    margin-bottom: 5rem;
    grid-row: 1/2;
    grid-column: 1/-1;
  }
`;

const StickyContainer = styled.div`
  position: sticky;
  top: 5rem;
`;

export { PaginatorWrapper, Container, Section, Aside, List, StickyContainer };
