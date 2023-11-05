import { MainContainer } from "./Main.style";
import { MainLeftDiv } from "./Main.style";
import { MyImgDiv } from "./Main.style";
import { TypedCursor } from "./Main.style";
import { useState, useEffect } from "react";
import { CustomP } from "./Main.style";
import exmailIcon from "../../assets/icons8-email-48.png";
import github from "../../assets/github-icon.png";
import linkeDinIcon from "../../assets/linkedin-icon.png";
import { SocialLinks } from "./Main.style";
import { Cicon } from "./Main.style";
export const Main = () => {
  const texts = [
    "I am a full-stack web developer",
    "I build web applications",
    "I solve problems",
  ];
  const [textIndex, setTextIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isDeleting) {
        setText((prev) => prev.slice(0, -1));
      } else {
        setText((prev) => texts[textIndex].slice(0, prev.length + 1));
      }
    }, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting]);
  useEffect(() => {
    if (!isDeleting && text === texts[textIndex]) {
      setTimeout(() => setIsDeleting(true), 500);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    }
  }, [text, isDeleting]);

  return (
    <MainContainer id="main">
      <MainLeftDiv>
        <p>Hello! 👋 My name is</p>
        <h1>Giorgi Patsia</h1>

        <CustomP>
          {" "}
          {text}
          <TypedCursor>|</TypedCursor>
        </CustomP>
        <SocialLinks>
          <a href="mailto:gio.patsia@gmail.com">
            <Cicon src={exmailIcon} alt="email" />
          </a>
          <a
            href="
          https://www.linkedin.com/in/giorgi-patsia/"
            target="_blank"
          >
            <Cicon src={linkeDinIcon} alt="linkedin" />
          </a>
          <a href="https://github.com/gio213" target="_blank">
            <Cicon src={github} alt="github" />
          </a>
        </SocialLinks>
      </MainLeftDiv>

      <MyImgDiv />
    </MainContainer>
  );
};
