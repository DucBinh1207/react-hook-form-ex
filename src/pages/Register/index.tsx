import Form, { TFormState } from "../../components/Form";

function onSubmit(values: TFormState) {
  return "This this onSubmit in Register Page";
}

export default function Register() {
  return <Form onSubmitFunc={onSubmit} />;
}
