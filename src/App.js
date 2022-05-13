import React from "react"
import {BrowserRouter} from "react-router-dom"
import ViewsContainer from "./modules/Views"
import Theme from "./Theme"
import {ThemeStore} from "./contexts/ThemeStore"

const App = () => {
  return (
    <ThemeStore>
      <Theme>
        <BrowserRouter>
          <ViewsContainer />
        </BrowserRouter>
      </Theme>
    </ThemeStore>
  )
}

export default App
