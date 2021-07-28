import { makeStyles, Typography } from "@material-ui/core";
import Category from "@material-ui/icons/Category";
import Engineering from "@material-ui/icons/Engineering";
import LocalHospital from "@material-ui/icons/LocalHospital";
import Science from "@material-ui/icons/Science";
import SportsCricket from "@material-ui/icons/SportsCricket";
import React from "react";

const useStyles = makeStyles((theme) => ({
  iconFont: {
    fontSize: theme.typography.fontSize.categoryIconFont,
    verticalAlign: "middle",
  },

  textMessage: {
    fontSize: theme.typography.fontSize.category,
    paddingLeft: 5,
    display: "inline-block",
  },
}));

function CategoryWithIcon(props) {
  const classes = useStyles();
  var IconElement;
  switch (props.message) {
    case "sports":
      IconElement = SportsCricket;
      break;

    case "Science":
      IconElement = Science;
      break;

    case "General Engineering":
      IconElement = Engineering;

      break;
    case "Chemical Engineering":
      IconElement = Engineering;
      break;

    case "Medicine":
      IconElement = LocalHospital;
      break;

    default:
      IconElement = Category;
      break;
  }

  return (
    <div>
      <IconElement className={classes.iconFont}></IconElement>
      <Typography className={classes.textMessage}>{props.message}</Typography>
    </div>
  );
}

export default CategoryWithIcon;
