import styled from "styled-components";

const FooterContainer = styled.div`
  width: 100%;
  height: 100px;
  background-color: #444f5a;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 1rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(1);
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.2);
    transition: all 0.3s ease-in-out;
  }
`;

export { FooterContainer, Icon };
