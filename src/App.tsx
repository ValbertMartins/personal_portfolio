import { ThemeProvider } from "styled-components"
import { lazy, Suspense } from "react"
import Home from "./components/home"
import Header from "./components/header"
import { Container } from "./styles/app"
import { GlobalStyles } from "./styles/global"
import { Light, Dark } from "./themes"
import { Routes, Route } from "react-router-dom"
import { useState } from "react"
const AboutMe = lazy(() => import("./components/about"))
const Projects = lazy(() => import("./components/projects"))
const Contact = lazy(() => import("./components/contact"))

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
            element={
              <Suspense fallback={<></>}>
                <AboutMe />
              </Suspense>
            }
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
            element={
              <Suspense fallback={<></>}>
                <Contact />
              </Suspense>
            }
          />
        </Routes>
      </Container>
    </ThemeProvider>
  )
}

export default App
