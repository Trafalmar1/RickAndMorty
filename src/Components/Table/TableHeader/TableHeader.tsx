import { FC } from "react";
import styled, { CSSProp } from "styled-components";

import { size } from "@utils/screenSizes";

const Header = styled.th<{ width?: CSSProp }>`
  text-transform: uppercase;
  text-align: left;
  font-weight: 500;
  padding: 1rem 1rem;
  width: ${(props) => (props.width ? props.width : "auto")};
  @media (max-width: ${size.mobile}) {
    padding: 1rem 1rem;
  }
`;

type TableHeaderProps = {
  width?: string;
  children: string;
};

const TableHeader: FC<TableHeaderProps> = ({ children, width }) => {
  return <Header width={width}>{children}</Header>;
};
export default TableHeader;
