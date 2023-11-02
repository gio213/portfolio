type ColorScheme = {
  primary: string;
};

type Colors = {
  light: ColorScheme;
  dark: ColorScheme;
};

const colors: Colors = {
  light: {
    primary: "#fff",
  },
  dark: {
    primary: "#000",
  },
};

export default colors;
