import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows";
import KitchenIcon from "@mui/icons-material/Kitchen";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { createTheme, ThemeProvider } from "@mui/material";
import { Link } from "react-router-dom";

const theme = createTheme({
  typography: {
    fontSize: 12,
    fontFamily: "Urbanist",
  },
});

const SideMenu = () => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 270,
        bgcolor: "background.paper",
      }}
    >
      <nav aria-label="main mailbox folders">
        <List>
          <ThemeProvider theme={theme}>
            <Link
              to={`/products/computing`}
              style={{ textDecoration: "none", color: "initial" }}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon sx={{ minWidth: 35 }}>
                    <DesktopWindowsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Computing" />
                </ListItemButton>
              </ListItem>
            </Link>
            <Link
              to={`/products/household`}
              style={{ textDecoration: "none", color: "initial" }}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon sx={{ minWidth: 35 }}>
                    <KitchenIcon />
                  </ListItemIcon>
                  <ListItemText primary="Household items" />
                </ListItemButton>
              </ListItem>
            </Link>
            <Link
              to={`/products/phonesandtablets`}
              style={{ textDecoration: "none", color: "initial" }}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon sx={{ minWidth: 35 }}>
                    <PhoneAndroidIcon />
                  </ListItemIcon>
                  <ListItemText primary="Phones & tablets" />
                </ListItemButton>
              </ListItem>
            </Link>
            <Link
              to={`/products/fashion`}
              style={{ textDecoration: "none", color: "initial" }}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon sx={{ minWidth: 35 }}>
                    <CheckroomIcon />
                  </ListItemIcon>
                  <ListItemText primary="Fashion" />
                </ListItemButton>
              </ListItem>
            </Link>
            <Link
              to={`/products/others`}
              style={{ textDecoration: "none", color: "initial" }}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon sx={{ minWidth: 35 }}>
                    <MoreHorizIcon />
                  </ListItemIcon>
                  <ListItemText primary="Other categories" />
                </ListItemButton>
              </ListItem>
            </Link>
          </ThemeProvider>
        </List>
      </nav>
    </Box>
  );
};

export default SideMenu;
