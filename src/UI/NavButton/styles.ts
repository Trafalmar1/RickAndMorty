import styled from "styled-components";

import { colors } from "@utils/colors";
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
  font-size: 2rem;
  font-weight: 700;
  width: max-content;
  &.active {
    color: ${colors.active};
  }
`;
