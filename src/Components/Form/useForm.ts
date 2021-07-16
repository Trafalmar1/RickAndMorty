import { FormEvent } from "react";

const useForm = (callback: () => void) => {
  const submit = (event: FormEvent) => {
    event.preventDefault();
    callback();
  };

  return { submit };
};

export default useForm;
