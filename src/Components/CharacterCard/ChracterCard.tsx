import { FC } from "react";
import {
  CardContainer,
  Image,
  InfoBlock,
  InfoSection,
  InfoText,
  Name,
  Title,
} from "./styles";

type CharacterCardProps = {
  name: string;
  status: string;
  gender: string;
  species: string;
  image: string;
  type: string;
};

const CharacterCard: FC<CharacterCardProps> = ({
  name,
  status,
  gender,
  species,
  type,
  image,
}) => {
  return (
    <CardContainer>
      <Image alt={`${name}`} src={image} />
      <Name>{name}</Name>
      <InfoSection>
        <InfoBlock>
          <Title>Gender:</Title>
          <InfoText>{gender}</InfoText>
        </InfoBlock>

        <InfoBlock>
          <Title>Species:</Title>
          <InfoText>{species}</InfoText>
        </InfoBlock>

        <InfoBlock>
          <Title>Status:</Title>
          <InfoText>{status}</InfoText>
        </InfoBlock>

        <InfoBlock>
          <Title>Type:</Title>
          <InfoText>{type ? type.trim() : "unknown"}</InfoText>
        </InfoBlock>
      </InfoSection>
    </CardContainer>
  );
};
export default CharacterCard;
