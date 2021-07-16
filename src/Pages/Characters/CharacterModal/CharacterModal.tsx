import {
  Image,
  InfoBlock,
  InfoText,
  Name,
  Title,
} from "@components/CharacterCard/styles";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { RootState } from "@redux/store";
import Modal from "../../../Components/Modal/Modal";
import { useEffect } from "react";
import { getCharacter } from "@actions/index";
import { InfoWrapper } from "./styles";

type ParamsType = {
  id: string;
};

const CharacterModal: FC = () => {
  const { id } = useParams<ParamsType>();
  const character = useSelector((state: RootState) => state.characterReducer);
  const dispatch = useDispatch();
  const char = character.results?.find((ch) => ch.id === parseInt(id));

  useEffect(() => {
    console.log(character.results);
    if (character.results == null) {
      dispatch(getCharacter(id));
    }
  }, [dispatch, character.results, id]);

  return (
    <Modal>
      <Image alt={`${char?.name}`} src={char?.image} />
      <Name>{char?.name}</Name>
      <InfoWrapper>
        <InfoBlock>
          <Title>Gender</Title>
          <InfoText>{char?.gender}</InfoText>
        </InfoBlock>
        <InfoBlock>
          <Title>Species</Title>
          <InfoText>{char?.species}</InfoText>
        </InfoBlock>
        <InfoBlock>
          <Title>Type</Title>
          <InfoText>{char?.type ? char?.type : "unknown"}</InfoText>
        </InfoBlock>
        <InfoBlock>
          <Title>Status</Title>
          <InfoText>{char?.status}</InfoText>
        </InfoBlock>
        <InfoBlock>
          <Title>Origin</Title>
          <InfoText>{char?.origin.name}</InfoText>
        </InfoBlock>
        <InfoBlock>
          <Title>Location</Title>
          <InfoText>{char?.location.name}</InfoText>
        </InfoBlock>
      </InfoWrapper>
    </Modal>
  );
};
export default CharacterModal;
