import assets from '../assets/assets'

const About = () => {
  return (
    <section id='about'>
      <div className='container'>
        <h2 className='section-title load-hidden'>About me</h2>
        <div className='row about-wrapper'>
          <div className='col-md-6 col-sm-12'>
            <div className='about-wrapper__image load-hidden'>
              <img alt='Profile Image' className='img-fluid rounded shadow-lg' height='auto' width='300px' src={assets.images.ownerImage} />
            </div>
          </div>
          <div className='col-md-6 col-sm-12'>
            <div className='about-wrapper__info load-hidden'>
              <p className='about-wrapper__info-text'>Full-stack developer with 1+ years of developing experience proficient in front-end, back-end development, and agile methodologies with a strong focus on creating efficient, scalable, and user-friendly web applications.</p>
              <p className='about-wrapper__info-text'>Demonstrated ability to work collaboratively with cross-functional teams. Passionate about optimizing code efficiency and implementing cutting-edge technologies to deliver high-quality solutions that meet both user needs and business objectives.</p>
              <span className='d-flex mt-3'>
                <a rel='noreferrer' target='_blank' className='cta-btn cta-btn--resume' href={assets.pdf.myResume}>
                  View Resume
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
