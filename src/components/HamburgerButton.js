import React from "react";
import clsx from "clsx"; 


import categories from "../data/category";
import { Button, createTheme, Divider, List, ListItem, ListItemText, SwipeableDrawer, ThemeProvider, useMediaQuery } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
 

export default function HamburgerButton({ setCategory }) {
 // const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  }); 
  //---------------------------------------------------
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
    createTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );
  //----------------------------------------------------

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div style={{width:200, paddingLeft: 10, 
    paddingRight: 5}}
      
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem>Categories</ListItem>
      </List>
      <Divider />
      <List>
        {categories.map((text, index) => (
          <ListItem
            style={{ height: 40, borderRadius: 3 }}
            button
            onClick={() => setCategory(text)}
            key={text}
          >
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <Button onClick={toggleDrawer("left", true)}>
        {/* added icon */}
        <MenuIcon  />
      </Button>
      {/* added */}
      <ThemeProvider theme={theme}>
        <SwipeableDrawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
          onOpen={toggleDrawer("left", true)}
        >
          {list("left")}
        </SwipeableDrawer>
      </ThemeProvider>
    </div>
  );
} 