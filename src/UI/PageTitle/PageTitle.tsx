import { FC } from "react";

import { Title } from "./styles";

type PageTitleProps = {
  text: string;
};

const PageTitle: FC<PageTitleProps> = ({ text }) => {
  return <Title>{text}</Title>;
};
export default PageTitle;
