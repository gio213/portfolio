import styled from "styled-components";

const AboutMeContainer = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding-top: 5rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const AboutMeLeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;
  width: 50%;
  height: 100%;
  p {
    font-family: "Roboto", sans-serif;
  }
  h1 {
    font-family: "Finger Paint", sans-serif;

    margin-bottom: 0.8rem;
    line-height: 1;
    color: #444f5a;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CustomSpan = styled.span`
  width: 50%;
  p {
    opacity: 0.5;
    transform: translateZ(0);
  }
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;

  h1 {
    font-family: "Finger Paint", sans-serif;

    color: #444f5a;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CustomIcon = styled.img`
  width: 40px;
  height: 40px;
  transform: translateZ(0);
  transition: all 0.5s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

const ImgTittle = styled.div`
  width: 30%;
  height: 15%;
  align-items: center;
  display: flex;
  justify-content: flex-start;
  gap: 0.5rem;

  p {
    font-family: "Roboto", sans-serif;
    font-style: italic;
  }

  @media (max-width: 768px) {
    p {
      font-size: 0.5rem;
    }
  }
`;

const SkilssDiv = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    justify-content: center;
    gap: 0.5rem;
  }
`;

export {
  AboutMeContainer,
  AboutMeLeftDiv,
  SkillsContainer,
  CustomIcon,
  ImgTittle,
  SkilssDiv,
  CustomSpan,
};
