import React from 'react';
import  { useForm, type FieldValues } from 'react-hook-form'
import { loginSchema, type LoginSchema } from '../schemas/loginSchema';
import { zodResolver } from '@hookform/resolvers/zod';

export default function LoginBox() {
    const { register, handleSubmit} = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema)
    });

    const onSubmit = (data: FieldValues) => {
        console.log(data)
    }
  return (
    <div className='border w-140 m-auto py-5 bg-lime-100 my-10'>
      <div>
        <h2 className='font-bold text-center text-xl'>Sign in to ur account</h2>
      </div>
      <div className='px-10'>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor='email' className='block text-sm/6 font-medium'>
                    Email address
                </label>
                <div className='rounded-md outline-1'>
                    <input id='email' 
                    type='email' 
                    required 
                    autoComplete='email'
                    {...register('email')} 
                    className='w-full'/>
                </div>
            </div>
            <div className='mt-4'>
                <div className='flex'>
                    <label htmlFor="password" className='block text-sm/6 font-medium flex-1'>
                        Password
                    </label>
                    <div>
                        <a href="#" className='block text-xs font-medium text-end text-yellow-600 flex-1'>
                            Forgot password?
                        </a>
                    </div>
                </div>
                <div className='rounded-md outline-1'>
                    <input id='password' 
                    type="password" 
                    required 
                    autoComplete='current-password' 
                    {...register('password')}
                    className='w-full'
                    />
                </div>
            </div>
            <div className='mt-5'>
                <button 
                type='submit' 
                className='rounded w-full bg-yellow-400 py-1 hover:bg-yellow-500 transition duration-100 ease-in-out cursor-pointer'>
                    Sign in
                </button>
            </div>
        </form>
      </div>
    </div>
  )
}
