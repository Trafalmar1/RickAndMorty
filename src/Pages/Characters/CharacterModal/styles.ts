import styled from "styled-components";

import { size } from "@utils/screenSizes";

const InfoWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 4rem;
  justify-content: space-around;
  h3 {
    font-size: 2rem;
  }
  p {
    font-size: 1.5rem;
  }
  @media (max-width: ${size.mobile}) {
    h3 {
      font-size: 2.5rem;
    }
    p {
      font-size: 2rem;
    }
  }
`;

const ProfileWrapper = styled.div`
  @media (min-width: ${size.mobile}) {
    img {
      height: 15rem;
      width: 15rem;
    }
    h1 {
      font-size: 3rem;
    }
  }
`;

export { InfoWrapper, ProfileWrapper };
