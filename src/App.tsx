import { ThemeProvider } from "styled-components"
import { lazy, Suspense } from "react"
import Home from "./components/home"
import Header from "./components/header"
import { Container } from "./styles/app"
import { GlobalStyles } from "./styles/global"
import { Light, Dark } from "./themes"
import Contact from "./components/contact"
import { Routes, Route } from "react-router-dom"
import AboutMe from "./components/about"
import { useState } from "react"
const Projects = lazy(() => import("./components/projects"))

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
            element={
              <Suspense fallback={<></>}>
                <Projects />
              </Suspense>
            }
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
