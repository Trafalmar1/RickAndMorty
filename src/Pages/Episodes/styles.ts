import styled from "styled-components";

import { size } from "@utils/screenSizes";

export const Container = styled.div`
  display: grid;
  grid-template-columns: [main-start] auto [content-start] 60rem [content-end sidebar-start] auto [sidebar-end] auto [main-end];

  @media (max-width: ${size.medium}) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, min-content);
  }
  min-height: calc(100vh - 20rem);
`;

export const Aside = styled.aside`
  grid-column: sidebar-start/sidebar-end;
  height: min-content;
  margin-left: 5rem;
  @media (max-width: ${size.medium}) {
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
  @media (max-width: ${size.medium}) {
    grid-column: 1/-1;
  }
`;
