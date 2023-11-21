import { Fragment, useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

import Exam from "./Exam";

export default function ExamDrawer() {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        height: "90vh",
      }}
      role="presentation"
      //   onClick={toggleDrawer(anchor, false)}
      //   onKeyDown={toggleDrawer(anchor, false)}
    >
      <Container>
        <Exam onClick={toggleDrawer(anchor, false)} />
      </Container>
      {/* <List>
        <ListItem disablePadding>
            
        </ListItem>
      </List> */}
    </Box>
  );

  return (
    <div>
      {["bottom"].map((anchor) => (
        <Fragment key={anchor}>
          <div
            className="bg-blue text-white rounded-md px-4 py-6 w-48 flex flex-col justify-around gap-5"
            onClick={toggleDrawer(anchor, true)}
          >
            <button className="px-1 py-2 bg-white text-black rounded-full">
              Start
            </button>
            <div>
              <h1>Take a test</h1>
              <p className="text-sm">0/100</p>
            </div>
          </div>
          {/* <Button >{anchor}</Button> */}
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </Fragment>
      ))}
    </div>
  );
}
