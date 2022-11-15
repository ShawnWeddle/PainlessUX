import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import CreditCardForm from "./CreditCardForm";

const HomePage: React.FC = () => {
  return (
    <>
      <Navbar bg="primary" variant="primary">
        <Container className="justify-content-center">
          <Navbar.Brand>
            Don't give me your credit card information
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <Row className="justify-content-center">
          <CreditCardForm />
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
