import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: [main-start] auto [content-start] 71rem [content-end sidebar-start] auto [sidebar-end] auto [main-end];
  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, min-content);
  }
  min-height: calc(100vh - 20rem);
`;

export const Aside = styled.aside`
  grid-column: sidebar-start/sidebar-end;
  margin-left: 5rem;
  @media (max-width: 1100px) {
    margin: 0;
    grid-row: 1/2;
    grid-column: 1/-1;
  }
`;

export const Section = styled.section`
  position: relative;
  grid-column: content-start/content-end;
  place-items: center;
  display: flex;
  flex-direction: column;
  @media (max-width: 1100px) {
    grid-column: 1/-1;
  }
  @media (max-width: 700px) {
    grid-column: 1/-1;
  }
`;

export const PaginatorWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 3rem 0;
  margin-top: 10rem;
  bottom: 0;
  grid-column: 1/-1;
  @media (max-width: 1100px) {
    grid-row: 3/-1;
    margin-top: 2rem;
  }
`;
