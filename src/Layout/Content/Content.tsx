import { FC } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Home from "@pages/Home";
import Characters from "@pages/Characters";
import Episodes from "@pages/Episodes";
import Locations from "@pages/Locations";
import WatchList from "@pages/WatchList";
import PageNotFound from "@pages/PageNotFound";
import CharacterModal from "@pages/Characters/CharacterModal";
import { Fragment } from "react";

import "./transition.scss";
import { ROUTES } from "@routes/routes";

const Content: FC = () => {
  let location = useLocation();
  return (
    <Fragment>
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="page" timeout={300}>
          <Switch location={location}>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path={"/" + ROUTES.characters}>
              <Characters />
            </Route>
            <Route path={"/" + ROUTES.episodes}>
              <Episodes />
            </Route>
            <Route path={"/" + ROUTES.locations}>
              <Locations />
            </Route>
            <Route path={"/" + ROUTES.todo}>
              <WatchList />
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
      <Route path="/characters/:id" children={<CharacterModal />} />
    </Fragment>
  );
};
export default Content;
