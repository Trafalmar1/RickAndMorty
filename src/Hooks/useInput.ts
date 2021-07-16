export const useInput = (formData: any, setFormData: (param: any) => void) => {
  const onInputChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return { onInputChange, formData };
};
