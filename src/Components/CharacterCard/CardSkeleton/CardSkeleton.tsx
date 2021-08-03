import { Skeleton } from "@material-ui/lab";
import styled from "styled-components";

import { size } from "@utils/screenSizes";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 35rem;
  height: 53.2rem;
  padding: 5rem 2rem;
  margin: 1rem;
  border-radius: 0.5rem;
  background-color: rgba(0, 0, 0, 0.1);
  @media (max-width: ${size.mobile}) {
    width: calc(100% - 2rem);
    height: min-content;
    font-size: 100%;
    padding: 4rem 3rem;
  }
`;

const Image = styled.div`
  margin-bottom: 4rem;
  width: 16rem;
  height: 16rem;
  @media (max-width: ${size.mobile}) {
    width: 140px;
    height: 140px;
    margin-bottom: 3em;
  }
`;
const Name = styled.div`
  margin-bottom: 2.6rem;
  width: 100%;
`;

const Options = styled.div`
  position: relative;
  width: 100%;
  height: 140px;
`;

const CardSkeleton = () => {
  return (
    <Container>
      <Image>
        <Skeleton variant="circle" width={"100%"} height={"100%"} />
      </Image>
      <Name>
        <Skeleton variant="rect" width={"100%"} height={"4.6rem"} />
      </Name>
      <Options>
        <Skeleton variant="rect" width={"100%"} height={"100%"} />
      </Options>
    </Container>
  );
};
export default CardSkeleton;
