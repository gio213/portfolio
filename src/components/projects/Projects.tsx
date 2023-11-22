import { TiTleDiv } from "./Projects.style";
import { useState, useEffect } from "react";
import { ProjectsContainer } from "./Projects.style";
import { ProjectCard } from "./Projects.style";
import { ProjectsDiv } from "./Projects.style";
import { ProjectImage } from "./Projects.style";
import { ProjectImgDiv } from "./Projects.style";
import { CustomButton } from "./Projects.style";
interface ProjectData {
  name: string;
  data: Array<ProjectData>;
  desciption: string;
  images: Array<string>;
  url: string;
  projectName: Array<string>;
}
export const Projects: React.FC = () => {
  const scraperApiKey = "pk_59bb0839cc0fa9434896843ae5fe88faee75c033";
  const [projectData, setProjectData] = useState<ProjectData[]>([]);

  const projectUrls = {
    lifebook: `https://jsonlink.io/api/extract?url=https://lifebook-frontend.vercel.app/&api_key=${scraperApiKey}`,
    todoapp: `https://jsonlink.io/api/extract?url=https://to-do-app-ivory-nu.vercel.app/&api_key=${scraperApiKey}`,
    weatherApp: `https://jsonlink.io/api/extract?url=https://gio213.github.io/weather-app//&api_key=${scraperApiKey}`,
    mealsRecipe: `https://jsonlink.io/api/extract?url=https://gio213.github.io/Meals-Recipes-Finder/&api_key=${scraperApiKey}`,
    tests: `https://jsonlink.io/api/extract?url=https://gio213.github.io/Tests/&api_key=${scraperApiKey}`,
  };

  useEffect(() => {
    async function fetchProjectData() {
      const projectDataArray: ProjectData[] = [];

      for (const projectName in projectUrls) {
        const url = projectUrls[projectName];
        try {
          const response = await fetch(url);
          if (response.ok) {
            const projectData = await response.json();
            projectDataArray.push({ name: projectName, data: projectData });
          } else {
            console.error(`Failed to fetch data for ${projectName}`);
          }
        } catch (error) {
          console.error(`Error fetching data for ${projectName}: ${error}`);
        }
      }

      setProjectData(projectDataArray);
    }

    fetchProjectData();
  }, []);

  return (
    <ProjectsContainer id="projects">
      <TiTleDiv>
        <h1>Projects</h1>
      </TiTleDiv>
      <ProjectsDiv>
        {projectData?.map((project) => (
          <ProjectCard key={project.name}>
            <h1> {project.name}</h1>
            <ProjectImgDiv>
              <ProjectImage src={project.data.images[0]} />
            </ProjectImgDiv>

            <p>{project.data.description}</p>
            <a href={project.data.url} target="_blank">
              <CustomButton>Live preview</CustomButton>
            </a>
          </ProjectCard>
        ))}
      </ProjectsDiv>
    </ProjectsContainer>
  );
};
