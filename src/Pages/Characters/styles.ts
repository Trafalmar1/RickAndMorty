import styled from "styled-components";

const PaginatorWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 3rem 0;
  margin-top: 10rem;
  bottom: 0;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 30rem;
  min-height: calc(100vh - 20rem);
`;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 10rem;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  grid-column: 1/2;
`;

const Aside = styled.aside`
  grid-column: 2/-1;
`;

const StickyContainer = styled.div`
  position: sticky;
  top: 5rem;
`;

export { PaginatorWrapper, Container, Section, Aside, List, StickyContainer };
