import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  z-index: -1;
`;

const ImageWrapper = styled.div`
  height: 50vw;
  max-height: 50rem;
  min-height: 45rem;
`;

export { Container, ImageWrapper };
