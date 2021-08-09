import { useState } from "react";
import { useEffect } from "react";
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

export type PageNumbers = {
  prev: number;
  next: number;
};

const initialPages = {
  prev: 0,
  next: 2,
};

const Paginator: FC<PaginatorProps> = ({
  onPrev,
  onNext,
  current,
  hasNext = true,
  hasPrev = true,
}) => {
  const [pageNumbers, setPageNumber] = useState<PageNumbers>(initialPages);
  const prevButtonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onPrev();
  };

  const nextButtonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onNext();
  };

  useEffect(() => {
    const curNumber = parseInt(current);
    if (!curNumber) return;
    setPageNumber((state) => {
      const prev = hasPrev ? curNumber - 1 : state.prev;
      const next = hasNext ? curNumber + 1 : state.next;
      return { prev, next };
    });
  }, [current, hasNext, hasPrev]);

  return (
    <Container>
      {hasPrev && (
        <ControlButton disabled={!hasPrev} onClick={prevButtonHandler}>
          {pageNumbers.prev}
        </ControlButton>
      )}
      <CurrentPage>{`${current}`}</CurrentPage>
      {hasNext && (
        <ControlButton disabled={!hasNext} onClick={nextButtonHandler}>
          {pageNumbers.next}
        </ControlButton>
      )}
    </Container>
  );
};
export default Paginator;
