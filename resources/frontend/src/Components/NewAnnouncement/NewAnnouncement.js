import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Col, Row, Form, Button } from "react-bootstrap";
import "../../globalCss/globalCss.css";
import "./module.newAnnouncement.css";
import { useState } from "react";

function NewAnnouncement() {
  const [title, setTitle] = useState("")
  const [content, seContent] = useState("")
  const [category_id, setCategory_id] = useState()
  const [price, setPrice] = useState()
  const [state, setState] = useState("")
  const [city, setCity] = useState("")
  const [street, setStreet] = useState("")
  const [apartments, SetApartments] = useState("")
  const address_tran = ""

  return (
    <>
      <Header />
      <div className="newAnnouncementForm appContainer">
        <Form>
          <Form.Group as={Row} className="mb-3" >
            <Form.Label className="newAnnouncementForm__label" column sm={2}>
              Название товара*
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" placeholder="Название товара" required />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label className="newAnnouncementForm__label" column sm={2}>
              Описание товара*
            </Form.Label>
            <Col sm={10}>
              <Form.Control as="textarea" rows={3} placeholder="Опишите характеристики и возможности товара" required />
            </Col>
          </Form.Group>


          <Form.Group as={Row} className="mb-3">
            <Form.Label className="newAnnouncementForm__label" column sm={2}>
              Категория*
            </Form.Label>
            <Col>
              <Form.Select required>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Col>
            <Form.Label className="newAnnouncementForm__label" column sm={2}>
              Стоимость аренды*
            </Form.Label>
            <Col>
              <Form.Control type="number" placeholder="в рублях" required />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" >
            <Form.Label className="newAnnouncementForm__label" column sm={2}>
              Адрес получения*
            </Form.Label>
            <Col>
              <Form.Label >Область</Form.Label>
              <Form.Control placeholder="Московская" required />
            </Col>
            <Col>
              <Form.Label>Город</Form.Label>
              <Form.Control placeholder="Москва" required />
            </Col>
            <Col>
              <Form.Label>Улица</Form.Label>
              <Form.Control placeholder="Центральная" required />
            </Col>
            <Col>
              <Form.Label>Дом</Form.Label>
              <Form.Control placeholder="1А" required />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type="submit">Опубликовать объявление</Button>
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