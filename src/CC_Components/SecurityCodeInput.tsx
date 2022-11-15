import Form from "react-bootstrap/Form";

interface SecurityCodeInputProps {
  securityCode: number;
  setSecurityCode: React.Dispatch<React.SetStateAction<number>>;
  securityCodeOptions: number[] | undefined;
}

const SecurityCodeInput: React.FC<SecurityCodeInputProps> = (
  props: SecurityCodeInputProps
) => {
  const securityCodeOptionList = props.securityCodeOptions?.map(
    (option, index) => (
      <option key={index} value={option}>
        {option}
      </option>
    )
  );

  return (
    <Form.Group className="mt-2">
      <Form.Label>Security Code</Form.Label>
      <Form.Select
        value={props.securityCode}
        onChange={(e) => {
          props.setSecurityCode(parseInt(e.target.value));
        }}
      >
        {securityCodeOptionList}
      </Form.Select>
    </Form.Group>
  );
};

export default SecurityCodeInput;
