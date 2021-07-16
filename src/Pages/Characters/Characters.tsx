import { useEffect } from "react";
import { FC } from "react";

import Paginator from "@components/Paginator";
import useCharacters from "./useCharacters";
import Form from "@components/Form";
import Input from "@UI/Input";
import Button from "@UI/Button";
import { Link } from "@UI/NavButton/styles";
import CharacterCard from "@components/CharacterCard";
import { colors } from "@utils/colors";

import {
  Aside,
  Container,
  PaginatorWrapper,
  Section,
  List,
  StickyContainer,
} from "./styles";

const Characters: FC = () => {
  const {
    characters,
    currentPage,
    formData,
    scrollToRef,
    location,
    prevButtonHandler,
    nextButtonHandler,
    initialQuery,
    onSubmit,
    onInputChange,
  } = useCharacters();

  useEffect(() => {
    initialQuery();
  }, [initialQuery]);

  return (
    <Container>
      <Section>
        <List ref={scrollToRef}>
          {!!characters.results &&
            characters.results.map((char) => (
              <Link key={char.id} to={location.pathname + `/${char.id}`}>
                <CharacterCard
                  name={char.name}
                  gender={char.gender}
                  status={char.status}
                  species={char.species}
                  type={char.type}
                  image={char.image}
                />
              </Link>
            ))}
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
          <PaginatorWrapper>
            <Paginator
              onPrev={prevButtonHandler}
              onNext={nextButtonHandler}
              current={currentPage}
            />
          </PaginatorWrapper>
        </StickyContainer>
      </Aside>
    </Container>
  );
};
export default Characters;
