import styled from "styled-components";

import { size } from "@utils/screenSizes";

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: auto minmax(300px, 1200px) auto;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 5rem;
  grid-column: 2/3;
  max-width: 1200px;
  @media (max-width: ${size.medium}) {
    grid-template-columns: 1fr;
  }
`;

const TodoContainer = styled.div`
  grid-column: 1/2;
  @media (max-width: ${size.medium}) {
    margin-bottom: 4rem;
  }
`;

const DoneContainer = styled.div`
  grid-column: 2/-1;
  @media (max-width: ${size.medium}) {
    grid-column: 1/2;
    margin-bottom: 4rem;
  }
`;

const ColumnTitle = styled.h2`
  font-family: "Baloo Paaji 2", cursive;
  font-size: 2rem;
  margin-bottom: 4rem;
  @media (max-width: ${size.mobile}) {
    font-size: 3.5rem;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5rem;
  @media (max-width: ${size.mobile}) {
    flex-direction: column;
    width: 100%;
    input {
      margin: 0;
      margin-bottom: 4rem;
    }
  }
`;

export {
  ColumnTitle,
  DoneContainer,
  GridContainer,
  Row,
  TodoContainer,
  GridWrapper,
};
