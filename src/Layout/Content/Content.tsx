import { FC } from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import Home from "@pages/Home";
import Characters from "@pages/Characters";
import Episodes from "@pages/Episodes";
import Locations from "@pages/Locations";
import WatchList from "@pages/WatchList";
import PageNotFound from "@pages/PageNotFound";
import CharacterModal from "@pages/Characters/CharacterModal";
import { Fragment } from "react";

const Content: FC = () => {
  let location = useLocation();
  return (
    <Fragment>
      <Switch location={location}>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/characters">
          <Characters />
        </Route>
        <Route path="/episodes">
          <Episodes />
        </Route>
        <Route path="/locations">
          <Locations />
        </Route>
        <Route path="/my-watch-list">
          <WatchList />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
      <Route path="/characters/:id" children={<CharacterModal />} />
    </Fragment>
  );
};
export default Content;
