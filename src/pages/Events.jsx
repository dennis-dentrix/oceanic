import { useState } from "react";
import EventCard from "../features/Events/EventCard";
import EventsDrawer from "../features/Events/EventsDrawer";
import { PostForm } from "../ui/PostForm";
import { BookedContainer } from "./BookedContainer";
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function Events() {
  const [showBooked, setBooked] = useState(false);

  return (
    <div className="md:grid md:grid-cols-[auto_1fr] gap-6">
      <div className="col-start-1 col-end-2">
        <FormDialog />
        <div className=" py-3">
          <div className="flex items-center justify-between">
            <h1 className="py-3">Upcoming events</h1>
            <div
              className="block md:hidden"
              onClick={() => setBooked(!showBooked)}
            >
              <EventsDrawer />
            </div>
          </div>
          <div className="flex gap-3 sm:gap-4 flex-wrap justify-between md:justify-normal ">
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
          </div>
        </div>
      </div>
      {/* <div className="sm:w-full  h-screen  my-2  flex flex-col items-center bg-white w-full overflow-y-scroll scrollbar px-2"> */}
      <div className="hidden md:block">
        <BookedContainer />
      </div>
    </div>
  );
}

function FormDialog() {
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
