import Project from './Project'
import ProjectsWrapper from './ProjectsWrapper'
import allprojects from './allProjects'

const Projects = () => {
  return (
    <ProjectsWrapper>
      {allprojects.map(project => (
        <Project key={project.id} projectDetails={project} />
      ))}
    </ProjectsWrapper>
  )
}

export default Projects
