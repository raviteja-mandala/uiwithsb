import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  timer: {
    fontSize: theme.typography.fontSize.cardIconsFont,
    verticalAlign: "middle",
  },

  textMessage: {
    fontSize: theme.typography.fontSize.reads,
    paddingLeft: 5,
    display: "inline-block",
  },
}));

function BookDetailWithIcon(props) {
  const classes = useStyles();
  const IconElement = props.icon;

  return (
    <div>
      <IconElement className={classes.timer}></IconElement>
      <Typography className={classes.textMessage}>{props.message}</Typography>
    </div>
  );
}


BookDetailWithIcon.propTypes = {
  message : PropTypes.string,
  icon : PropTypes.element
};


export default BookDetailWithIcon;
