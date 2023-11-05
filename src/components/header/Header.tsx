import { HeaderContainer } from "./Header.style";
import { NavItems } from "../navigation/NavItems";
import { useState, useEffect } from "react";

export const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, setPrevScrollPos, setVisible]);

  return (
    <HeaderContainer id="header" style={{ top: visible ? "0" : "-100px" }}>
      <div style={{ width: "fit-content" }}>
        <h1 style={{ fontFamily: "Finger Paint" }}>GP </h1>
      </div>
      <div>
        <NavItems />
      </div>
    </HeaderContainer>
  );
};

//
