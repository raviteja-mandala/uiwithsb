import {
  Box,
  Grid,
  InputAdornment,
  makeStyles,
  TextField,
  Typography
} from "@material-ui/core";
import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import useBooksAxios from "./useBooksAxios";

const useStyles = makeStyles((theme) => ({
  inputText: {
    width: "100%",
  },

  closeIcon: {
    cursor: "pointer",
  },

  bookTitle: {
    fontSize: 16,
    color: "#03314b",
    fontWeight: 700,
    display: "inline-block",
  },

  bookAuthor: {
    fontSize: 14,
    color: "#6d787e",
    fontWeight: 400,
    display: "inline-block",
  },

  bookDetails: {
    margin: "8px 5px",
  },
}));

function SearchBox(props) {
  const classes = useStyles();
  const url = "http://localhost:3000/books";
  const [bookArray, setBookArray, error, loading] = useBooksAxios(url, "get");
  const [input, setInput] = useState("");
  const a = props.onsearchclose;

  const handleChange = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };
  return (
    <div>
      <Grid container direction="column">
        <Grid item className={classes.inputText}>
          <TextField
            className={classes.inputText}
            onChange={handleChange}
            placeholder="Search for titles and authors"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {" "}
                  <MdClose
                    className={classes.closeIcon}
                    onClick={() => {
                      a();
                    }}
                  ></MdClose>{" "}
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item container direction="column">
          {bookArray.map((book) => {
            if (
              input &&
              (book.bookTitle.toLowerCase().includes(input.toLowerCase()) ||
                book.bookAuthor.toLowerCase().includes(input.toLowerCase()))
            ) {
              return (
                <Grid item className={classes.bookDetails}>
                  <Box borderBottom={1}>
                    <Typography className={classes.bookTitle}>
                      {book.bookTitle}
                    </Typography>
                    <Typography className={classes.bookAuthor}>
                      {" "}
                      &nbsp; by &nbsp; {book.bookAuthor}
                    </Typography>
                  </Box>
                </Grid>
              );
            }
          })}
        </Grid>
      </Grid>
    </div>
  );
}

export default SearchBox;
