import { HeaderContainer } from "./Header.style";
import { NavItems } from "../navigation/NavItems";

export const Header = () => {
  return (
    <div>
      <HeaderContainer>
        <div>
          <h1>Giorgi Patsia</h1>
        </div>
        <NavItems />
      </HeaderContainer>
    </div>
  );
};
