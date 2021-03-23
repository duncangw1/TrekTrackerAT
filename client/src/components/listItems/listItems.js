import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import LayersIcon from "@material-ui/icons/Layers";
import MapIcon from "@material-ui/icons/Map";
import HistoryIcon from "@material-ui/icons/History";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import UpdateIcon from "@material-ui/icons/Update";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import { Link } from "react-router-dom";

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <Link to="/dashboard">
        <ListItemText primary="Dashboard" />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <MapIcon />
      </ListItemIcon>
      <Link to="/progress-map">
        <ListItemText primary="Progress Map" />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="State Overview" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <HistoryIcon />
      </ListItemIcon>
      <ListItemText primary="Hiking History" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Compare Users" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Actions</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AddCircleIcon />
      </ListItemIcon>
      <ListItemText primary="Add New Hike(s)" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <EditIcon />
      </ListItemIcon>
      <ListItemText primary="Edit Hike(s)" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DeleteIcon />
      </ListItemIcon>
      <ListItemText primary="Delete Hike(s)" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <InsertDriveFileIcon />
      </ListItemIcon>
      <ListItemText primary="Create CSV" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <UpdateIcon />
      </ListItemIcon>
      <ListItemText primary="Update User Info" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ContactSupportIcon />
      </ListItemIcon>
      <ListItemText primary="Contact Admin" />
    </ListItem>
  </div>
);
