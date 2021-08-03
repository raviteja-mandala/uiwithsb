import { Grid, makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles(() => ({
  templateContainer: {
    display: "flex",
    flexDirection: "column",
    height: "auto",
  },

  header: (props) => ({
    height:
      props.dimensions.width > 1110 ? props.dimensions.height / 9 : "auto",
  }),

  body: {
    flexGrow: 1,
  }
}));

function MainTemplate(props) {
  const classes = useStyles(props);

  return (
    <Grid container spacing={0} className={classes.templateContainer}>
      <Grid item className={classes.header}>
        {props.header}
      </Grid>
      <Grid item className={classes.body}>
        {props.body}
      </Grid>
    </Grid>
  );
}

MainTemplate.propTypes = {
  header: PropTypes.element.isRequired,
  body: PropTypes.element.isRequired,
  dimensions: PropTypes.exact({
    height: PropTypes.number,
    width: PropTypes.number
  }),
};

export default MainTemplate;
