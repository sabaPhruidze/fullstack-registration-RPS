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
  const {register, handleSubmit,formState: {errors}} = useForm<UseForm>();

  const onSubmit = () => {
    
    
  }
  console.log("Errors", errors);
  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Input placeholder="First name" {...register('firstname',{pattern:{message:"error for name", value:/^[A-Za-z]+$/}})} />
          <div style={{width:50}}/>{/* For space between */}
          <Input placeholder="Last name" {...register('lastname')} />
        </Row>
       
        <Input placeholder="Email" {...register('email')} />
        <Input placeholder="Phone number" {...register('phone')} />
        <Input placeholder="Password" {...register('password')} />
        {/* <Input {...register('birthday')} />
        <Input {...register('gender')} /> */}
        <button type="submit">Register</button>
      </Form>
      {errors.firstname && <p style={{color:'red'}}>{errors.firstname.message}</p>}
      {errors.lastname && <p style={{color:'red'}}>{errors.lastname.message}</p>}
      
    </Container>
  )
}
