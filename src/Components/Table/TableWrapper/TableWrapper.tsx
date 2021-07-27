import { FC } from "react";

import { TWrapper } from "./styles";

type TableWrapperProps = {
  children: JSX.Element | JSX.Element[];
};

const TableWrapper: FC<TableWrapperProps> = ({ children }) => {
  return <TWrapper>{children}</TWrapper>;
};
export default TableWrapper;
