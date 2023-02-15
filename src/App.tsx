import { ThemeProvider } from "styled-components"
import Technologies from "./components/technologies"
import Home from "./components/home"
import Header from "./components/header"
import Projects from "./components/projects"
import { Container } from "./styles/app"
import { GlobalStyles } from "./styles/global"
import { Light } from "./themes/light"
import Contact from "./components/contact"
import { Routes, Route } from "react-router-dom"
import AboutMe from "./components/about"

function App() {
  return (
    <ThemeProvider theme={Light}>
      <Container>
        <GlobalStyles />
        <Header />
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
