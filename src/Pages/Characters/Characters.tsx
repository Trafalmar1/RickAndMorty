import { useEffect } from "react";
import { FC } from "react";

import Paginator from "@components/Paginator";
import useCharacters from "./useCharacters";
import Form from "@components/Form";
import Input from "@UI/Input";
import Button from "@UI/Button";
import CharacterCard from "@components/CharacterCard";
import { colors } from "@utils/colors";
import CardSkeleton from "@components/CharacterCard/CardSkeleton";

import {
  Aside,
  Container,
  PaginatorWrapper,
  Section,
  List,
  StickyContainer,
} from "./styles";

const Skeleton = [...Array(9)].map((e, i) => <CardSkeleton key={i} />);

const Characters: FC = () => {
  const {
    characters,
    currentPage,
    formData,
    scrollToRef,
    loading,
    prevButtonHandler,
    nextButtonHandler,
    run,
    onSubmit,
    onInputChange,
  } = useCharacters();

  useEffect(() => {
    run();
  }, [run]);

  return (
    <Container>
      <Section>
        <List ref={scrollToRef}>
          {!!characters.results && !loading
            ? characters.results.map((char) => (
                <CharacterCard
                  key={char.id}
                  name={char.name}
                  gender={char.gender}
                  status={char.status}
                  species={char.species}
                  type={char.type}
                  image={char.image}
                />
              ))
            : Skeleton}
        </List>
      </Section>
      <Aside>
        <StickyContainer>
          <Form onSubmit={onSubmit}>
            <Input
              name={"species"}
              value={formData.species}
              onChange={onInputChange}
              color={colors.active}
            />
            <Input
              name={"status"}
              value={formData.status}
              onChange={onInputChange}
              color={colors.active}
            />
            <Input
              name={"gender"}
              value={formData.gender}
              onChange={onInputChange}
              color={colors.active}
            />
            <Button name={"Filter"} isSubmit />
          </Form>
        </StickyContainer>
      </Aside>
      <PaginatorWrapper>
        <Paginator
          onPrev={prevButtonHandler}
          onNext={nextButtonHandler}
          current={currentPage}
        />
      </PaginatorWrapper>
    </Container>
  );
};
export default Characters;
