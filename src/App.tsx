import "./App.css";
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import { AboutMe } from "./components/aboutMe/AboutMe";
import { Projects } from "./components/projects/Projects";
import { Footer } from "./components/footer/Footer";
import { ThemeProvider } from "styled-components";
import { ThemeContext } from "./contexts/ThemeContext";
const App = () => {
  const { theme: themeColor } = ThemeContext();

  const theme: {
    [key: string]: {
      bg: string;
      text: string;
      boxShadow: string;
      typeCursorColor: string;
      animatedCursorColor: string;
    };
  } = {
    light: {
      bg: "#fff",
      text: "#444f5a",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      typeCursorColor: "lightblue",
      animatedCursorColor: "#000",
    },
    dark: {
      bg: "#202124",
      text: "#8AB4F7",
      boxShadow: "inset 0 -2px 0 0 #2d2e32",
      typeCursorColor: "#0564bd",
      animatedCursorColor: "#8AB4F7",
    },
  };
  //##202124
  //#8AB4F7
  return (
    <ThemeProvider theme={theme[themeColor]}>
      <div>
        <Header />
        <Main />
        <AboutMe />
        <Projects />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
