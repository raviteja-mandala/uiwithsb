import { Button, Grid, makeStyles } from "@material-ui/core";
import AccessTime from "@material-ui/icons/AccessTime";
import Person from "@material-ui/icons/Person";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import BookDetailWithIcon from "../molecules/BookDetailWithIcon";

const useStyles = (props) =>
  makeStyles((theme) => ({
    cardContainer: {
      height: "400px",
      width: "250px",
      marginTop: 10,
    },

    buttonContainer: {
      marginTop: 20,
    },

    colorButton: {
      color: "white",
      padding: "5px 10px",
      fontSize: "10px",
      width: "60%",
      backgroundColor: "purple",
      borderRadius: 10,
      marginTop: 2,
      display: "block",
      "&:hover": {
        backgroundColor: "green",
      },
    },

    hideButton: {
      display: "none",
    },

    cardContainerFirstChild: {
      backgroundImage: "url(" + images[`${props.book.image}`].default + ")", //${props.book.location}
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% 100%",
      height: "60%",
      width: "100%",
    },

    bookAuthor: {
      fontSize: 14,
      marginLeft: 8,
      marginRight: 8,
      height: "20px",
      verticalAlign: "top",
    },

    bookTitle: {
      fontSize: 16,
      fontWeight: "bold",
      marginTop: 5,
      marginLeft: 8,
      marginRight: 8,
      height: "35px",
    },
    timer: {
      fontSize: theme.typography.fontSize.cardIconsFont,
      verticalAlign: "middle",
    },
    mins: {
      paddingLeft: 5,
    },

    cardContainerSecondChild: {
      height: "40%",
      width: "100%",
      backgroundColor: "lightgrey",
    },

    reads: {
      textAlign: "right",
      paddingRight: 15,
    },
  }));

function importAll(r) {
  const images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../../pictures", false, /\.(png|jpe?g|svg)$/)
);

const BookCard = (props) => {
  const classes = useStyles(props)();

  const [status, setStatus] = useState(() => {
    return "finished";
  });

  const changeStatusOfBook = (a, b) => {
    a(b);
  };

  useEffect(() => {
    console.log("present status is " + status);
  });

  return (
    <Grid container className={classes.cardContainer}>
      <Grid item className={classes.cardContainerFirstChild}></Grid>
      <Grid
        item
        container
        direction="column"
        spacing={0}
        className={classes.cardContainerSecondChild}
      >
        <Grid item className={classes.bookTitle}>
          {props.book.bookTitle}
        </Grid>
        <Grid item className={classes.bookAuthor}>
          {props.book.bookAuthor}
        </Grid>
        <Grid item container direction="row" justify="space-between">
          <Grid item xs={6} className={classes.mins}>
            <BookDetailWithIcon
              message={`${props.book.min} min read`}
              icon={AccessTime}
            ></BookDetailWithIcon>
          </Grid>
          <Grid item xs={6} className={classes.reads}>
            <BookDetailWithIcon
              message={`${props.book.reads} reads`}
              icon={Person}
            ></BookDetailWithIcon>
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          className={classes.buttonContainer}
        >
          <Button
            id="changeStatus"
            onClick={() => changeStatusOfBook(props.onchangestate, props.book)}
            variant="contained"
            className={
              props.changeStatus === true
                ? classes.colorButton
                : classes.hideButton
            }
          >
            Change status
          </Button>
          <Button
            id="addToLibrary"
            onClick={() => changeStatusOfBook(props.onaddtolibrary, props.book)}
            variant="contained"
            className={
              props.myLibrary === true
                ? classes.hideButton
                : classes.colorButton
            }
          >
            Add to library
          </Button>
          {/* <Button
            id="removeFromLibrary"
            onClick={() => changeStatusOfBook(props.onremove, props.book)}
            variant="contained"
            className={
              props.myLibrary === true
                ? classes.colorButton
                : classes.hideButton
            }
          >
            Remove from library
          </Button> */}
        </Grid>
      </Grid>
    </Grid>
  );
};

BookCard.propTypes = {
  myLibrary: PropTypes.bool,
  changeStatus : PropTypes.bool,
  onremove: PropTypes.func,
  onchangestate: PropTypes.func,
  onaddtolibrary: PropTypes.func,
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    bookTitle: PropTypes.string.isRequired,
    bookAuthor: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    min: PropTypes.number.isRequired,
    reads: PropTypes.string.isRequired,
  }),
};

BookCard.defaultProps = {
  myLibrary: true,
  changeStatus : true
};

export default BookCard;
