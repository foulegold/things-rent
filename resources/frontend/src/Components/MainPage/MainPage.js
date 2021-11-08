import Header from "../Header/Header";
import ProductList from "../ProductList/ProductList";
import Footer from "../Footer/Footer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllCategories } from "../../store/actions/categoriesAction";


function MainPage() {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getAllCategories())
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
