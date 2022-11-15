import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

interface ExpirationDateInputProps {
  expMonth: string;
  expYear: number;
  setExpMonth: React.Dispatch<React.SetStateAction<string>>;
  setExpYear: React.Dispatch<React.SetStateAction<number>>;
}

const ExpirationDateInput: React.FC<ExpirationDateInputProps> = (
  props: ExpirationDateInputProps
) => {
  const randomMonth = () => {
    let randomM = Math.floor(Math.random() * 12);
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return months[randomM];
  };

  return (
    <Form.Group className="mt-2">
      <Form.Label>Expiration Date</Form.Label>
      <Row>
        <Col>
          <InputGroup>
            <Form.Control
              className="d-none d-md-inline-block"
              value={props.expMonth}
              readOnly
            ></Form.Control>
            <Button
              className="d-none d-md-inline-block"
              variant="primary"
              onClick={() => {
                props.setExpMonth(randomMonth());
              }}
            >
              Change Month
            </Button>
          </InputGroup>
          <InputGroup>
            <Form.Control
              className="d-inline-block d-md-none"
              value={props.expMonth}
              readOnly
            ></Form.Control>
            <Button
              className="d-inline-block d-md-none"
              variant="primary"
              onClick={() => {
                props.setExpMonth(randomMonth());
              }}
            >
              Change
            </Button>
          </InputGroup>
        </Col>
        <Col>
          <InputGroup>
            <Form.Control value={props.expYear} readOnly></Form.Control>
            <Button
              onClick={() => {
                props.setExpYear(props.expYear - 1);
              }}
            >
              -
            </Button>
            <Button
              onClick={() => {
                props.setExpYear(props.expYear + 1);
              }}
            >
              +
            </Button>
          </InputGroup>
        </Col>
      </Row>
    </Form.Group>
  );
};

export default ExpirationDateInput;
