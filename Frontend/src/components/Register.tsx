import {useState} from 'react';
import { useForm } from "react-hook-form";
import { Container } from "./pieces/Container";
import { Form } from "./pieces/Form";
import { Input } from "./pieces/Input";
import { Row } from "./pieces/Row";
import { Errors } from "./pieces/Errors";
import { ErrorsContainer } from "./pieces/ErrorsContainer";
import { DarkBG } from "./pieces/DarkBG";
import { Button } from './pieces/Button';

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
  const {register, handleSubmit,formState: {errors}} = useForm<UseForm>();
  // const [callAlert,setCallAlert] = useState<boolean>(false);
  
  const onSubmit = (data:any) => {
 console.log(errors,data);
  }
  
  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Input placeholder="First name" {...register('firstname',{pattern:{message:"You must write only english letters inside firstname input", value:/^[A-Za-z]+$/}})} />
          <div style={{width:50}}/>{/* For space between */}
          <Input placeholder="Last name" {...register('lastname',{pattern: {message:"You must write only english letters inside last name input", value:/^[A-Za-z]+$/}})} />
        </Row>
        <Input placeholder="Email" {...register('email',{pattern: {message:"You must write casual type of email", value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$/}})} />
        <Input placeholder="Phone number" {...register('phone')} />
        <Input placeholder="Password" {...register('password')} />
        {/* <Input {...register('birthday')} />
        <Input {...register('gender')} /> */}
        <Button type="submit">Register</Button>
      </Form>
           {errors.firstname && <Errors>{errors.firstname.message}</Errors>}
           {errors.lastname && <Errors>{errors.lastname.message}</Errors>}
           {errors.email && <Errors>{errors.email.message}</Errors>}
    </Container>
  )
}
