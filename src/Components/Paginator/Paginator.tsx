import { FC } from "react";

import { Container, ControlButton, CurrentPage } from "./styles";

type PaginatorProps = {
  onNext: () => void;
  onPrev: () => void;
  current: string;
};

const Paginator: FC<PaginatorProps> = ({ onPrev, onNext, current }) => {
  const prevButtonHandler = () => {
    onPrev();
  };

  const nextButtonHandler = () => {
    onNext();
  };

  return (
    <Container>
      <ControlButton onClick={prevButtonHandler}>{"<"}</ControlButton>
      <CurrentPage>{`${current}`}</CurrentPage>
      <ControlButton onClick={nextButtonHandler}>{">"}</ControlButton>
    </Container>
  );
};
export default Paginator;
