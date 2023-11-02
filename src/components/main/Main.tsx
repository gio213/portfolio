import { MainContainer } from "./Main.style";
import { MainLeftDiv } from "./Main.style";
import { MyImgDiv } from "./Main.style";
import { TypedCursor } from "./Main.style";
import { useState, useEffect } from "react";
import { CustomP } from "./Main.style";
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
    <MainContainer>
      <MainLeftDiv>
        <p>Hello! 👋 My name is</p>
        <h1>Giorgi Patsia</h1>

        <CustomP>
          {" "}
          {text}
          <TypedCursor>|</TypedCursor>
        </CustomP>
      </MainLeftDiv>

      <MyImgDiv />
    </MainContainer>
  );
};
