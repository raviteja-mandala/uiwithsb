import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import theme from "../themes/theme";
import BlinkistHeader from "../components/organisms/BlinkistHeader";
import ExploreBooks from "../components/organisms/ExploreBooks";
import useWindowSize from "../components/organisms/useWindowSize";
import WindowContext from "../components/organisms/WindowContext";
import MainTemplate from "../components/templates/MainTemplate";

function ExplorePage() {
  const dimensions = useWindowSize({});
  console.log("width -->" + dimensions.width + "height-->" + dimensions.height);
  return (
    <React.Fragment>
      <WindowContext.Provider value={dimensions}>
        <ThemeProvider theme={theme}>
          <MainTemplate
            header={<BlinkistHeader />}
            body={<ExploreBooks />}
            dimensions={dimensions}
          ></MainTemplate>
        </ThemeProvider>
      </WindowContext.Provider>
    </React.Fragment>
  );
}

export default ExplorePage;
