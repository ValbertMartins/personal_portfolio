import { ThemeProvider } from "styled-components"
import About from "./components/about"
import Home from "./components/home"
import Navbar from "./components/navbar"
import Stacks from "./components/stacks"
import { Container } from "./styles/app"
import { GlobalStyles } from "./styles/global"
import { Light } from "./themes/light"

function App() {
  return (
    <ThemeProvider theme={Light}>
      <Container>
        <GlobalStyles />
        <Navbar />
        <Home />
        <Stacks />
        <About />
      </Container>
    </ThemeProvider>
  )
}

export default App
