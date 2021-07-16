import styled from "styled-components";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 5rem;
`;

const TodoContainer = styled.div`
  grid-column: 1/2;
`;

const DoneContainer = styled.div`
  grid-column: 2/-1;
`;

const ColumnTitle = styled.h2`
  font-family: "Baloo Paaji 2", cursive;
  font-size: 2rem;
  margin-bottom: 4rem;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5rem;
`;

export { ColumnTitle, DoneContainer, GridContainer, Row, TodoContainer };
