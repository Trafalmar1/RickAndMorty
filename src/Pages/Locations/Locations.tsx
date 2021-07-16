import { Fragment, useEffect } from "react";

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

import { TableWrapper } from "../Episodes/styles";
import LocationsTable from "./LocationsTable";
import useLocations from "./useLocations";

const Locations = () => {
  const {
    locations,
    currentPage,
    formData,
    scrollToRef,
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
    <Fragment>
      <Container>
        <Section>
          <TableWrapper ref={scrollToRef}>
            <LocationsTable locations={locations} />
          </TableWrapper>
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
              />
              <Input
                name={"dimension"}
                value={formData.dimension}
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
    </Fragment>
  );
};
export default Locations;
