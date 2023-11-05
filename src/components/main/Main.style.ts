import styled from "styled-components";
import myImg from "../../assets/giorgi.jpeg";
const MainContainer = styled.main`
  width: 100%;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 5rem;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  @media (max-width: 768px) {
    flex-direction: column;
    height: 100%;
  }
`;

const MyImgDiv = styled.div`
  -webkit-animation: morph 8s ease-in-out infinite;
  animation: morph 8s ease-in-out infinite;
  background-image: url(${myImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center; /* Center the background image */
  border: 3px solid #2d2e32;
  border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
  position: relative;
  transition: all 1s ease-in-out;
  width: 18rem;
  height: 20rem;
  position: relative;

  -webkit-animation: morph 8s ease-in-out infinite;
  object-fit: contain;

  @keyframes morph {
    0% {
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }
    50% {
      border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
    }
    100% {
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }
  }
`;

const MainLeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 50%;
  height: 100%;
  p {
    font-size: 2rem;
    font-family: "Roboto", sans-serif;
    color: ${({ theme }) => theme.animatedCursorColor};
  }
  h1 {
    font-family: "Finger Paint", sans-serif;
    font-size: 3.5rem;
    margin-bottom: 0.8rem;
    line-height: 1;
    color: #444f5a;
    color: ${({ theme }) => theme.text};
  }
  h2 {
    font-family: "Roboto", sans-serif;
    color: ${({ theme }) => theme.text};
  }
`;

const TypedCursor = styled.span`
  font-size: 2rem;
  color: green;
  animation: blink 0.7s infinite;

  @keyframes blink {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.7;
    }
    100% {
      opacity: 0;
    }
  }
`;

const CustomP = styled.p`
  font-family: "monospace";
  color: #444f5a;
`;

const SocialLinks = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`;

const Cicon = styled.img`
  width: 30px;
  height: 30px;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: scale(1.2);

    fill: #0564bd;
  }
`;

export {
  MainContainer,
  MyImgDiv,
  MainLeftDiv,
  TypedCursor,
  CustomP,
  SocialLinks,
  Cicon,
};
