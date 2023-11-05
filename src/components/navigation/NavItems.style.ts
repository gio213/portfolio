import styled from "styled-components";
import colors from "../../colors/colors";

const NavItemsDiv = styled.div`
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 0 4rem;
  color: ${({ theme }) => theme.text};
  a {
    color: ${({ theme }) => theme.text};
  }
`;

const NavAhref = styled.a`
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  position: relative;
  color: ${colors.dark.primary};

  &::before {
    content: "";
    width: 0;
    height: 2px;
    background-color: #0564bd;
    position: absolute;
    bottom: 0;
    transform-origin: left;
    transition: width 0.3s ease-in-out;
  }

  &:hover::before {
    width: 100%;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavThemeIcon = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(1);
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.2);
    transition: all 0.3s ease-in-out;
  }
`;

const BurgerDiv = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
    margin-right: 2rem;
  }
`;

const BurgerIconStyle = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(1);
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.2);
    transition: all 0.3s ease-in-out;
  }
`;

const ExtendedNavItemsDiv = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.bg};
  box-shadow: ${({ theme }) => theme.boxShadow};
  position: absolute;
  gap: 2rem;
  top: 85px;
  left: 0;

  @media (min-width: 768px) {
    display: none;
  }
`;

const ExtendedNavAhref = styled.a`
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  transition: all 0.3s ease-in-out;
  border-radius: 5px;
  padding: 0.5rem;
  transform: scale(1);
  color: ${({ theme }) => theme.text};
  &:hover {
    background-color: ${({ theme }) => theme.typeCursorColor};
    transition: all 0.3s ease-in-out;
    transform: scale(1.1);
  }
`;

export {
  NavItemsDiv,
  NavAhref,
  NavThemeIcon,
  BurgerDiv,
  BurgerIconStyle,
  ExtendedNavItemsDiv,
  ExtendedNavAhref,
};
