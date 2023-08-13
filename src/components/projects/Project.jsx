import Tilt from 'react-parallax-tilt'

const Project = ({ projectDetails }) => {
  const { projectName, projectDescription, buttonOne, buttonTwo, coverImage, buttonOneLink, buttonTwoLink } = projectDetails
  return (
    <div className='row'>
      <div className='col-lg-4 col-sm-12'>
        <div className='project-wrapper__text load-hidden'>
          <h3 className='project-wrapper__text-title'>{projectName}</h3>
          <div>
            <p className='mb-4'>{projectDescription}</p>
          </div>
          <a rel='noreferrer' target='_blank' className='cta-btn cta-btn--hero' href={buttonOneLink}>
            {buttonOne}
          </a>
          {buttonTwo && (
            <a rel='noreferrer' target='_blank' className='cta-btn text-color-main' href={buttonTwoLink}>
              {buttonTwo}
            </a>
          )}
        </div>
      </div>
      <div className='col-lg-8 col-sm-12'>
        <div className='project-wrapper__image load-hidden'>
          <a rel='noreferrer' href='#!' target='_blank'>
            <Tilt tiltMaxAngleX={2} tiltMaxAngleY={2} glareEnable={true} glareMaxOpacity={0.3} scale={1} glarePosition='all'>
              <div className='thumbnail rounded'>
                <img alt='Project Image' className='img-fluid' src={coverImage} />
              </div>
            </Tilt>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Project
