import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import { Route, Switch } from "react-router";
import AddBook from "../organisms/AddBook";
import BooksWithStatus from "../organisms/BooksWithStatus";
import ExploreBooks from "../organisms/ExploreBooks";

const useStyles = makeStyles((theme) => ({
  secondSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "40px",
    height: 100,
    fontWeight: 600,
    flexShrink: 0,
    border: "1px solid lightgrey",
  },

  bodyContainer: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
  },
}));

function Body() {
  const classes = useStyles();
  return (
    <Box className={classes.bodyContainer}>
      <Switch>
        <Route exact path="/addBook">
          <AddBook />
        </Route>
        <Route exact path="/myaccount">
          <ExploreBooks />
        </Route>
        <Route exact path="/explore/:category">
          <Box className={classes.secondSection}>All Books</Box>
          <ExploreBooks></ExploreBooks>
        </Route>
        <Route path="/">
          <Box className={classes.secondSection}>My Library</Box>
          <BooksWithStatus />
        </Route>
      </Switch>
    </Box>
  );
}

export default Body;
