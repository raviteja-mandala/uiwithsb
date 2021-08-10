import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import AddBookPage from "./pages/AddBookPage";
import ExplorePage from "./pages/ExplorePage";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/addBook">
            <AddBookPage />
          </Route>
          <Route exact path="/explore/:category">
            <ExplorePage />
          </Route>
          <Route path="/">
            <MainPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
