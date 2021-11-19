import "./module.announcementMiniCard.css"
import { announcementIMG as IMG } from "../../globalVars/globalVars"
import { Link } from "react-router-dom"

function AnnouncementMiniCard({ title, price, id }) {
  const tempTitle = title.slice(0, 20)

  return (

    <Link to={`/announcement/${id}`} className="miniCard" >
      <img className="miniCard__img" src={IMG} alt="announcement-img"></img>
      <span className="miniCard__title">{tempTitle}</span>
      <span className="miniCard__price">{`${Math.round(price)} ₽`}</span>
    </Link>
  )
}

export default AnnouncementMiniCard