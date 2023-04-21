import { TurnedInNot } from "@mui/icons-material";
import {
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { noteClass } from "../../interface/noteClass";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { setActiveNote } from "../../store/journal";

export const SideBarItem = (note: noteClass) => {
  const distpatch = useDispatch();
  const onClickNote = () => {
    distpatch(setActiveNote(note));
  };
  const newtitle = useMemo(() => {
    return note.title.length > 17
      ? note.title.substring(0, 17) + "..."
      : note.title;
  }, [note.title]);
  return (
    <ListItem key={note.id} disablePadding>
      <ListItemButton onClick={onClickNote}>
        <ListItemIcon>
          <TurnedInNot></TurnedInNot>
        </ListItemIcon>
        <Grid container>
          <ListItemText primary={newtitle}></ListItemText>
          <ListItemText secondary={note.body}></ListItemText>
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};
