import Header from "../Header/Header";
import ProductList from "../ProductList/ProductList";
import Footer from "../Footer/Footer";
import { useDispatch } from "react-redux";
import { getAllAnnouncements } from "../../store/actions/announcementsActions";
import { useEffect } from "react";

function MainPage() {

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getAllAnnouncements())
  }, [])

  return (
    <>
      <Header />
      <ProductList />
      <Footer />
    </>
  );
}

export default MainPage;
