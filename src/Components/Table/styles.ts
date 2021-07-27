import styled from "styled-components";

const STable = styled.table`
  width: 100%;
  font-size: 1.8rem;
  font-weight: 500;
  font-family: "Baloo Paaji 2", cursive;
  border-collapse: collapse;
  table-layout: fixed;
  max-width: 100rem;
  min-width: 60rem;
  @media (max-width: 650px) {
    font-size: 2.2rem;
  }
`;

export { STable };
