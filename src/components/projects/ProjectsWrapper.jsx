const ProjectsWrapper = ({ children }) => {
  return (
    <section id='projects'>
      <div className='container'>
        <div className='project-wrapper'>
          <h2 className='section-title dark-blue-text'>Projects</h2>
          {children}
        </div>
      </div>
    </section>
  )
}

export default ProjectsWrapper
