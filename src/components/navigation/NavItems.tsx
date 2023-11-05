import { NavItemsDiv } from "./NavItems.style";
import { NavAhref } from "./NavItems.style";
import moonIcon from "../../assets/moon-icon.png";
import sunIcon from "../../assets/sun-icon.png";
import { useState } from "react";
import { NavThemeIcon } from "./NavItems.style";
import burgerIcon from "../../assets/burger-icon.png";
import { BurgerDiv } from "../navigation/NavItems.style";
import { BurgerIconStyle } from "./NavItems.style";
import { ExtendedNavItemsDiv } from "./NavItems.style";
import { ExtendedNavAhref } from "./NavItems.style";
import closeIcon from "../../assets/close-icon.png";
import { ThemeContext } from "../../contexts/ThemeContext";

export const NavItems = () => {
  const [checked, setChecked] = useState(false);
  const [burger, setBurger] = useState(false);

  const { theme, setTheme } = ThemeContext();

  const handleClick = () => {
    setChecked(!checked);
    const themeColor = theme === "light" ? "dark" : "light";
    setTheme(themeColor);
  };

  const handleBurger = () => {
    setBurger(!burger);
  };

  return (
    <NavItemsDiv>
      {checked ? (
        <NavThemeIcon src={sunIcon} alt="sun-icon" onClick={handleClick} />
      ) : (
        <NavThemeIcon src={moonIcon} alt="moon-icon" onClick={handleClick} />
      )}

      <NavAhref href="#header">Home</NavAhref>
      <NavAhref href="#about">About</NavAhref>
      <NavAhref href="#projects">Projects</NavAhref>
      <BurgerDiv>
        <BurgerIconStyle
          src={burger ? closeIcon : burgerIcon}
          alt="burger icons"
          onClick={handleBurger}
        />
      </BurgerDiv>
      {burger ? (
        <ExtendedNavItemsDiv>
          <ExtendedNavAhref href="#header">Home</ExtendedNavAhref>
          <ExtendedNavAhref href="#about">About</ExtendedNavAhref>
          <ExtendedNavAhref href="#projects">Projects</ExtendedNavAhref>
        </ExtendedNavItemsDiv>
      ) : null}
    </NavItemsDiv>
  );
};
