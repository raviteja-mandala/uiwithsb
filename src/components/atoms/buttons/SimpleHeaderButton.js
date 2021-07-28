import { makeStyles } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  hButton: {
    color: "black",
    padding: "5px 5px",
    textDecoration: "none",
    "&:hover": {
      borderBottom: "2px solid chartreuse",
    },
  },

  hButtonDiv: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    margin: "0px 10px",
  },
}));

function SimpleHeaderButton(props) {
  const classes = useStyles();
  const handleCloseLink = () => {
    if (props.state) {
      props.onlinkclick(false);
    }
  };
  return (
    <div className={classes.hButtonDiv}>
      <Link
        to={props.tolink}
        className={classes.hButton}
        onClick={handleCloseLink}
      >
        {props.children}
      </Link>
    </div>
  );
}

export default SimpleHeaderButton;
