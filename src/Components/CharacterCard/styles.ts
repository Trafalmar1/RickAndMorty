import styled from "styled-components";

import { size } from "@utils/screenSizes";
import { colors } from "@utils/colors";

const CardContainer = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 35rem;
  height: min-content;
  font-size: 2rem;

  border-radius: 0.5rem;
  padding: 5rem 2rem;

  box-shadow: rgba(0, 0, 0, 0.7);

  background-color: ${colors.main};

  @media (max-width: ${size.mobile}) {
    width: 100%;
    max-width: 400px;
    font-size: 70%;
    padding: 4rem 3rem;
  }
`;

const ImageWrapper = styled.div`
  width: 8em;
  height: 8em;
  border-radius: 50%;
  overflow: hidden;

  box-shadow: 0 10px 50px ${colors.active};

  margin-bottom: 2em;
  @media (max-width: ${size.mobile}) {
    width: 14em;
    height: 14em;
    margin-bottom: 3em;
  }
`;

const Name = styled.h1`
  color: #fff;
  font-size: 1.3em;
  text-align: center;
  letter-spacing: 0.05em;
  word-spacing: 0.3em;
  font-weight: 300;
  font-family: "Baloo Paaji 2", cursive;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  width: 100%;

  margin-bottom: 1em;
  @media (max-width: ${size.mobile}) {
    white-space: normal;
    font-size: 2.5em;
    display: block;
  }
`;

const Title = styled.h3`
  color: #fff;
  font-size: 1em;
  text-align: center;
  font-weight: bold;
  font-family: "Baloo Paaji 2", cursive;
  color: ${colors.active};
  @media (max-width: ${size.mobile}) {
    font-size: 2em;
  }
`;

const InfoText = styled.p`
  color: #fff;
  font-size: 1em;
  text-align: center;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  text-align: center;
  font-family: "Baloo Paaji 2", cursive;
  @media (max-width: ${size.mobile}) {
    white-space: normal;
    font-size: 1.5em;
  }
`;

const InfoSection = styled.div`
  display: grid;
  grid-template-columns: calc(50% - 1rem) calc(50% - 1rem);
  justify-content: space-between;
  letter-spacing: 0.1em;
  word-spacing: 0.7em;
  width: 100%;
  row-gap: 2rem;
  column-gap: 2rem;
  @media (max-width: ${size.mobile}) {
    row-gap: 2em;
  }
`;

const InfoBlock = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

export {
  InfoBlock,
  InfoSection,
  InfoText,
  Title,
  Name,
  ImageWrapper,
  CardContainer,
};
