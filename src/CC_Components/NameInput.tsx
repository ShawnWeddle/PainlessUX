import Form from "react-bootstrap/Form";

interface NameInputProps {
  name: string;
  nameSet: React.Dispatch<React.SetStateAction<string>>;
}

const NameInput: React.FC<NameInputProps> = (props: NameInputProps) => {
  return (
    <Form.Group>
      <Form.Label>Name on Card</Form.Label>
      <Form.Control
        type="text"
        placeholder="John Doe"
        value={props.name}
        onChange={(e) => {
          props.nameSet(e.target.value);
        }}
      ></Form.Control>
    </Form.Group>
  );
};

export default NameInput;
