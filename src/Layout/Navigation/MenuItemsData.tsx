import { SvgIconProps } from "@material-ui/core";
import {
  Home,
  AssignmentIndRounded,
  Movie,
  LocationOn,
  PlaylistAddCheck,
} from "@material-ui/icons";
import { ROUTES } from "@routes/routes";

export type MenuItem = {
  label: string;
  path: string;
  icon: SvgIconProps;
};

export const menuData: MenuItem[] = [
  {
    label: "Home",
    path: "/",
    icon: <Home />,
  },
  {
    label: "Characters",
    path: ROUTES.characters,
    icon: <AssignmentIndRounded />,
  },
  {
    label: "Episodes",
    path: ROUTES.episodes,
    icon: <Movie />,
  },
  {
    label: "Locations",
    path: ROUTES.locations,
    icon: <LocationOn />,
  },
  {
    label: "To-do list",
    path: ROUTES.todo,
    icon: <PlaylistAddCheck />,
  },
];
