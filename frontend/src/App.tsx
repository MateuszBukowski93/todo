import { ThemeProvider } from "styled-components";
import GlobalStyle from "./theme/Global";
import { mainTheme } from "./theme/mainTheme";
import Routes from "./routes/Routes";

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
