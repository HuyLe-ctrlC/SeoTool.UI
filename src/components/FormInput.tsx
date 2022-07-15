import { FC } from "react";
import { Form } from "react-bootstrap";
import { Controller, useFormContext } from "react-hook-form";

type IFormInputProps = {
  name: string;
  label: string;
  type: string;
};

const FormInput: FC<IFormInputProps> = ({ name, label, type }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      control={control}
      defaultValue=""
      name={name}
      render={({ field }) => (
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>{label}</Form.Label>
          <Form.Control {...field} placeholder={label} type={type} />
        </Form.Group>
      )}
    />
  );
};

export default FormInput;
