
const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt={item.title} className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <div className="work__links">
        <a href="#" className="work__button">
          Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
        <a href="#" className="work__button">
          Repo <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
      </div>
    </div>
  )
}

export default WorkItems