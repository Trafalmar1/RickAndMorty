import { FC } from "react";

import { Link } from "./styles";

type LinkProps = {
  children: string;
  to: string;
  exact?: boolean;
  color?: string;
};

const NavButton: FC<LinkProps> = ({
  children,
  to,
  exact,
  color = "limegreen",
}) => {
  return (
    <Link to={to} exact={exact} color={color}>
      {children}
    </Link>
  );
};
export default NavButton;
