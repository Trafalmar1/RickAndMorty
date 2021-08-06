import { Divide as Hamburger } from "hamburger-react";
import { FC } from "react";
import { useLocation } from "react-router-dom";

import { colors } from "@utils/colors";
import { Container, Content, Title } from "./styles";

import { capitalizeFirstLetter } from "@utils/helpers";

type BurgerMenuProps = {
  children: React.ReactNode;
  toggled: boolean;
  onToggle: VoidFunction;
};

const BurgerMenu: FC<BurgerMenuProps> = ({ onToggle, children, toggled }) => {
  const { pathname } = useLocation();

  const getTitle = (): String => {
    const path = pathname.split("/")[1];
    if (path) {
      return capitalizeFirstLetter(path);
    }
    return "Home";
  };

  return (
    <Container>
      <Content>
        <Title>{getTitle()}</Title>
        <Hamburger
          color={colors.active}
          onToggle={onToggle}
          toggled={toggled}
          size={30}
        />
      </Content>
      {children}
    </Container>
  );
};
export default BurgerMenu;
