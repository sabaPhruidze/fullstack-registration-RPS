import { useForm } from "react-hook-form";
import { Container } from "./pieces/Container";
import { Form } from "./pieces/Form";
import { Input } from "./pieces/Input";
import { Row } from "./pieces/Row";
type UseForm = {
  firstname:string,
  lastname:string,
  email:string,
  phone:number,
  password:string,
  birthday:string,
  gender:string
}

export default function Register() {
  const {register, handleSubmit} = useForm<UseForm>();

  const onSubmit = (data:UseForm) => {
    console.log(data)
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Input {...register('firstname')} />
          <Input {...register('lastname')} />
        </Row>
        <Input {...register('email')} />
        <Input {...register('phone')} />
        <Input {...register('password')} />
        <Input {...register('birthday')} />
        <Input {...register('gender')} />
        <button type="submit">Register</button>
      </Form>
    </Container>
  )
}
