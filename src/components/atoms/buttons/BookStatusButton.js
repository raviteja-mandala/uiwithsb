import { Box, Grid, makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles((theme) => ({
  gridItemContainerForInactiveButton: {
    borderColor: "black",
  },
  gridItemContainerForActiveButton: {
    borderColor: theme.palette.primary.main,
  },

  bookStatusButtonActive: {
    color: theme.palette.primary.main,
    border: "none",
    backgroundColor: theme.bookStatusButtonColor.main,
    marginTop: "5px",
    marginBottom: "15px",
    fontSize: theme.typography.fontSize.bookStatusFontSize,
    fontWeight: 500,
  },

  bookStatusButtonStyle: {
    border: "none",
    paddingLeft: "0px",
    backgroundColor: theme.bookStatusButtonColor.main,
    marginTop: "5px",
    marginBottom: "15px",
    fontSize: theme.typography.fontSize.bookStatusFontSize,
    fontWeight: 500,
  },
}));

function BookStatusButton(props) {
  const classes = useStyles();

  const changeStatus = () => {
    props.clickfunc(props.state);
  };

  return (
    <Grid item xs={4}>
      <Box
        borderBottom={2}
        className={
          props.buttonContainerStyles === "gridItemContainerForInactiveButton"
            ? classes.gridItemContainerForInactiveButton
            : classes.gridItemContainerForActiveButton
        }
      >
        <button
          className={
            props.buttonStyles === "bookStatusButtonStyle"
              ? classes.bookStatusButtonStyle
              : classes.bookStatusButtonActive
          }
          onClick={() => changeStatus()}
        >
          {props.children}
        </button>{" "}
      </Box>
    </Grid>
  );
}

BookStatusButton.propTypes = {
  children: PropTypes.string,
  state: PropTypes.string,
  buttonStyles: PropTypes.string,
  buttonContainerStyles: PropTypes.string,
};

export default BookStatusButton;
