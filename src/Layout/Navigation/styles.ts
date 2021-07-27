import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  margin-top: 5rem;
  margin-bottom: 5rem;

  & ul {
    display: flex;
    justify-content: center;
    height: min-content;

    list-style: none;
    width: 100%;
    padding: 0 2rem;
    & li {
      margin-left: 4rem;
      display: flex;
      justify-content: center;
    }
  }

  @media (max-width: 650px) {
    & ul {
      flex-direction: column;

      & li:not(:last-child) {
        margin-bottom: 4rem;
      }
      & li {
        margin-left: 0;
      }
      a {
        font-size: 3rem;
      }
    }
  }
`;

export { StyledNav };
