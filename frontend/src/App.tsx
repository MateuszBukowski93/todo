import { ThemeProvider } from "styled-components";
import GlobalStyle from "./theme/Global";
import { mainTheme } from "./theme/mainTheme";
import MobXContext from "./store/MobXContext";
import ToDoStore from "./store/ToDoStore";
import Routes from "./routes/Routes";

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <MobXContext.Provider value={ToDoStore}>
        <GlobalStyle />
        <Routes />
      </MobXContext.Provider>
    </ThemeProvider>
  );
}

export default App;
