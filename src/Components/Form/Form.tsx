import { FC } from "react";

import { SForm } from "./styles";
import useForm from "./useForm";

type FormProps = {
  children: JSX.Element | JSX.Element[];
  onSubmit: () => void;
};

const Form: FC<FormProps> = ({ children, onSubmit }) => {
  const { submit } = useForm(onSubmit);

  return <SForm onSubmit={submit}>{children}</SForm>;
};
export default Form;
