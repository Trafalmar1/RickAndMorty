import { FC } from "react";

import { StyledInput } from "./styles";

type InputProps = {
  value?: string;
  name: string;
  placeholder?: string;
  color?: string;
  margin?: string;
  onChange?: (name: string, value: string) => void;
};

const Input: FC<InputProps> = ({
  value,
  name,
  placeholder,
  color,
  margin,
  onChange,
}) => {
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onChange && onChange(name, value);
  };

  const getPlaceholder = () => {
    return placeholder
      ? placeholder
      : name[0].toUpperCase() + name.substring(1);
  };

  return (
    <StyledInput
      color={color}
      margin={margin}
      value={value}
      name={name}
      placeholder={getPlaceholder()}
      onChange={changeHandler}
    />
  );
};
export default Input;
