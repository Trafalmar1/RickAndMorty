import { useEffect } from "react";

import useEpisodes from "./useEpisodes";

import Form from "@components/Form";
import Input from "@UI/Input";
import Button from "@UI/Button";
import Paginator from "@components/Paginator";
import { colors } from "@utils/colors";

import { PaginatorWrapper, StickyContainer } from "@pages/Characters/styles";
import { Aside, Container, Section } from "./styles";

import EpisodesTable from "./EpisodesTable";

const Episodes = () => {
  const {
    episodes,
    currentPage,
    formData,
    paginatorProps,
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
              margin={"0 0 6rem 0"}
            />

            <Button name={"Filter"} isSubmit />
          </Form>
          <PaginatorWrapper>
            <Paginator
              onPrev={prevButtonHandler}
              onNext={nextButtonHandler}
              hasNext={paginatorProps.hasNext}
              hasPrev={paginatorProps.hasPrev}
              current={currentPage}
            />
          </PaginatorWrapper>
        </StickyContainer>
      </Aside>
    </Container>
  );
};
export default Episodes;
