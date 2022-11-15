import { useState, useEffect } from "react";
import _ from "lodash";
import luhn from "luhn-js";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import NameInput from "./CC_Components/NameInput";
import CardNumberInput from "./CC_Components/CardNumberInput";
import ExpirationDateInput from "./CC_Components/ExpirationDateInput";
import SecurityCardInput from "./CC_Components/SecurityCodeInput";

interface CreditCardFormProps {}

const CreditCardForm: React.FC<CreditCardFormProps> = () => {
  const [nameOnCard, setNameOnCard] = useState<string>("");
  const [cardNumber, setCardNumber] = useState<string>("5000000000000000");
  const [expirationMonth, setExpirationMonth] = useState<string>("Smonth");
  const [expirationYear, setExpirationYear] = useState<number>(2070);
  const [securityCode, setSecurityCode] = useState<number>(420);
  const [securityCodeOptions, setSecurityCodeOptions] = useState<number[]>();
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);
  const [isValidCardNumber, setIsValidCardNumber] = useState<boolean>(false);
  const [isValidSubmission, setIsValidSubmission] = useState<boolean>(false);

  useEffect(() => {
    let securityCodeOptionsArray: number[] = [];
    for (let i = 0; i < 900; i++) {
      securityCodeOptionsArray[i] = 100 + i;
    }
    securityCodeOptionsArray = _.shuffle(securityCodeOptionsArray);
    setSecurityCodeOptions(securityCodeOptionsArray);
  }, []);

  const letterRegEx: RegExp = /^[a-zA-Z\s]*$/;

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setHasSubmitted(true);

    setIsValidCardNumber(luhn.isValid(cardNumber));

    if (
      isValidCardNumber &&
      letterRegEx.test(nameOnCard) &&
      expirationMonth !== "Smonth" &&
      expirationYear < 2028 &&
      expirationYear > 2021
    ) {
      setIsValidSubmission(true);
    } else {
      setIsValidSubmission(false);
    }
  };

  return (
    <>
      <Card className="max-width-card mt-3">
        <Card.Body>
          <Form>
            <NameInput name={nameOnCard} nameSet={setNameOnCard} />

            <CardNumberInput
              cardNumber={cardNumber}
              setCardNumber={setCardNumber}
            />

            <ExpirationDateInput
              expMonth={expirationMonth}
              expYear={expirationYear}
              setExpMonth={setExpirationMonth}
              setExpYear={setExpirationYear}
            />

            <SecurityCardInput
              securityCode={securityCode}
              setSecurityCode={setSecurityCode}
              securityCodeOptions={securityCodeOptions}
            />

            <Button className="mt-3" type="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
      {hasSubmitted && isValidSubmission && (
        <Card bg="success" className="max-width-card mt-3 text-white">
          Wow, did you actually enter your credit card number? Why would you
          trust me with that?
        </Card>
      )}
      {hasSubmitted && !isValidSubmission && isValidCardNumber && (
        <Card bg="warning" className="max-width-card mt-3">
          Woah there, you actually entered a valid card number.
        </Card>
      )}
      {hasSubmitted && !isValidSubmission && !isValidCardNumber && (
        <Card bg="danger" className="max-width-card mt-3 text-white">
          Thank you for not entering a valid credit card number.
        </Card>
      )}
    </>
  );
};

export default CreditCardForm;
