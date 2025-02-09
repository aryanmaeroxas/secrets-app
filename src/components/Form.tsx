import { useRef } from 'react'
import {FieldValues, useForm} from "react-hook-form"
import { userRegisterSchema, UserRegisterSchema } from "../schemas/userRegisterSchema"
import { zodResolver } from '@hookform/resolvers/zod' 

const Form = () => {
   const { 
        register, 
        watch, 
        handleSubmit, 
        formState : {errors} 
    } = useForm<UserRegisterSchema>({
        resolver: zodResolver(userRegisterSchema)
    });

   const password = useRef({});
   password.current = watch("password", "");
   
   const onSubmit = (data : FieldValues) => {
    console.log(data)
   }
    return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
            <label htmlFor="email" className="form-label fw-bold">Email address</label>
            <input 
                {...register('email')}
                id="email" 
                type="text" 
                className="form-control" 
            />
            {errors?.email && <p className='text-danger fst-italic'>{errors.email.message}</p>}
        </div>
        <div className="mb-3">
            <label htmlFor="password" className="form-label fw-bold">Password</label>
            <input
                id="password" 
                type="password" 
                {...register('password')}
                className="form-control" 
            />
            {errors?.password && <p className='text-danger fst-italic'>{errors.password.message}</p>}
        </div>
        <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label fw-bold">Confirm Password</label>
            <input
                id="confirmPassword" 
                type="password" 
                {...register("confirmPassword")}
                className="form-control"
            />
            {errors?.confirmPassword && <p className='text-danger fst-italic'>{errors.confirmPassword.message}</p>}
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
    </form>
  )
}

export default Form;