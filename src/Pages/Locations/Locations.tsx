import { useEffect } from "react";

import Form from "@components/Form";
import Input from "@UI/Input";
import Button from "@UI/Button";
import Paginator from "@components/Paginator";
import { colors } from "@utils/colors";

import LocationsTable from "./LocationsTable";
import useLocations from "./useLocations";
import { TYPES, DIMENSIONS } from "./LocationsData";

import { StickyContainer } from "@pages/Characters/styles";
import { Container, Section, Aside, PaginatorWrapper } from "./styles";

const Locations = () => {
  const {
    locations,
    currentPage,
    formData,
    paginatorProps,
    prevButtonHandler,
    nextButtonHandler,
    initialQuery,
    onSubmit,
    onInputChange,
  } = useLocations();

  useEffect(() => {
    initialQuery();
  }, [initialQuery]);

  return (
    <Container>
      <Section>
        <LocationsTable locations={locations} />
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
            <Input
              name={"type"}
              value={formData.type}
              onChange={onInputChange}
              color={colors.active}
              options={TYPES}
            />
            <Input
              name={"dimension"}
              value={formData.dimension}
              onChange={onInputChange}
              color={colors.active}
              options={DIMENSIONS}
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
export default Locations;
