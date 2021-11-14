import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Col, Row, Form, Button } from "react-bootstrap";
import "../../globalCss/globalCss.css";
import "./module.newAnnouncement.css";
import { useState } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { getCategoriesArray } from "../Search/Search";
import { addNewAnnouncement } from "../../store/actions/newAnnouncementAction";


function NewAnnouncement() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories, shallowEqual)

  const [title, setTitle] = useState("")
  const [content, seContent] = useState("")
  const [category_id = 1, setCategory_id] = useState()
  const [price, setPrice] = useState(Number)
  const [state, setState] = useState("")
  const [city, setCity] = useState("")
  const [street, setStreet] = useState("")
  const [apartments, SetApartments] = useState("")
  const address_tran = `${state} область, ${city}, ул.${street}, д.${apartments}`


  const categoriesArr = getCategoriesArray(categories);

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(addNewAnnouncement(category_id, title, content, price, address_tran))
  }

  return (
    <>
      <Header />
      <div className="newAnnouncementForm appContainer">
        <Form onSubmit={handleSubmit}>
          <Form.Group as={Row} className="mb-3" >
            <Form.Label className="newAnnouncementForm__label" column sm={2}>
              Название товара*
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" placeholder="Название товара" required value={title} onChange={(e) => setTitle(e.target.value)} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label className="newAnnouncementForm__label" column sm={2}>
              Описание товара*
            </Form.Label>
            <Col sm={10}>
              <Form.Control as="textarea" rows={3} placeholder="Опишите характеристики и возможности товара" required value={content} onChange={(e) => seContent(e.target.value)} />
            </Col>
          </Form.Group>


          <Form.Group as={Row} className="mb-3">
            <Form.Label className="newAnnouncementForm__label" column sm={2}>
              Категория*
            </Form.Label>
            <Col>
              <Form.Select required value={category_id}
                onChange={(e) => setCategory_id(Number(e.target.value))}>
                {categoriesArr.slice(1).map((el) => el)}
              </Form.Select>
            </Col>
            <Form.Label className="newAnnouncementForm__label" column sm={2}>
              Стоимость аренды*
            </Form.Label>
            <Col>
              <Form.Control type="number" placeholder="в рублях" required min={1} value={price} onChange={(e) => setPrice(e.target.value)} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" >
            <Form.Label className="newAnnouncementForm__label" column sm={2}>
              Адрес получения*
            </Form.Label>
            <Col>
              <Form.Label >Область</Form.Label>
              <Form.Control placeholder="Московская" required value={state} onChange={(e) => setState(e.target.value)} />
            </Col>
            <Col>
              <Form.Label>Город</Form.Label>
              <Form.Control placeholder="Москва" required value={city} onChange={(e) => setCity(e.target.value)} />
            </Col>
            <Col>
              <Form.Label>Улица</Form.Label>
              <Form.Control placeholder="Ленинский проспект" required value={street} onChange={(e) => setStreet(e.target.value)} />
            </Col>
            <Col>
              <Form.Label>Дом</Form.Label>
              <Form.Control placeholder="1А" required value={apartments} onChange={(e) => SetApartments(e.target.value)} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type="submit" >Опубликовать объявление</Button>
            </Col>
          </Form.Group>
        </Form>
        <div className="newAnnouncementForm__warning">
          <span>Поля со * обязательны к заполнению.</span>
          <span>Нажимая "Опубликовать объявление" вы соглашаетесь на передачу ваших личных данных.</span>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default NewAnnouncement