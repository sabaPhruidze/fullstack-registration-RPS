import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Container } from "./pieces/Container";
import { Form } from "react-router-dom";
import { Input } from "./pieces/Input";
import { Errors } from "./pieces/Errors";
import { Button } from "./pieces/Button";

type UseForm = {
  firstname: string;
  lastname: string;
  email: string;
  phone: number;
  password: string;
  login: string;
};

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UseForm>();

  const onSubmit = (data: UseForm) => {
    // useEffect(() => {
    //   fetch("http://localhost:8081/users")
    //     .then((res) => res.json())
    //     .then((info) => {
    //       setData(data);
    //       console.log(data);
    //     })
    //     .catch((err) => console.log(err));
    // }, []);
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder="Email"
          {...register("login", { required: true })}
          style={{ marginBottom: errors.login ? 5 : 15 }}
        />
        <Input
          placeholder="Password"
          {...register("password", { required: true })}
          style={{ marginBottom: 25 }}
        />
        <Button type="submit">Login</Button>
      </Form>
    </Container>
  );
}
