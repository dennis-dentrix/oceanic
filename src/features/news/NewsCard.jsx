/* eslint-disable react/prop-types */
import * as React from "react";

import { ThreeDotsVertical } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";

export function NewsCard({ news }) {
  return (
    <div className=" flex flex-col w-72 sm:w-60 rounded-md">
      <img src={news.image} alt={news.title} className="w-full" />

      <div className="bg-white px-2 rounded-b-md py-2 border border-black flex items-start justify-between">
        <div className="flex flex-col gap-2">
          <Link className="font-bold text-lg tracking-wide">{news.title}</Link>

          <p className="text-black border-l pl-1 border-blue">Read more</p>
        </div>

        <Options />
      </div>
    </div>
  );
}

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      {/* <DialogTitle>Set backup account</DialogTitle> */}
      <List sx={{ pt: 0 }}>
        <ListItem disableGutters>
          <ListItemButton
            autoFocus
            onClick={() => handleListItemClick("delete")}
          >
            <ListItemText primary="Edit" />
          </ListItemButton>
        </ListItem>

        <ListItem disableGutters>
          <ListItemButton autoFocus onClick={() => handleListItemClick("edit")}>
            <ListItemText primary="Delete" />
          </ListItemButton>
        </ListItem>
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export function Options() {
  const [open, setOpen] = React.useState(false);
  // const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    // setSelectedValue(value);
  };

  return (
    <div>
      <Typography variant="subtitle1" component="div"></Typography>
      <br />
      <div onClick={handleClickOpen}>
        <ThreeDotsVertical className="text-black text-xl font-extrabold" />
      </div>
      <SimpleDialog open={open} onClose={handleClose} />
    </div>
  );
}
