import { ThemeProvider } from "styled-components"
import About from "./components/about"
import Home from "./components/home"
import Header from "./components/header"
import Projects from "./components/projects"
import { Container } from "./styles/app"
import { GlobalStyles } from "./styles/global"
import { Light } from "./themes/light"
import Contact from "./components/contact"

function App() {
  return (
    <ThemeProvider theme={Light}>
      <Container>
        <GlobalStyles />
        <Header />
        <Home />
        <About />
        <Projects />
        <Contact />
      </Container>
    </ThemeProvider>
  )
}

export default App
