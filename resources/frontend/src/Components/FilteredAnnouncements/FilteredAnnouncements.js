import "./module.filteredAnnouncements.css"
import "../../globalCss/globalCss.css"
import Header from "../Header/Header"
import AnnouncementMiniCard from "../AnnouncementMiniCard/AnnouncementMiniCard"
import { shallowEqual, useSelector } from "react-redux"
import Footer from "../Footer/Footer"

function FilteredAnnouncements() {
  const announcements = useSelector((state) => state.announcements, shallowEqual)

  return (
    <>
      <Header />
      <main>
        <div className="appContainer">
          <div className="filter__wrapper">
            {announcements.length ? announcements.map((el) => <AnnouncementMiniCard title={el.title} price={el.price} />) : <span className="filter__empty">Ничего не найдено</span>}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default FilteredAnnouncements