import styled from "styled-components";

const TiTleDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: "Finger Paint", sans-serif;
    color: ${({ theme }) => theme.text};
  }
`;

const ProjectsContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bg};
  @media (max-width: 768px) {
    height: 100%;
  }
`;

const ProjectsDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 20px;


  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ProjectCard = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.bg};
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 10px;

  transform: scale(0.8);
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
    transition: transform 0.2s ease-in-out;
  }
  @media (max-width: 768px) {
    width: 80%;
  }
  h1 {
    font-family: "roboto", sans-serif;
    color: ${({ theme }) => theme.text};
    text-transform: uppercase;
  }
  p {
    font-family: "roboto", sans-serif;
    color: ${({ theme }) => theme.text};
    text-align: center;
  }
`;

const CustomButton = styled.button`
  width: 100%;
  height: 40px;
  border: none;
  outline: none;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.bg};
  font-family: "roboto", sans-serif;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
  }
`;

const ProjectImgDiv = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ProjectImage = styled.img`
  width: 60%;
  height: 100%;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export {
  TiTleDiv,
  ProjectsContainer,
  ProjectCard,
  ProjectsDiv,
  ProjectImgDiv,
  ProjectImage,
  CustomButton,
};
