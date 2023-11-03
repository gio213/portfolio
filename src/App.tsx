import "./App.css";
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import { AboutMe } from "./components/aboutMe/AboutMe";
import { Projects } from "./components/projects/Projects";
import { Footer } from "./components/footer/Footer";
const App = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: "10rem",
        }}
      >
        <Header />
        <Main />
        <AboutMe />
        <Projects />
        <Footer />
      </div>
    </div>
  );
};

export default App;
