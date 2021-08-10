import { makeStyles, Typography } from "@material-ui/core";
import Category from "@material-ui/icons/Category";
import Engineering from "@material-ui/icons/Engineering";
import LocalHospital from "@material-ui/icons/LocalHospital";
import Science from "@material-ui/icons/Science";
import SportsCricket from "@material-ui/icons/SportsCricket";
import PropTypes from "prop-types";
import React from "react";
import { GiFactory , GiChessKing } from "react-icons/gi";
import { FaChess } from "react-icons/fa";


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
    case "Outdoor Sports":
      IconElement = SportsCricket;
      break;

    case "Indoor Sports":
      IconElement = FaChess;
      break;

    case "Science":
      IconElement = Science;
      break;

    case "General Engineering":
      IconElement = Engineering;
      break;

    case "Chemical Engineering":
      IconElement = GiFactory;
      break;

    case "Medicine":
      IconElement = LocalHospital;
      break;
    
      case "politics":
      IconElement = GiChessKing;
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

CategoryWithIcon.propTypes = {
    message : PropTypes.string
    
  };

export default CategoryWithIcon;
