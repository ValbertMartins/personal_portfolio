import { ThemeProvider } from "styled-components"
import Home from "./components/home"
import Header from "./components/header"
import Projects from "./components/projects"
import { Container } from "./styles/app"
import { GlobalStyles } from "./styles/global"
import { Light, Dark } from "./themes"
import Contact from "./components/contact"
import { Routes, Route } from "react-router-dom"
import AboutMe from "./components/about"
import { useState } from "react"

function App() {
  const [changeTheme, setChangeTheme] = useState(false)
  return (
    <ThemeProvider theme={changeTheme ? Dark : Light}>
      <Container>
        <GlobalStyles />
        <Header
          changeTheme={changeTheme}
          setChangeTheme={setChangeTheme}
        />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/about"
            element={<AboutMe />}
          />
          <Route
            path="/projects"
            element={<Projects />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
        </Routes>
      </Container>
    </ThemeProvider>
  )
}

export default App
