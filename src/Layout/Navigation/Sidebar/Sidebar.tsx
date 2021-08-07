import { FC } from "react";
import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";

import { MenuItem } from "../MenuItemsData";
import { Container, IconContainer, Link, Text } from "./styles";

import "./transition.scss";

type SidebarProps = {
  visible?: boolean;
  links?: MenuItem[];
  toggleSidebar: VoidFunction;
};

const Sidebar: FC<SidebarProps> = ({
  visible = false,
  links,
  toggleSidebar,
}) => {
  const [root, setRoot] = useState<Element | null>();

  useEffect(() => {
    const el = document.getElementById("sidebar");
    setRoot(el);
  }, []);

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [visible]);

  if (!root) return null;

  return (
    <CSSTransition in={visible} timeout={200} classNames="sidebar">
      <Container>
        {!!links &&
          links.map((link: MenuItem) => (
            <Link key={link.label} to={link.path} exact onClick={toggleSidebar}>
              <IconContainer>{link.icon}</IconContainer>
              <Text>{link.label}</Text>
            </Link>
          ))}
      </Container>
    </CSSTransition>
  );
};
export default Sidebar;
