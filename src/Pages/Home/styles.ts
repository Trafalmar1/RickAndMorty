import styled from "styled-components";

const Image = styled.img`
  display: block;
  height: calc(50vw);
  max-height: 50rem;
  min-height: 45rem;
`;

const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
  z-index: -1;
`;

export { Image, ImageWrapper };
