import "./module.filteredAnnouncements.css"
import "../../globalCss/globalCss.css"
import Header from "../Header/Header"
import AnnouncementMiniCard from "../AnnouncementMiniCard/AnnouncementMiniCard"
import { shallowEqual, useSelector } from "react-redux"
import Footer from "../Footer/Footer"
import { Spinner } from "react-bootstrap"


function FilteredAnnouncements() {
  const announcements = useSelector((state) => state.filteredAnnouncements, shallowEqual)
  const loading = useSelector((state) => state.loading, shallowEqual)

  return (
    <>
      <Header />
      <main>
        <div className="appContainer">
          <div className="filter__wrapper">
            {loading && <div className="spinnerWrapper"><Spinner animation="border" /></div>}
            {announcements.length ? announcements.map((el) => <AnnouncementMiniCard title={el.title} price={el.price} id={el.id} key={el.id} />) : <span className="filter__empty">Ничего не найдено</span>}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default FilteredAnnouncements