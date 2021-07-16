export const capitalizeFirstLetter = (text: string | undefined) => {
  if (text) {
    return text[0].toUpperCase() + text.substr(1);
  }
  return "";
};
