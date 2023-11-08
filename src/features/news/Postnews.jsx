import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
// import CloseIcon from "@mui/icons-material/Close";
// import Slide from "@mui/material/Slide";
import { PostForm } from "../../ui/PostForm";
import { X } from "react-bootstrap-icons";
import { DialogContent, DialogContentText, TextField } from "@mui/material";

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

export default function Postnews() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div onClick={handleClickOpen}>
        <PostForm placeholder="Create story" />
      </div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        // TransitionComponent={Transition}
      >
        <AppBar
          sx={{
            position: "relative",
            background: "transparent",
            color: "black",
          }}
        >
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              {/* <CloseIcon /> */} <X />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Add news story
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Post
            </Button>
          </Toolbar>
        </AppBar>

        <DialogContent>
          <DialogContentText>Create your story</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Title"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            id="name"
            label="Source"
            type="text"
            fullWidth
            variant="standard"
          />

          <textarea
            name="story"
            placeholder="Type your story here"
            id=""
            className="w-[90vw], focus:outline-none focus:outline-black focus:outline-1 my-2 rounded-md"
            cols="75"
            rows="10"
          ></textarea>
          <TextField
            margin="dense"
            id="name"
            label="Story link"
            type="text"
            fullWidth
            multiline
            variant="standard"
          />
          <Button variant="contained" component="label">
            Upload image
            <input type="file" hidden />
          </Button>
        </DialogContent>
        {/* <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Upload</Button>
          </DialogActions> */}
      </Dialog>
    </>
  );
}
