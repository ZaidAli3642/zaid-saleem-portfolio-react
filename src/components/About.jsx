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
              <p className='about-wrapper__info-text'>As an experienced Web and App Developer with a degree in Computer Science and completion of development courses at codewithmosh.com and Zero to Mastery (ZTM), I have honed my skills in creating real-world projects that tackle complex tasks. Through various problem-solving strategies, I have learned to approach tasks with efficiency and creativity, which has allowed me to excel in my recent tasks.</p>
              <p className='about-wrapper__info-text'>Having completed my internship and gained experience in the IT industry, I am now seeking a challenging position in a reputable company where I can utilize my skills and continue to grow as a developer. I am confident that my technical skills, coupled with my problem-solving abilities, would make a valuable contribution to any team.</p>
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
