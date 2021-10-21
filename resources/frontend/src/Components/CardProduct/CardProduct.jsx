import React from "react";
import { Card, Button } from "react-bootstrap";

let obj = {
  product: [
    {
      product_id: 1,
      product_name: "Наушники",
      product_desc: "отличные наушники",
      product_img:
        "https://www.bt-deluxe.ru/upload/iblock/524/524c38286b3e68eacd74abcf437a9283.jpg",
      product_price: 1000,
    },
    {
      product_id: 2,
      product_name: "Телевизор",
      product_desc: "бомба",
      product_img: "https://cdn1.ozone.ru/s3/multimedia-p/6036967921.jpg",
      product_price: 500,
    },
  ],
};

const CardProduct = (props) => {
  let elements = obj.product.map((el) => {
    return (
      <Card key={el.product_id} style={{ width: "15rem" }}>
        <Card.Body>
          <Card.Title className="text-center">{el.product_name}</Card.Title>
          <Card.Img variant="top" src={el.product_img} />

          <Card.Text className="text-center">{el.product_desc}</Card.Text>
          <Card.Text className="text-center">
            {el.product_price}р / день
          </Card.Text>
          <Button style={{ margin: "0 auto", display: "block" }} variant="dark">
            Взять в аренду
          </Button>
        </Card.Body>
      </Card>
    );
  });
  return <div className="d-flex justify-content-around">{elements}</div>;
};

export default CardProduct;
