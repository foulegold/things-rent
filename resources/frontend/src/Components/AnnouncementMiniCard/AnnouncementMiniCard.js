import "./module.announcementMiniCard.css"
import { announcementIMG as IMG } from "../../globalVars/globalVars"

function AnnouncementMiniCard({ title, price }) {
  const tempTitle = title.slice(0, 20)


  return (
    <div className="miniCard">
      <img className="miniCard__img" src={IMG} alt="announcement-img"></img>
      <span className="miniCard__title">{tempTitle}</span>
      <span className="miniCard__price">{`${Math.round(price)} ₽`}</span>
    </div>
  )
}

export default AnnouncementMiniCard