import { FC } from "react";

import { STable } from "./styles";

type TableProps = {
  children: JSX.Element | JSX.Element[];
};

const Table: FC<TableProps> = ({ children }) => {
  return (
    <STable>
      <tbody>{children}</tbody>
    </STable>
  );
};
export default Table;
