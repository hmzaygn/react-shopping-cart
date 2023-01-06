import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import NavBarComp from "../components/NavBarComp";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [info, setInfo] = useState();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setInfo(data));
  }, []);

  return (
    <div>
      <NavBarComp />
      <Container>
        <Row className="g-4">
          {info?.map((item) => (
            <Col key={item.id}>
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
