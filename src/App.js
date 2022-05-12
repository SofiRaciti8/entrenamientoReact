// import React from "react";
// import { BrowserRouter } from "react-router-dom";
// import ViewsContainer from "./modules/Views";

// const App = () => (
//   <BrowserRouter>
//     <ViewsContainer />
//   </BrowserRouter>
// );

//export default App;

import React from "react"
import ContentContainer from "./components/ContentContainer"
import Title from "./components/Title"
import TopBar from "./components/TopBar"
import {BrowserRouter} from "react-router-dom"
import ViewsContainer from "./modules/Views"
import Theme from "./Theme"
import {ThemeStore} from "./contexts/ThemeStore"

const App = () => {
  return (
    <ThemeStore>
      <Theme>
        <TopBar />
        <ContentContainer>
          <Title>THEME SWITCHING WITH STYLED-COMPONENTS</Title>
          <BrowserRouter>
            <ViewsContainer />
          </BrowserRouter>
        </ContentContainer>
      </Theme>
    </ThemeStore>
  )
}

export default App
