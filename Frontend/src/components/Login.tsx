import { useState, useEffect, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { Container } from "./pieces/Container";
import { Form } from "react-router-dom";
import { Input } from "./pieces/Input";
import { Button } from "./pieces/Button";
import { Row } from "./pieces/Row";
import { Column } from "./pieces/Column";
import { Paragraph } from "./pieces/paragraph";
import { startContext } from "./Root";

type Retrieved = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  password: string;
};

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [retriveData, setRetriveData] = useState<Retrieved[] | undefined>();
  const myContext = useContext(startContext);
  const { loginS, setLoginS } = myContext;
  const navigate = useNavigate();
  useEffect(() => {
    if (!retriveData) {
      fetch("http://localhost:8081/login")
        .then((res) => res.json())
        .then((data) => {
          setRetriveData(data);
        });
    }
  }, [retriveData]);
  console.log(retriveData);
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    retriveData &&
      retriveData.map((info: Retrieved) => {
        if (info.email === data.login && info.password === data.password) {
          setLoginS(true);
          navigate("/game");
        }
      });
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
        <Row>
          <Button type="submit">Login</Button>
          <Column>
            <Link
              to="/register"
              style={{ color: "#14452f", textDecoration: "none" }}
            >
              <Paragraph>Registration</Paragraph>
            </Link>
            <Link
              to="/game"
              style={{ color: "#14452f", textDecoration: "none" }}
            >
              <Paragraph>game page</Paragraph>
            </Link>
          </Column>
        </Row>
      </Form>
    </Container>
  );
}
