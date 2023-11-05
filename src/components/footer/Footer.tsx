import { FooterContainer } from "./Footer.style";
import gitHubIcon from "../../assets/github-icon.png";
import linkeDinIcon from "../../assets/linkedin-icon.png";
import emailIcon from "../../assets/email-icon.png";
import { Icon } from "./Footer.style";
export const Footer = () => {
  return (
    <FooterContainer id="footer">
      <div>
        <a href="mailto:gio.patsia@gmail.com">
          <Icon src={emailIcon} alt="email" />
        </a>
        <a
          href="
          https://www.linkedin.com/in/giorgi-patsia/"
          target="_blank"
        >
          <Icon src={linkeDinIcon} alt="linkedin" />
        </a>
        <a href="https://github.com/gio213" target="_blank">
          <Icon src={gitHubIcon} alt="github" />
        </a>
      </div>
    </FooterContainer>
  );
};
