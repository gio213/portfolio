import { FooterContainer } from "./Footer.style";
import gitHubIcon from "../../assets/github-icon.png";
import linkeDinIcon from "../../assets/linkedin-icon.png";
import emailIcon from "../../assets/icons8-email-48.png";
export const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <a href="mailto:gio.patsia@gmail.com">
          <img src={emailIcon} alt="email" />
        </a>
        <a
          href="
          https://www.linkedin.com/in/giorgi-patsia/"
          target="_blank"
        >
          <img src={linkeDinIcon} alt="linkedin" />
        </a>
        <a href="https://github.com/gio213" target="_blank">
          <img src={gitHubIcon} alt="github" />
        </a>
      </div>
    </FooterContainer>
  );
};
