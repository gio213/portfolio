import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  background-color: ${({ theme }) => theme.bg};
  box-shadow: ${({ theme }) => theme.boxShadow};
  color: ${({ theme }) => theme.text};
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  position: fixed;
  top: 0;
  z-index: 100;
  transition: all 0.2s ease-in-out;
`;

export { HeaderContainer };
