import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import { PostForm } from "../ui/PostForm";

export function FormDialog() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div onClick={handleClickOpen}>
        <PostForm placeholder="Post Event" />
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Upload Event</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Fill in the form to add your event
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Event Name"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            id="name"
            label="Organiser' Name"
            type="text"
            fullWidth
            variant="standard"
          />{" "}
          <TextField
            margin="dense"
            id="name"
            label="Location"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            id="name"
            label="Price"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            id="name"
            label="Period"
            type="text"
            fullWidth
            variant="standard"
          />
          <Button variant="contained" component="label">
            Upload image
            <input type="file" hidden />
          </Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Upload</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
