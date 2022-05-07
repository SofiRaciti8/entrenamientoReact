import React from "react";
import { BrowserRouter } from "react-router-dom";
import ViewsContainer from "./modules/Views";

const App = () => (
  <BrowserRouter>
    <ViewsContainer />
  </BrowserRouter>
);

export default App;

