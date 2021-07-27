import { FC, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { Backdrop, ModalWrapper, StyledModal } from "./styles";

type ModalProps = {
  children: JSX.Element | JSX.Element[];
};

const Modal: FC<ModalProps> = ({ children }) => {
  const history = useHistory();

  let back = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    if (history.length > 2) {
      history.goBack();
    } else {
      history.push("/");
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <ModalWrapper>
      <Backdrop onClick={back} />
      <StyledModal>{children}</StyledModal>
    </ModalWrapper>
  );
};
export default Modal;
