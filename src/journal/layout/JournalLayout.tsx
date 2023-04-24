import { Box, Toolbar } from "@mui/material";
import { NavBar, SideBar } from "../components";
import { ReactNode } from "react";

const drawerWidth: number = 200;
interface Props {
  children?: ReactNode;
}
const JournalLayout = ({ children }:Props) => {
  return (
    <Box sx={{ display: "flex" }} className="animate__animated animate__fadeIn animate__faster">
      <NavBar drawerWidth={drawerWidth}></NavBar>
      <SideBar draweWidth={drawerWidth}></SideBar>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* Toolbar */}
        <Toolbar></Toolbar>
        {children}
      </Box>
    </Box>
  );
};

export default JournalLayout;
