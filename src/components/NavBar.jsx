import React from "react";
import { ListItem, ListItemIcon } from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import SignalCellularAltOutlinedIcon from "@mui/icons-material/SignalCellularAltOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TyceLogo from "../assets/tyce.png";

export const NavBar = () => {
  return (
    <div className="tw-fixed tw-h-full tw-flex tw-flex-col tw-justify-between tw-pb-5 tw-border tw-border-slate-400 tw-border-solid">
      <div>
        <ListItem>
          <ListItemIcon sx={{ justifyContent: "center" }}>
            <img src={TyceLogo} />
          </ListItemIcon>
        </ListItem>
        <ListItem button>
          <ListItemIcon sx={{ justifyContent: "center" }}>
            <AddOutlinedIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem button>
          <ListItemIcon sx={{ justifyContent: "center" }}>
            <InsertDriveFileOutlinedIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem button>
          <ListItemIcon sx={{ justifyContent: "center" }}>
            <SignalCellularAltOutlinedIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem button>
          <ListItemIcon sx={{ justifyContent: "center" }}>
            <SettingsIcon />
          </ListItemIcon>
        </ListItem>
      </div>
      <ListItem button>
        <ListItemIcon sx={{ justifyContent: "center" }}>
          <AccountCircleIcon />
        </ListItemIcon>
      </ListItem>
    </div>
  );
};
