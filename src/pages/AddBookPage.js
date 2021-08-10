import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import AddBook from "../components/organisms/AddBook";
import BlinkistHeader from "../components/organisms/BlinkistHeader";
import useWindowSize from "../components/organisms/useWindowSize";
import WindowContext from "../components/organisms/WindowContext";
import MainTemplate from "../components/templates/MainTemplate";
import theme from "../themes/theme";

function AddBookPage() {
  const dimensions = useWindowSize({});
  console.log("width -->" + dimensions.width + "height-->" + dimensions.height);
  return (
    <React.Fragment>
      <WindowContext.Provider value={dimensions}>
        <ThemeProvider theme={theme}>
          <MainTemplate
            header={<BlinkistHeader />}
            body={<AddBook />}
            dimensions={dimensions}
          ></MainTemplate>
        </ThemeProvider>
      </WindowContext.Provider>
    </React.Fragment>
  );
}

export default AddBookPage;
