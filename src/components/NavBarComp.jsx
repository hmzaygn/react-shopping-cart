import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Cart from "./Cart";

function NavBarComp() {
  return (
    <>
      <Navbar expand="lg" variant="dark" bg="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#">Home</Navbar.Brand>
          <Cart />
        </Container>
      </Navbar>
      <div style={{ height: "80px" }}></div>
    </>
  );
}

export default NavBarComp;
