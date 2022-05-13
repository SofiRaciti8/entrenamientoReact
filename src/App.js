import React from "react"
import {BrowserRouter} from "react-router-dom"
import ViewsContainer from "./modules/Views"
import Theme from "./Theme"
import {ThemeStore} from "./contexts/ThemeStore"
import AppStore from "./contexts/AppStore"

const App = () => (
  <AppStore>
    <ThemeStore>
      <Theme>
        <BrowserRouter>
          <ViewsContainer />
        </BrowserRouter>
      </Theme>
    </ThemeStore>
  </AppStore>
)

export default App
