const Footer = () => {
  return (
    <footer className='footer navbar-static-bottom'>
      <div className='container'>
        <a rel='noreferrer' href='#top' className='back-to-top'>
          <i className='fa fa-angle-up fa-2x' aria-hidden='true'></i>
        </a>
        <div className='social-links'>
          <a rel='noreferrer' href='https://www.facebook.com/profile.php?id=100010730652292' target='_blank'>
            <i className='fa fa-facebook fa-inverse'></i>
          </a>
          <a rel='noreferrer' href='https://www.linkedin.com/in/zaid-saleem-z3642/' target='_blank'>
            <i className='fa fa-linkedin fa-inverse'></i>
          </a>
          <a rel='noreferrer' href='https://github.com/ZaidAli3642' target='_blank'>
            <i className='fa fa-github fa-inverse'></i>
          </a>
        </div>

        <hr />

        <p className='footer__text'>
          © 2023 -
          <a rel='noreferrer' href='https://github.com/ZaidAli3642' target='_blank'>
            Muhammad Zaid Saleem
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
