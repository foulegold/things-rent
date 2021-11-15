import { useSelector } from "react-redux";
import { useParams } from "react-router";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./module.announcementPage.css";
import "../../globalCss/globalCss.css"
import { announcementIMG as IMG } from "../../globalVars/globalVars.js"
import { Button } from 'react-bootstrap'


function AnnouncementPage() {
  const { id } = useParams();

  const announcement = useSelector(
    (state) => state.announcements.find((el) => el.id == id)
  );

  // const category = useSelector(
  //   (state) => state.categories.find((el) => el.id === announcement.category_id)
  // ).title;

  // const author = useSelector(
  //   (state) => state.author.find((el) => el.user_id == announcement.user_id)
  // );

  const title = announcement.title
  const address = announcement.address_tran
  const content = announcement.content
  const price = Math.round(announcement.price) + " ₽"
  const status = announcement.status
  const createdAt = announcement.created_at

  return (
    <>
      <Header />
      <main>
        <div className="announcement__wrapper appContainer">
          <div className="announcement__info">
            <h2 className="announcement__title">{title}</h2>
            <div className="announcement__status-wrapper">
              <span className="announcement__created-at">{"10.11.2021"}</span>
              {status == "active" ? <div className="announcement__status_active">Активно</div> : <div className="announcement__status_inactive">Неактивно</div>}
            </div>
            <img src={IMG} className='announcement__img' alt="product-img"></img>
            <div className="announcement__adress">{address}</div>
            <span className="announcement__content">{content}</span>
          </div>
          <div className="rent">
            <span className="rent__price">{price}</span>
            {status == "active" ? <Button variant="success" size="lg">Арендовать</Button> : <Button variant="danger" size="lg" disabled>Арендовать</Button>}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )

}

export default AnnouncementPage