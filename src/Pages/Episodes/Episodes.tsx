import { useEffect } from "react";

import useEpisodes from "./useEpisodes";

import Form from "@components/Form";
import Input from "@UI/Input";
import Button from "@UI/Button";
import Paginator from "@components/Paginator";
import { colors } from "@utils/colors";

import {
  Aside,
  Container,
  PaginatorWrapper,
  Section,
  StickyContainer,
} from "@pages/Characters/styles";

import EpisodesTable from "./EpisodesTable";

const Episodes = () => {
  const {
    episodes,
    currentPage,
    formData,
    prevButtonHandler,
    nextButtonHandler,
    initialQuery,
    onSubmit,
    onInputChange,
  } = useEpisodes();

  useEffect(() => {
    initialQuery();
  }, [initialQuery]);

  return (
    <Container>
      <Section>
        <EpisodesTable episodes={episodes} />
      </Section>
      <Aside>
        <StickyContainer>
          <Form onSubmit={onSubmit}>
            <Input
              name={"name"}
              value={formData.name}
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
export default Episodes;
