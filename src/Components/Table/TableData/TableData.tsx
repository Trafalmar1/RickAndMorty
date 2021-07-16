import { colors } from "@utils/colors";
import { FC } from "react";
import styled from "styled-components";

const Data = styled.td`
  text-align: left;
  padding: 1rem 3rem;
  color: ${colors.secondary};
`;

type TableDataProps = {
  children: string;
};

const Table: FC<TableDataProps> = ({ children }) => {
  return <Data>{children}</Data>;
};
export default Table;
