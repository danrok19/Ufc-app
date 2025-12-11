import { useContext } from 'react';
import  { useForm } from 'react-hook-form'
import { loginSchema, type LoginSchema } from '../schemas/loginSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { AuthContext } from '../context/auth-context';
import { useNavigate } from 'react-router-dom';

export default function LoginBox() {

    const auth = useContext(AuthContext);
    const navigate = useNavigate()

    const { register, handleSubmit } = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema)
    });

    const onSubmit = async (data: LoginSchema) => {
        try{
            const response = await fetch("http://localhost:5077/api/Auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: data.email,
                    password: data.password
                })
            });
            if (!response.ok) return;

            const result = await response.text()

            auth.login(result)
            navigate('/')

        } catch(err) {
            console.log(err)
        }
    }

  return (
    <div className='border shadow-xl/40 shadow-yellow-300/50 border-yellow-500 w-140 m-auto py-5 bg-black my-10 text-white'>
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
                    className='w-full px-1' />
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
                    className='w-full px-1'
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
