import { ROUTES } from "@routes/routes";
import NavButton from "@UI/NavButton";
import { StyledNav } from "./styles";

const Navigation = () => {
  return (
    <StyledNav>
      <ul>
        <li>
          <NavButton to={"/"} exact>
            Home
          </NavButton>
        </li>
        <li>
          <NavButton to={ROUTES.characters}>Characters</NavButton>
        </li>
        <li>
          <NavButton to={ROUTES.episodes}>Episodes</NavButton>
        </li>
        <li>
          <NavButton to={ROUTES.locations}>Locations</NavButton>
        </li>
        <li>
          <NavButton to={ROUTES.watchList}>My watch list</NavButton>
        </li>
      </ul>
    </StyledNav>
  );
};

export default Navigation;
