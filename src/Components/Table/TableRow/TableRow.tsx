import { colors } from "@utils/colors";
import { FC } from "react";
import styled from "styled-components";

const Row = styled.tr`
  border-bottom: 0.1rem solid ${colors.tableLine};
`;

type TableRowProps = {
  children: JSX.Element | JSX.Element[];
};

const TableRow: FC<TableRowProps> = ({ children }) => {
  return <Row>{children}</Row>;
};
export default TableRow;
