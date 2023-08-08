import { useState } from 'react'
import './qualification.css'

const Qualification = () => {
  const [toggleState, setTtoggleState] = useState(1)

  const toggleTab = (index) => {
    setTtoggleState(index)
  }
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? 'qualification__button qualification__active button--flex'
                : 'qualification__button button--flex'
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i> Education
          </div>

          <div
            className={
              toggleState === 2
                ? 'qualification__button qualification__active button--flex'
                : 'qualification__button button--flex'
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
          </div>
        </div>

        <div className="qualification__sections">

          <div 
            className={
              toggleState === 1 
              ? "qualification__content qualification__content-active" 
              : "qualification__content"
            }
          >
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

          <div 
            className={
              toggleState === 2 
              ? "qualification__content qualification__content-active" 
              : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Ux Expert</h3>
                <span className="qualification__subtitle">Spain - Institute</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2017 - 2018
                </div>
              </div>

            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Designer</h3>
                <span className="qualification__subtitle">Figma - Spain</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2018 - 2020
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
                <h3 className="qualification__title">Ux Designer</h3>
                <span className="qualification__subtitle">Apple Inc - Spain</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2020 - 2021
                </div>
              </div>

            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Product Design</h3>
                <span className="qualification__subtitle">Microsoft - Spain</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2021 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  )
}

export default Qualification