import { useForm } from "react-hook-form";
import { Container } from "./pieces/Container";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Form } from "./pieces/Form";
import { Input } from "./pieces/Input";
import { Row } from "./pieces/Row";
import { Errors } from "./pieces/Errors";
import { Button } from "./pieces/Button";

type UseForm = {
  firstname: string;
  lastname: string;
  email: string;
  phone: number;
  password: string;
};

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UseForm>();
  const navigate = useNavigate();

  const onSubmit = (data: UseForm) => {
    axios
      .post("http://localhost:8081/signup", data)
      .then((res) => console.log("sent"))
      .catch((err) => console.log(err));
    navigate("/");
  };
  const nameMessage =
    "only english letters inside first name and last name input";
  const passwordMessage =
    "minimum 8 characters,at least one letter and one number";
  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row
          style={{ marginBottom: errors.lastname || errors.firstname ? 0 : 15 }}
        >
          <Input
            placeholder="First name"
            {...register("firstname", {
              required: true,
              pattern: {
                message: nameMessage,
                value: /^[A-Za-z][A-Za-z]*$/,
              },
            })}
          />
          <div style={{ width: 50 }} />
          {/* For space between */}
          <Input
            placeholder="Last name"
            {...register("lastname", {
              required: true,
              pattern: {
                message: nameMessage,
                value: /^[A-Za-z]+$/,
              },
            })}
          />
        </Row>
        {errors.firstname ? (
          <Errors>{errors.firstname.message}</Errors>
        ) : errors.lastname ? (
          <Errors>{errors.lastname.message}</Errors>
        ) : errors.firstname && errors.lastname ? (
          <Errors>{nameMessage}</Errors>
        ) : null}
        <Input
          placeholder="Email"
          {...register("email", {
            required: true,
            pattern: {
              message: "You must write casual type of email",
              value:
                /^[a-zA-Z][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$/,
            },
          })}
          style={{ marginBottom: errors.email ? 5 : 15 }}
        />
        {errors.email && <Errors>{errors.email.message}</Errors>}
        <Input
          style={{ marginBottom: errors.phone ? 5 : 15 }}
          placeholder="Phone number"
          {...register("phone", {
            required: true,
            pattern: {
              message: "Example: 591 22 22 22",
              value:
                /^(\+995)?(5[0-9]{2} ?[0-9]{2} ?[0-9]{2} ?[0-9]{2}|7[7-9][0-9]{2} ?[0-9]{2} ?[0-9]{2} ?[0-9]{2}){1,}$/,
            },
          })}
        />
        {errors.phone && <Errors>{errors.phone.message}</Errors>}
        <Input
          style={{ marginBottom: errors.password ? 5 : 25 }}
          placeholder="Password"
          {...register("password", {
            pattern: {
              message: passwordMessage,
              value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
            },
            required: true,
          })}
        />
        {errors.password && <Errors>{errors.password.message}</Errors>}
        <Button type="submit">Register</Button>
      </Form>
    </Container>
  );
}
