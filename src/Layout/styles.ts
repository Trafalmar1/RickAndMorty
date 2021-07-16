import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  padding: 0 10rem;
`;

const Header = styled.header`
  margin-bottom: 5rem;
  grid-row: 1/2;
`;

const Section = styled.section`
  grid-row: 2/-1;
`;

export { Container, Header, Section };
