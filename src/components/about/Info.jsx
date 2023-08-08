
const Info = () => {
  return (
    <div className="about__info grid">

      <div className="about__box">
      <i className="uil uil-graduation-cap about__icon"></i>
        <h3 className="about__title">Técnico en Programación</h3>
        <span className="about__subtitle">2020 - 2022</span>
      </div>
      
      <div className="about__box">
      <i className='bx bx-badge-check about__icon'></i>
        <h3 className="about__title">Courses Completed</h3>
        <span className="about__subtitle"> + 10</span>
      </div>

      <div className="about__box">
        <i className='bx bx-support about__icon' ></i>
        <h3 className="about__title">Support</h3>
        <span className="about__subtitle">Online 24/7</span>
      </div>

    </div>
  )
}

export default Info