import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import {
  incQuantity,
  decQuantity,
  removeProduct,
} from "../features/cartSlices";

function CartCard({ item }) {
  const dispatch = useDispatch();

  const handleInc = (id) => {
    dispatch(incQuantity(id));
  };

  const handleDec = (item) => {
    if (item.quantity > 1) {
      dispatch(decQuantity(item.id));
    } else {
      dispatch(removeProduct(item.id));
    }
  };

  const handleRemove = (id) => {
    dispatch(removeProduct(id));
  };

  return (
    <Card style={{ padding: "0.5rem", textAlign: "center" }}>
      <div>
        <Card.Img
          variant="top"
          src={item.image}
          style={{ height: "7rem", width: "7rem" }}
        />
      </div>
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>Price : {item.price * item.quantity}</Card.Text>
        <Card.Text>Quantity : {item.quantity}</Card.Text>
        <Button variant="primary" onClick={() => handleDec(item)}>
          <i class="fa-solid fa-minus"></i>
        </Button>
        <Button
          variant="primary"
          className="mx-1"
          onClick={() => handleRemove(item.id)}
        >
          Remove
        </Button>
        <Button variant="primary" onClick={() => handleInc(item.id)}>
          <i class="fa-solid fa-plus"></i>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CartCard;
