import { FC } from "react";

import { SButton } from "./styles";

type ButtonProps = {
  name: string;
  isSubmit?: boolean;
  onClick?: () => void;
};

const Button: FC<ButtonProps> = ({ name, isSubmit, onClick }) => {
  return (
    <SButton onClick={onClick} type={isSubmit ? "submit" : "button"}>
      {name}
    </SButton>
  );
};
export default Button;
