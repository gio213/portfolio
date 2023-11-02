import styled from "styled-components";
import colors from "../../colors/colors.js";
const HeaderContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  background-color: ${colors.light.primary};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  align-items: center;
  justify-content: space-between;
`;

export { HeaderContainer };
