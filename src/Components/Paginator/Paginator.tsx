import { FC } from "react";

import { Container, ControlButton, CurrentPage } from "./styles";

type PaginatorProps = {
  onNext: () => void;
  onPrev: () => void;
  current: string;
  hasNext?: boolean;
  hasPrev?: boolean;
};

export type Pages = {
  hasPrev?: boolean;
  hasNext?: boolean;
};

const Paginator: FC<PaginatorProps> = ({
  onPrev,
  onNext,
  current,
  hasNext = true,
  hasPrev = true,
}) => {
  const prevButtonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onPrev();
  };

  const nextButtonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onNext();
  };

  return (
    <Container>
      <ControlButton disabled={!hasPrev} onClick={prevButtonHandler}>
        {"<"}
      </ControlButton>
      <CurrentPage>{`${current}`}</CurrentPage>
      <ControlButton disabled={!hasNext} onClick={nextButtonHandler}>
        {">"}
      </ControlButton>
    </Container>
  );
};
export default Paginator;
