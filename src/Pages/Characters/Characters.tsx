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

import { SPECIES, STATUS, GENDERS } from "./CharacterData";

import {
  Aside,
  Container,
  PaginatorWrapper,
  Section,
  List,
  StickyContainer,
} from "./styles";
import PageTitle from "@UI/PageTitle";

const Skeleton = [...Array(9)].map((e, i) => <CardSkeleton key={i} />);

const Characters: FC = () => {
  const {
    characters,
    currentPage,
    formData,
    scrollToRef,
    loading,
    paginatorProps,
    error,
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
    <Container ref={scrollToRef}>
      <Section>
        <List>
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
        {!!error && <PageTitle text={error} />}
      </Section>
      <Aside>
        <StickyContainer>
          <Form onSubmit={onSubmit}>
            <Input
              name={"species"}
              value={formData.species}
              onChange={onInputChange}
              options={SPECIES}
              color={colors.active}
            />
            <Input
              name={"status"}
              value={formData.status}
              onChange={onInputChange}
              color={colors.active}
              options={STATUS}
            />
            <Input
              name={"gender"}
              value={formData.gender}
              onChange={onInputChange}
              color={colors.active}
              options={GENDERS}
              margin={"0 0 6rem 0"}
            />
            <Button name={"Filter"} isSubmit />
          </Form>
        </StickyContainer>
      </Aside>
      {!error && (
        <PaginatorWrapper>
          <Paginator
            onPrev={prevButtonHandler}
            onNext={nextButtonHandler}
            hasPrev={paginatorProps.hasPrev}
            hasNext={paginatorProps.hasNext}
            current={currentPage}
          />
        </PaginatorWrapper>
      )}
    </Container>
  );
};
export default Characters;
