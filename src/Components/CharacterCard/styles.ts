import styled from "styled-components";

import { colors } from "@utils/colors";

const CardContainer = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 35rem;
  height: min-content;

  border-radius: 0.5rem;
  padding: 5rem 4rem;

  box-shadow: rgba(0, 0, 0, 0.7);

  background-color: ${colors.main};
`;

const Image = styled.img`
  width: 15rem;
  height: 15rem;
  border-radius: 50%;

  box-shadow: 0 10px 50px ${colors.active};

  margin-bottom: 2rem;
`;

const Name = styled.h1`
  color: #fff;
  font-size: 2.5rem;
  text-align: center;
  letter-spacing: 0.2rem;
  word-spacing: 0.7rem;
  font-weight: 300;
  font-family: "Baloo Paaji 2", cursive;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;

  margin-bottom: 3rem;
`;

const Title = styled.h3`
  color: #fff;
  font-size: 1.7rem;
  text-align: center;
  font-weight: bold;
  font-family: "Baloo Paaji 2", cursive;
  color: ${colors.active};
`;

const InfoText = styled.p`
  color: #fff;
  font-size: 1.7rem;
  text-align: center;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  font-family: "Baloo Paaji 2", cursive;
`;

const InfoSection = styled.div`
  display: grid;
  grid-template-columns: 9.5rem 9.5rem;
  flex-wrap: wrap;
  justify-content: space-between;
  letter-spacing: 0.1rem;
  word-spacing: 0.7rem;
  column-gap: 5rem;
  row-gap: 2rem;
`;

const InfoBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export { InfoBlock, InfoSection, InfoText, Title, Name, Image, CardContainer };
