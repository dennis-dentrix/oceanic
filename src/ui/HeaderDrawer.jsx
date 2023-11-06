import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { List as ListIcon } from "react-bootstrap-icons";

import { Link, NavLink } from "react-router-dom";
import { House, Newspaper } from "react-bootstrap-icons";

export default function HeaderDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className="h-screen flex flex-col"
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <Navbar />
            <ListItemText />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List className="">
        <ListItem disablePadding>
          <ListItemButton>
            <p>First time</p>
            <ListItemText />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <ListIcon className="h-8 w-8" />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

function Navbar() {
  const activeNav =
    "text-blue border-b border-blue flex items-center gap-5 w-max transition-all duration-200";
  return (
    <header className="flex flex-col items-start justify-between w-full h-[70vh]">
      <div className="space-y-4 ">
        <Link
          to="/dashboard"
          className="text-blue tracking-wider text-xl skew-y-6"
        >
          Oceania
        </Link>
        <div className="flex items-center gap-6">
          <button className="cursor-pointer px-3 py-1 border border-black text-blue rounded-md focus:ring-1 focus:ring-blue focus:border-none focus:scale-1 transition-all duration-300">
            Login
          </button>
          <button className="cursor-pointer px-3 py-1 border border-blue bg-blue text-grey rounded-md focus:ring-1 focus:border-none focus:ring-black ">
            Register
          </button>
        </div>
      </div>

      <nav className="h-full">
        <ul className="flex flex-col h-full justify-around ">
          <NavLink
            to="dashboard"
            className={({ isActive }) =>
              isActive
                ? activeNav
                : "text-lg font-medium flex items-center gap-5 "
            }
          >
            <span>
              <House className="h-7" />
            </span>
            Dashboard
          </NavLink>
          <NavLink
            to="news"
            className={({ isActive }) =>
              isActive
                ? activeNav
                : "text-lg font-medium flex items-center gap-5 "
            }
          >
            <span>
              <Newspaper />
            </span>
            News
          </NavLink>
          <NavLink
            to="Events"
            className={({ isActive }) =>
              isActive
                ? activeNav
                : "text-lg font-medium flex items-center gap-5 "
            }
          >
            Events
          </NavLink>
          <NavLink
            to="Resources"
            className={({ isActive }) =>
              isActive
                ? activeNav
                : "text-lg font-medium flex items-center gap-5 "
            }
          >
            Resources
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}
