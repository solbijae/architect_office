import useFetchData from 'hooks/useFetchData';
import { Project } from 'types/project';

import {
  ProjectsContainer,
  ProjectWrap,
  ImageWrap,
  Image,
  InfoWrap,
} from 'styles/Projects';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';

function Projects() {
  const { data: projects, error } = useFetchData<Project[]>(
    '/assets/data/projects.json',
  );

  return (
    <ProjectsContainer>
      <Navbar />
      <ProjectWrap>
        {projects &&
          projects.map((project) => (
            <ImageWrap key={project.id}>
              <Image src={project.image} alt={project.title} />
              <InfoWrap>
                <p>{project.title}</p>
                <p>{project.year}</p>
              </InfoWrap>
            </ImageWrap>
          ))}
      </ProjectWrap>
      <Footer />
    </ProjectsContainer>
  );
}

export default Projects;
