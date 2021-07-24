import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: auto 1fr auto;
  padding: 0 4rem;
  @media (max-width: 560px) {
    padding: 0 1.5rem;
  }
`;

const Header = styled.header`
  margin-bottom: 5rem;
  grid-row: 1/2;
  grid-column: 2/3;
`;

const Section = styled.section`
  grid-row: 2/-1;
  grid-column: 2/3;
`;

export { Container, Header, Section };
