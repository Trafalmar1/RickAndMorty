import { FC } from "react";
import styled from "styled-components";

import { colors } from "@utils/colors";
import { size } from "@utils/screenSizes";

const Data = styled.td`
  text-align: left;
  padding: 1rem 3rem;
  color: ${colors.secondary};
  @media (max-width: ${size.mobile}) {
    padding: 1rem 1rem;
  }
`;

type TableDataProps = {
  children: string;
};

const Table: FC<TableDataProps> = ({ children }) => {
  return <Data>{children}</Data>;
};
export default Table;
