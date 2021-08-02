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

function HeaderButton(props) {
  console.log('abc123--4');
  const classes = useStyles();

  const handleCloseLink = () => {
    props.onlinkclick(!props.state);
  };
  return (
    <div className={classes.hButtonDiv}>
      <Link
        to={props.tolink}
        onClick={handleCloseLink}
        className={classes.hButton}
      >
        {props.children}
      </Link>
    </div>
  );
}

export default React.memo(HeaderButton);
