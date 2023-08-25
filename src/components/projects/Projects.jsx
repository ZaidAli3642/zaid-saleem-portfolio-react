import Project from './Project'
import ProjectsWrapper from './ProjectsWrapper'
import allprojects from './allProjects'

const Projects = () => {
  return (
    <ProjectsWrapper>
      {allprojects.map((project, index) => (
        <Project key={index} projectDetails={project} />
      ))}
    </ProjectsWrapper>
  )
}

export default Projects
