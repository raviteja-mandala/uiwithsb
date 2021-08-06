import { Box, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { useParams } from "react-router-dom";
import BookCard from "./BookCard";
import useBooksAxios from "./useBooksAxios";

const useStyles = makeStyles(() => ({
  container: {
    marginTop: 10,
    flex: 1,
  },
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
  blinkistbody: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
}));

function ExploreBooks() {
  const url = "http://localhost:3000";
  const [bookContext, setBookContext] = useBooksAxios(
    url + "/userBooks",
    "get"
  );
  const bookArray = useBooksAxios(
    url + "/books",
    "get"
  );
  const { category } = useParams();
  const classes = useStyles();
  const addBookToLibrary = (bk) => {
    fetch("http://localhost:3000/userBooks", {
      method: "POST",
      body: JSON.stringify({ ...bk, status: "currentlyReading" }),
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        const localBookArray = [...bookContext];
        localBookArray.push(bk);
        setBookContext(localBookArray);
      })
      .catch((err) => console.log(err));
  };console.log('34x-->'+bookContext);
  const userBooks = bookContext.map((book) => book.id);
  console.log('57x-->'+userBooks+'cat '+category);
  return bookArray[3] ? (
    <p>loading...</p>
  ) : bookArray[0] !== null ? (
    <Box className={classes.blinkistbody}>
      <Box className={classes.secondSection}>All Books</Box>
      <Grid container className={classes.container}>
        {bookArray[0].map((book) => {
          if (book.category === category) {
            return (
              <Grid item xs={4}>
                <BookCard 
                  book={book}
                  onaddtolibrary={(bk) => {
                    addBookToLibrary(bk);
                  }}
                  myLibrary={userBooks.includes(book.id) ? true : false}
                  changeStatus={false}
                ></BookCard>
              </Grid>
            );
          }
        })}
      </Grid>
    </Box>
  ) : (
    bookArray[2]
  );
}

export default ExploreBooks;
