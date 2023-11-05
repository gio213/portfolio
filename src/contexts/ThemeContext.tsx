import {
  useContext,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

const themeContext = createContext({} as IProps);

interface IProps {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}

const ThemeContext = () => {
  return useContext(themeContext);
};

const ThemeProvider = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  const [theme, setTheme] = useState("light");

  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      {children}
    </themeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
