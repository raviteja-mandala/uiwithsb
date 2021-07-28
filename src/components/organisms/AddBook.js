import { Box, Button, Grid, makeStyles, TextField } from "@material-ui/core";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  formContainer: {
    marginTop: 100,
    marginLeft: 300,
    width: 500,
    backgroundColor: "oldlace",
    paddingLeft: 30,
    paddingTop: 20,
    borderWeight: 50,
  },

  submitErrorMessage: {
    width: "100%",
    fontSize: 25,
    fontWeight: 200,
    textAlign: "right",
    color: "red",
    marginBottom: 10,
    marginRight: 10,
  },

  successMessage: {
    width: "100%",
    fontSize: 25,
    fontWeight: 200,
    textAlign: "right",
    color: "green",
    marginBottom: 10,
    marginRight: 10,
  },

  headerTitle: {
    fontSize: 40,
    fontWeight: 500,
    paddingRight: 30,
    paddingBottom: 10,
    textAlign: "right",
    color: "purple",
  },
}));

function AddBook() {
  const classes = useStyles();
  const [input, setInput] = useState(() => {
    return { bookTitle: "", bookAuthor: "", category: "" };
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(null);

  const validateForm = (userInput) => {
    let localErrors = {};

    console.log("inside error1" + JSON.stringify(userInput));
    if (userInput.hasOwnProperty("bookTitle")) {
      console.log(
        userInput.bookTitle.length + "inside error6" + userInput.bookTitle
      );
      const bookTitleErrors = [];
      if (userInput.bookTitle.length < 3) {
        bookTitleErrors.push("Length is not sufficient.");
      }
      for (const c of userInput.bookTitle) {
        if (!/[a-zA-Z]/.test(c)) {
          bookTitleErrors.push("Title should contain only alphabets.");
          break;
        }
      }
      if (bookTitleErrors.length > 0) {
        localErrors = { ...errors };
        if (localErrors.hasOwnProperty("submitError")) {
          delete localErrors.submitError;
        }
        if (localErrors.hasOwnProperty("bookTitle")) {
          delete localErrors.bookTitle;
        }
        setErrors({ ...localErrors, bookTitle: bookTitleErrors });
      } else {
        if (localErrors.hasOwnProperty("bookTitle")) {
          delete localErrors.bookTitle;
        }
        if (localErrors.hasOwnProperty("submitError")) {
          delete localErrors.submitError;
        }
        setErrors({ ...localErrors });
      }
    }

    if (userInput.hasOwnProperty("bookAuthor")) {
      const bookAuthorErrors = [];
      for (const c of userInput.bookAuthor) {
        if (!/[a-zA-Z]/.test(c)) {
          bookAuthorErrors.push("Author name should contain only alphabets.");
          break;
        }
      }
      if (bookAuthorErrors.length > 0) {
        localErrors = { ...errors };
        if (localErrors.hasOwnProperty("submitError")) {
          delete localErrors.submitError;
        }
        if (localErrors.hasOwnProperty("bookAuthor")) {
          delete localErrors.bookAuthor;
        }
        setErrors({ ...localErrors, bookAuthor: bookAuthorErrors });
      } else {
        if (localErrors.hasOwnProperty("submitError")) {
          delete localErrors.submitError;
        }
        if (localErrors.hasOwnProperty("bookAuthor")) {
          delete localErrors.bookAuthor;
        }
        setErrors({ ...localErrors });
      }
    }
  };

  const handleSubmit = (e) => {
    let requiredFieldsNotEmpty = true;
    console.log(JSON.stringify(input) + "456");
    for (const k in input) {
      if (input[k].length == 0) {
        requiredFieldsNotEmpty = false;
        break;
      }
    }
    if (requiredFieldsNotEmpty && Object.keys(errors).length === 0) {
      let maxBookId = 0;
      const bookIds = [];

      fetch("http://localhost:3000/books")
        .then((response) => response.json())
        .then((data) => {
          data.map((book) => {
            bookIds.push(book.id);
          });
          maxBookId = Math.max(...bookIds) + 1;
          console.log("bids" + bookIds);
          console.log("maxBookId" + maxBookId);
        })
        .then(
          fetch("http://localhost:3000/books", {
            method: "POST",
            body: JSON.stringify({
              id: maxBookId,
              ...input,
              min: 20,
              reads: "0.7k",
              image: "book_image1.png",
            }),
            headers: {
              Accept: "application/json",
              "Content-type": "application/json",
            },
          })
            .then((response) => response.json())
            .then((json) => {
              console.log(json);
              setSuccess(
                "Book with title " +
                  input.bookTitle +
                  " is successfully created!"
              );
              setInput({ bookTitle: "", bookAuthor: "", category: "" });
            })
            .catch((err) => console.log(err))
        );
    } else {
      setSuccess(null);
      setErrors({
        ...errors,
        submitError: "Form cannot be submitted with errors!.",
      });
    }
  };

  const handleChange = (e) => {
    let localInput = {};
    const attrName = e.target.name;
    const attrValue = e.target.value;
    localInput = { [attrName]: attrValue };
    setSuccess(null);
    setInput({ ...input, [attrName]: attrValue });
    validateForm(localInput);
    console.log(errors);
  };

  return (
    <form>
      <Box className={classes.formContainer} border={2}>
        <Box className={classes.headerTitle}>ADD BOOK</Box>
        <Box className={classes.submitErrorMessage}>{errors.submitError}</Box>
        <Box className={classes.successMessage}>{success}</Box>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <TextField
              error={"bookTitle" in errors}
              required
              id="outlined-helperText"
              name="bookTitle"
              label="Book Title"
              value={input.bookTitle}
              helperText={errors.bookTitle}
              variant="outlined"
              onChange={handleChange}
            />
          </Grid>
          <Grid item>
            <TextField
              required
              id="outlined-helperText"
              label="Author"
              name="bookAuthor"
              variant="outlined"
              value={input.bookAuthor}
              helperText={errors.bookAuthor}
              error={"bookAuthor" in errors}
              onChange={handleChange}
            />
          </Grid>
          <Grid item>
            <TextField
              required
              id="outlined-helperText"
              label="Category"
              name="category"
              value={input.category}
              variant="outlined"
              onChange={handleChange}
            />
          </Grid>
          <Grid item>
            <Button color="primary" variant="contained" onClick={handleSubmit}>
              ADD BOOK
            </Button>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
}

export default AddBook;
