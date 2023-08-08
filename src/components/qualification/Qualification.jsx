import './qualification.css'

const Qualification = () => {

  return (
    <section className="qualification section" id='education'>
      <h2 className="section__title">Education</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__sections">

          <div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">React: De cero a experto ( Hooks y MERN )</h3>
                <span className="qualification__subtitle">Udemy - Fernando Herrera</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Julio 2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Full Stack JavaScript / Node.JS </h3>
                <span className="qualification__subtitle">Codo a Codo (4.0)</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Julio 2022
                </div>
              </div>

            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Técnico Superior en Programación</h3>
                <span className="qualification__subtitle">Teclab - Instituto Técnico Superior</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Octubre 2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Especialización en React</h3>
                <span className="qualification__subtitle">Codo a Codo (4.0)</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Diciembre 2022
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Qualification