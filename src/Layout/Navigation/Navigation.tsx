import NavButton from "@UI/NavButton";
import Sidebar from "./Sidebar";
import useSidebar from "./Sidebar/useSidebar";
import { menuData, MenuItem } from "./MenuItemsData";
import BurgerMenu from "./BurgerMenu";
import { useWindowSize } from "@hooks/useWindowSize";

import { StyledNav } from "./styles";

const Navigation = () => {
  const { visible, toggleSidebar } = useSidebar();
  const { width } = useWindowSize();

  if (width && width <= 650) {
    return (
      <>
        <BurgerMenu onToggle={toggleSidebar} toggled={visible}>
          <Sidebar
            visible={visible}
            links={menuData}
            toggleSidebar={toggleSidebar}
          />
        </BurgerMenu>
      </>
    );
  }

  return (
    <>
      <StyledNav>
        <ul>
          {menuData.map((item: MenuItem) => (
            <li key={"menu" + item.label}>
              <NavButton to={item.path} exact>
                {item.label}
              </NavButton>
            </li>
          ))}
        </ul>
      </StyledNav>
    </>
  );
};

export default Navigation;
