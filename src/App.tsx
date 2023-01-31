import { ThemeProvider } from "styled-components"
import Home from "./components/home"
import Stacks from "./components/stacks"
import { Container } from "./styles/app"
import { GlobalStyles } from "./styles/global"
import { Light } from "./themes/light"

function App() {
  return (
    <ThemeProvider theme={Light}>
      <Container>
        <GlobalStyles />
        <Home />
        <Stacks />
      </Container>
    </ThemeProvider>
  )
}

export default App
