import { Button, Grid, makeStyles } from "@material-ui/core";
import AccessTime from "@material-ui/icons/AccessTime";
import Person from "@material-ui/icons/Person";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import book_image1 from "../../pictures/book_image1.png";
import book_image2 from "../../pictures/book_image2.png";
import book_image3 from "../../pictures/book_image3.png";
import book_image4 from "../../pictures/book_image4.png";
import book_image5 from "../../pictures/book_image5.png";
import BookDetailWithIcon from "../molecules/BookDetailWithIcon";

const retImage = (image) => {
  switch (image) {
    case 'book_image1.png':
      return book_image1
      break;
    case 'book_image2.png':
      return book_image2
      break;
    case 'book_image3.png':
      return book_image3
      break;
    case 'book_image4.png':
      return book_image4
      break;
    case 'book_image5.png':
      return book_image5
      break;
    default:
      return book_image1
      break;
  }
}

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
      display: 'none',
    },

    cardContainerFirstChild: {
      backgroundImage: "url(" + retImage(`${props.book.image}`) + ")", //"url(" + images[`${props.book.image}`].default + ")" `${props.book.image}`
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

const BookCard = (props) => {
  console.log('props.changeStatus ->' + props.changeStatus);
  console.log('props.myLibrary ->' + props.myLibrary);
  const classes = useStyles(props)();

  const [status] = useState(() => {
    return "finished";
  });

  const changeStatusOfBook = (parentFunction, bookParam) => {
    parentFunction(bookParam);
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
            data-testid={props.book.id}
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
        </Grid>
      </Grid>
    </Grid>
  );
};

BookCard.propTypes = {
  myLibrary: PropTypes.bool,
  changeStatus: PropTypes.bool,
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
  changeStatus: true
};

export default BookCard;
