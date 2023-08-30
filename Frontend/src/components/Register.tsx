import { useForm } from "react-hook-form";

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
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input {...register('firstname')} />
          <input {...register('lastname')} />
        </div>
        <input {...register('email')} />
        <input {...register('phone')} />
        <input {...register('password')} />
        <input {...register('birthday')} />
        <input {...register('gender')} />
        <button type="submit">Register</button>
      </form>
    </div>
  )
}
