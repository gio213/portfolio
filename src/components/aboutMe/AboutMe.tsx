import { AboutMeContainer } from "./AboutMe.style";
import { AboutMeLeftDiv } from "./AboutMe.style";
import { SkillsContainer } from "./AboutMe.style";
import { ImgTittle } from "./AboutMe.style";
import { CustomIcon } from "./AboutMe.style";
import htmlicon from "../../assets/html-icon.png";
import cssIcons from "../../assets/css-icon.png";
import jsIcon from "../../assets/javascript-icon.png";
import sasIcon from "../../assets/SASS-icon.png";
import reactIcon from "../../assets/react-icon.png";
import nextJsIcon from "../../assets/nextjs-icon.png";
import tyoeScriptIcon from "../../assets/typescript-icom.png";
import expressIcon from "../../assets/express-icon.png";
import nodeIcon from "../../assets/nodejs-icon.png";
import gitIcon from "../../assets/git-icon.png";
import steledIcon from "../../assets/styled-components-icon.png";
import { SkilssDiv } from "./AboutMe.style";
import { CustomSpan } from "./AboutMe.style";
import mysqlIcon from "../../assets/mysql-icon.png";
import mongoIcon from "../../assets/mongo-icon.png";
import postGreIcon from "../../assets/postgre-icon.png";
import bootStrapIcon from "../../assets/Bootstrap-icon.png";

export const AboutMe = () => {
  return (
    <AboutMeContainer id="about">
      <AboutMeLeftDiv>
        <h1>About Me</h1>

        <CustomSpan>
          <p>
            I'm a highly motivated full-stack web developer, recently graduated
            from Becode. I have a strong passion for tackling complex problems
            and a knack for creative thinking. As a problem-solver, I thrive on
            challenges and enjoy working collaboratively as part of a team. I'm
            constantly eager to expand my knowledge and skill set. I'm actively
            seeking a role where I can contribute my expertise to drive a
            company's growth and success.
          </p>
        </CustomSpan>
      </AboutMeLeftDiv>
      <SkillsContainer>
        <h1>Skills</h1>
        <SkilssDiv>
          <ImgTittle>
            <CustomIcon src={htmlicon} alt="html icon" />
            <p>HTML</p>
          </ImgTittle>
          <ImgTittle>
            <CustomIcon src={cssIcons} alt="css icon" />
            <p>CSS</p>
          </ImgTittle>
          <ImgTittle>
            <CustomIcon src={jsIcon} alt="javascript icon" />
            <p>JavaScript</p>
          </ImgTittle>
          <ImgTittle>
            <CustomIcon src={sasIcon} alt="sass icon" />
            <p>SASS</p>
          </ImgTittle>
          <ImgTittle>
            <CustomIcon src={reactIcon} alt="react icon" />
            <p>React</p>
          </ImgTittle>
          <ImgTittle>
            <CustomIcon src={nextJsIcon} alt="nextjs icon" />
            <p>NextJS</p>
          </ImgTittle>
          <ImgTittle>
            <CustomIcon src={tyoeScriptIcon} alt="typescript icon" />
            <p>TypeScript</p>
          </ImgTittle>
          <ImgTittle>
            <CustomIcon src={expressIcon} alt="express icon" />
            <p>Express</p>
          </ImgTittle>
          <ImgTittle>
            <CustomIcon src={nodeIcon} alt="nodejs icon" />
            <p>NodeJS</p>
          </ImgTittle>
          <ImgTittle>
            <CustomIcon src={gitIcon} alt="git icon" />
            <p>Git</p>
          </ImgTittle>
          <ImgTittle>
            <CustomIcon src={steledIcon} alt="styled components icon" />
            <p>Styled </p>
          </ImgTittle>
          <ImgTittle>
            <CustomIcon src={mysqlIcon} alt="mysql icon" />
            <p>MySQL</p>
          </ImgTittle>
          <ImgTittle>
            <CustomIcon src={mongoIcon} alt="mongo icon" />
            <p>MongoDB</p>
          </ImgTittle>
          <ImgTittle>
            <CustomIcon src={postGreIcon} alt="postgre icon" />
            <p>PostgreSQL</p>
          </ImgTittle>
          <ImgTittle>
            <CustomIcon src={bootStrapIcon} alt="bootstrap icon" />
            <p>Bootstrap</p>
          </ImgTittle>
        </SkilssDiv>
      </SkillsContainer>
    </AboutMeContainer>
  );
};
