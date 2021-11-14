import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Col, Row, Form, Button } from "react-bootstrap";
import "../../globalCss/globalCss.css";
import "./module.newAnnouncement.css";

function NewAnnouncement() {
  return (
    <>
      <Header />
      <div className="newAnnouncementForm appContainer">
        <Form>
          <Form.Group as={Row} className="mb-3" >
            <Form.Label column sm={2}>
              Название товара
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" placeholder="Название товара" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Описание товара
            </Form.Label>
            <Col sm={10}>
              <Form.Control as="textarea" rows={3} placeholder="Опишите характеристики и возможности товара" />
            </Col>
          </Form.Group>


          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Категория
            </Form.Label>
            <Col>
              <Form.Select defaultValue="Выберите категорию товара">
                <option>Выберите категорию товара</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" >
            <Form.Label column sm={2}>
              Адрес получения
            </Form.Label>
            <Col>
              <Form.Label>Область</Form.Label>
              <Form.Control placeholder="Московская" />
            </Col>
            <Col>
              <Form.Label>Город</Form.Label>
              <Form.Control placeholder="Москва" />
            </Col>
            <Col>
              <Form.Label>Улица</Form.Label>
              <Form.Control placeholder="Центральная" />
            </Col>
            <Col>
              <Form.Label>Дом</Form.Label>
              <Form.Control placeholder="1А" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type="submit">Опубликовать объявление</Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
      <Footer />
    </>
  )
}

export default NewAnnouncement