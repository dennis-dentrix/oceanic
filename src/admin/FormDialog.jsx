import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Button,
  TextField,
} from "@mui/material";

import { PostForm } from "../ui/PostForm";
import { createEvent } from "../services/apiEvents";

export function FormDialog() {
  const [open, setOpen] = useState(false);

  const queryclient = useQueryClient();

  const { reset, register, handleSubmit } = useForm();
  const { mutate: creatingEvent } = useMutation({
    mutationFn: createEvent,
    onSuccess: () => {
      queryclient.invalidateQueries("events");
      reset();
    },
  });

  function submitForm(data) {
    console.log(data);
    creatingEvent(data);
    setOpen(false);
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div onClick={handleClickOpen}>
        <PostForm placeholder="Create Event" />
      </div>
      <Dialog open={open} onClose={handleClose} className="h-max">
        <DialogTitle>Upload Event</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Fill in the form to add your event
          </DialogContentText>
          <form onSubmit={handleSubmit(submitForm)}>
            <TextField
              autoFocus
              margin="dense"
              id="title"
              label="Event Name"
              type="text"
              fullWidth
              variant="standard"
              {...register("title")}
            />
            <TextField
              margin="dense"
              id="organizer"
              label="Organiser' Name"
              type="text"
              fullWidth
              variant="standard"
              {...register("organizer")}
            />{" "}
            <TextField
              margin="dense"
              id="location"
              label="Location"
              type="text"
              fullWidth
              variant="standard"
              {...register("location")}
            />
            <TextField
              margin="dense"
              id="price"
              label="Price"
              type="text"
              fullWidth
              variant="standard"
              {...register("price")}
            />
            <div className="flex gap-2 items-center my-3">
              <label htmlFor="startDate">Start Date:</label>
              <input
                type="date"
                id="start"
                name="trip-start"
                // value="2023-11-28"
                className="border"
                {...register("startDate")}
              />
            </div>
            <div className="flex gap-2 items-center my-3">
              <label htmlFor="startDate">End Date:</label>
              <input
                type="date"
                id="start"
                name="trip-start"
                // value="2023-11-28"
                className="border"
                {...register("endDate")}
              />
            </div>
            <Button variant="contained" component="label">
              Upload image
              <input type="file" hidden />
            </Button>
            <div className="flex justify-between pt-5">
              <button onClick={handleClose} className="text-red-600">
                Cancel
              </button>

              <button className="border px-2 py-1 bg-green rounded-md text-black  uppercase font-bold">
                Upload
              </button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
