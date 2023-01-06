import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { addProduct } from "../features/cartSlices";

function ProductCard({ item }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    item.quantity = 1;
    dispatch(addProduct(item));
  };

  return (
    <Card style={{ width: "20rem", height: "50rem", padding: "0.5rem" }}>
      <Card.Img variant="top" src={item.image} style={{ height: "20rem" }} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text style={{ height: "15rem", overflow: "hidden" }}>
          {item.description}
        </Card.Text>
      </Card.Body>
      <Card.Text>Price : {item.price}</Card.Text>
      <Button variant="primary" onClick={handleClick}>
        Add Cart
      </Button>
    </Card>
  );
}

export default ProductCard;
