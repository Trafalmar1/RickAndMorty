import styled from "styled-components";

const Image = styled.img`
  display: block;
  height: calc(50vw);
  max-height: 50rem;
  min-height: 35rem;
`;

const ImageWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export { Image, ImageWrapper };
