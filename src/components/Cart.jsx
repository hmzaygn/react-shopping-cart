import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useSelector } from "react-redux";
import CartCard from "./CartCard";

export default function Cart({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { products } = useSelector((state) => state.cart);
  console.log(products);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2">
        <i class="fa-solid fa-cart-shopping"></i>
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {products.length > 0 ? (
            products.map((item) => <CartCard item={item} />)
          ) : (
            <p>Your Shopping Cart is Empty !</p>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
