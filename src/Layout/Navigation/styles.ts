import styled from "styled-components";

import { size } from "@utils/screenSizes";

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
    @media (max-width: ${size.medium}) {
      padding: 0;
    }
    & li {
      margin-left: 4rem;
      display: flex;
      justify-content: center;
    }
  }

  @media (max-width: ${size.mobile}) {
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
