import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  IconButton,
  useTheme,
} from "@mui/material";
import logo from "../assets/LOGO.png";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsFillBagFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function NavigationBar() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <AppBar sx={{ backgroundColor: "black" }} position="static">
      <CssBaseline />
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: isMobile?"20px":"50px",
          }}
        >
          {isMobile && (
            <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
              <AiOutlineMenu color="#fff" />
            </IconButton>
          )}
          <img
            src={logo}
            alt="logo"
            style={{
              width: "150px",
              height: "70px",
              marginLeft: isMobile ? "0px" : "50px",
            }}
          />
          {!isMobile && (
            <>
              <Typography
                sx={{
                  color: "#fff",
                  fontWeight: "500",
                  fontSize: "20px",
                }}
              >
                Home
              </Typography>
              <Typography
                sx={{
                  color: "#fff",
                  fontWeight: "500",
                  fontSize: "20px",
                }}
              >
                Shop
              </Typography>
              <Typography
                sx={{
                  color: "#fff",
                  fontWeight: "500",
                  fontSize: "20px",
                }}
              >
                Brands
              </Typography>
            </>
          )}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "20px",
            borderLeft: "1px solid red",
            pl: "20px",
            mr: isMobile ? "40px" : "80px",
          }}
        >
          <IconButton>
            <AiOutlineSearch color="#fff" />
          </IconButton>
          <IconButton>
            <BsFillBagFill color="#fff" />
          </IconButton>
          <IconButton>
            <CgProfile color="#fff" />
          </IconButton>
        </Box>
      </Toolbar>
      <DrawerComponent openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
    </AppBar>
  );
}
function DrawerComponent({ openDrawer, setOpenDrawer }) {
  return (
    <>
      <Drawer
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "black",
          },
        }}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText
              sx={{
                "& a": {
                  textDecoration: "none",
                  color: "#fff",
                },
              }}
            >
              <Link to="/">Home</Link>
            </ListItemText>
          </ListItem>
          <ListItem
            sx={{
              "& a": {
                textDecoration: "none",
                color: "#fff",
              },
            }}
            onClick={() => setOpenDrawer(false)}
          >
            <ListItemText>
              <Link to="/about">Shop</Link>
            </ListItemText>
          </ListItem>
          <ListItem
            sx={{
              "& a": {
                textDecoration: "none",
                color: "#fff",
              },
            }}
            onClick={() => setOpenDrawer(false)}
          >
            <ListItemText>
              <Link to="/contact">Brands</Link>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
