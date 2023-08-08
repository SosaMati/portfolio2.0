import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Matías</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">About</a>
          </li>
          <li>
            <a href="#skills" className="footer__link">Skills</a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">Projects</a>
          </li>
        </ul>

        <div className="footer__social">
          <a href="https://github.com/SosaMati" className="footer__social-link" target="_blank" rel="noreferrer">
          <i className="bx bxl-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/matiasezequielsosa/" className="footer__social-link" target="_blank" rel="noreferrer">
          <i className="bx bxl-linkedin"></i>
          </a>
          <a href="" className="footer__social-link" target="_blank" rel="noreferrer">
          <i className="bx bxl-whatsapp"></i>
          </a>
          </div>

          <span className='footer__copy'>&#169; Matiasezequielsosa. All rigths reserved</span>
      </div>
    </footer>
  )
}

export default Footer