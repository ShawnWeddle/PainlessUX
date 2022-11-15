import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

interface CardNumberInputProps {
  cardNumber: string;
  setCardNumber: React.Dispatch<React.SetStateAction<string>>;
}

const CardNumberInput: React.FC<CardNumberInputProps> = (
  props: CardNumberInputProps
) => {
  const addZeros = (string: string) => {
    if (string.length < 16) {
      string = string.padStart(16, "0");
    }
    return string;
  };

  return (
    <Form.Group className="mt-2">
      <Form.Label>Card Number</Form.Label>
      <Form.Range
        min="1"
        max="9999999999999999"
        value={props.cardNumber}
        onChange={(e) => {
          props.setCardNumber(addZeros(e.target.value));
        }}
      />
      <Container>
        <Row>
          <Col>
            <InputGroup>
              <Form.Control
                className="d-none d-md-inline-block"
                type="text"
                value={props.cardNumber.slice(0, 4)}
                disabled
                readOnly
              />
              <Button
                className="d-none d-md-inline-block"
                variant="secondary"
                size="sm"
                onClick={() => {
                  props.setCardNumber(
                    addZeros(
                      (parseInt(props.cardNumber) - 1000000000000).toString()
                    )
                  );
                }}
                disabled={props.cardNumber.slice(0, 4) === "0000"}
              >
                -
              </Button>
              <Button
                className="d-none d-md-inline-block"
                variant="secondary"
                size="sm"
                onClick={() => {
                  props.setCardNumber(
                    addZeros(
                      (parseInt(props.cardNumber) + 1000000000000).toString()
                    )
                  );
                }}
                disabled={props.cardNumber.slice(0, 4) === "9999"}
              >
                +
              </Button>
            </InputGroup>

            {/* Small screen */}

            <ButtonGroup vertical>
              <Form.Control
                className="d-inline-block d-md-none"
                type="text"
                value={props.cardNumber.slice(0, 4)}
                disabled
                readOnly
              />
              <ButtonGroup>
                <Button
                  className="d-inline-block d-md-none"
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    props.setCardNumber(
                      addZeros(
                        (parseInt(props.cardNumber) - 1000000000000).toString()
                      )
                    );
                  }}
                  disabled={props.cardNumber.slice(0, 4) === "0000"}
                >
                  -
                </Button>
                <Button
                  className="d-inline-block d-md-none"
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    props.setCardNumber(
                      addZeros(
                        (parseInt(props.cardNumber) + 1000000000000).toString()
                      )
                    );
                  }}
                  disabled={props.cardNumber.slice(0, 4) === "9999"}
                >
                  +
                </Button>
              </ButtonGroup>
            </ButtonGroup>
          </Col>

          {/* Group 2 */}

          <Col>
            <InputGroup>
              <Form.Control
                className="d-none d-md-inline-block"
                type="text"
                value={props.cardNumber.slice(4, 8)}
                disabled
                readOnly
              />
              <Button
                className="d-none d-md-inline-block"
                variant="secondary"
                size="sm"
                onClick={() => {
                  props.setCardNumber(
                    addZeros(
                      (parseInt(props.cardNumber) - 100000000).toString()
                    )
                  );
                }}
                disabled={props.cardNumber.slice(0, 8) === "00000000"}
              >
                -
              </Button>
              <Button
                className="d-none d-md-inline-block"
                variant="secondary"
                size="sm"
                onClick={() => {
                  props.setCardNumber(
                    addZeros(
                      (parseInt(props.cardNumber) + 100000000).toString()
                    )
                  );
                }}
                disabled={props.cardNumber.slice(0, 8) === "99999999"}
              >
                +
              </Button>
            </InputGroup>

            {/* Small screen */}

            <ButtonGroup vertical>
              <Form.Control
                className="d-inline-block d-md-none"
                type="text"
                value={props.cardNumber.slice(4, 8)}
                disabled
                readOnly
              />
              <ButtonGroup>
                <Button
                  className="d-inline-block d-md-none"
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    props.setCardNumber(
                      addZeros(
                        (parseInt(props.cardNumber) - 100000000).toString()
                      )
                    );
                  }}
                  disabled={props.cardNumber.slice(0, 8) === "00000000"}
                >
                  -
                </Button>
                <Button
                  className="d-inline-block d-md-none"
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    props.setCardNumber(
                      addZeros(
                        (parseInt(props.cardNumber) + 100000000).toString()
                      )
                    );
                  }}
                  disabled={props.cardNumber.slice(0, 8) === "99999999"}
                >
                  +
                </Button>
              </ButtonGroup>
            </ButtonGroup>
          </Col>

          {/* Group 3 */}

          <Col>
            <InputGroup>
              <Form.Control
                className="d-none d-md-inline-block"
                type="text"
                value={props.cardNumber.slice(8, 12)}
                disabled
                readOnly
              />
              <Button
                className="d-none d-md-inline-block"
                variant="secondary"
                size="sm"
                onClick={() => {
                  props.setCardNumber(
                    addZeros((parseInt(props.cardNumber) - 10000).toString())
                  );
                }}
                disabled={props.cardNumber.slice(0, 12) === "000000000000"}
              >
                -
              </Button>
              <Button
                className="d-none d-md-inline-block"
                variant="secondary"
                size="sm"
                onClick={() => {
                  props.setCardNumber(
                    addZeros((parseInt(props.cardNumber) + 10000).toString())
                  );
                }}
                disabled={props.cardNumber.slice(0, 12) === "999999999999"}
              >
                +
              </Button>
            </InputGroup>

            {/* Small screen */}

            <ButtonGroup vertical>
              <Form.Control
                className="d-inline-block d-md-none"
                type="text"
                value={props.cardNumber.slice(8, 12)}
                disabled
                readOnly
              />
              <ButtonGroup>
                <Button
                  className="d-inline-block d-md-none"
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    props.setCardNumber(
                      addZeros((parseInt(props.cardNumber) - 10000).toString())
                    );
                  }}
                  disabled={props.cardNumber.slice(0, 12) === "000000000000"}
                >
                  -
                </Button>
                <Button
                  className="d-inline-block d-md-none"
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    props.setCardNumber(
                      addZeros((parseInt(props.cardNumber) + 10000).toString())
                    );
                  }}
                  disabled={props.cardNumber.slice(0, 12) === "999999999999"}
                >
                  +
                </Button>
              </ButtonGroup>
            </ButtonGroup>
          </Col>

          {/* Group 4 */}

          <Col>
            <InputGroup>
              <Form.Control
                className="d-none d-md-inline-block"
                type="text"
                value={props.cardNumber.slice(12, 16)}
                disabled
                readOnly
              />
              <Button
                className="d-none d-md-inline-block"
                variant="secondary"
                size="sm"
                onClick={() => {
                  props.setCardNumber(
                    addZeros((parseInt(props.cardNumber) - 1).toString())
                  );
                }}
                disabled={props.cardNumber === "0000000000000000"}
              >
                -
              </Button>
              <Button
                className="d-none d-md-inline-block"
                variant="secondary"
                size="sm"
                onClick={() => {
                  props.setCardNumber(
                    addZeros((parseInt(props.cardNumber) + 1).toString())
                  );
                }}
                disabled={props.cardNumber === "9999999999999999"}
              >
                +
              </Button>
            </InputGroup>

            {/* Small screen */}

            <ButtonGroup vertical>
              <Form.Control
                className="d-inline-block d-md-none"
                type="text"
                value={props.cardNumber.slice(12, 16)}
                disabled
                readOnly
              />
              <ButtonGroup>
                <Button
                  className="d-inline-block d-md-none"
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    props.setCardNumber(
                      addZeros((parseInt(props.cardNumber) - 1).toString())
                    );
                  }}
                  disabled={props.cardNumber === "0000000000000000"}
                >
                  -
                </Button>
                <Button
                  className="d-inline-block d-md-none"
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    props.setCardNumber(
                      addZeros((parseInt(props.cardNumber) + 1).toString())
                    );
                  }}
                  disabled={props.cardNumber === "9999999999999999"}
                >
                  +
                </Button>
              </ButtonGroup>
            </ButtonGroup>
          </Col>

          {/* End of groups */}
        </Row>
      </Container>
    </Form.Group>
  );
};

export default CardNumberInput;
