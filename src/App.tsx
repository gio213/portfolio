import "./App.css";
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import { AboutMe } from "./components/aboutMe/AboutMe";
const App = () => {
  return (
    <div>
      <Header />
      <Main />
      <AboutMe />
    </div>
  );
};

export default App;
