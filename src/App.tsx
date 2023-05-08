import { zodResolver } from '@hookform/resolvers/zod';
import { Eye, EyeSlash } from '@phosphor-icons/react';
import clsx from 'clsx';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import logoImg from './assets/logo.png';


const schema = z.object({
  email: z.string().email('Informe um e-mail válido') ,
  password: z
    .string()
    .min(6, {message: 'Informe uma senha, com no mínimo 6 caracteres.'})
})

type IFormProps = z.infer<typeof schema>

function App() {
  const [passwordVisible, setPasswordVisible] = useState(false)


  const {register, handleSubmit, formState: {errors}, reset} = useForm<IFormProps>({
    resolver: zodResolver(schema)
  })
  
  
  function handleSubmitForm(data: IFormProps){
    console.log("Formulário =>", data)
    reset()
    alert('Login feito com sucesso!')
  }

  function handlePasswordChange(){
    setPasswordVisible((prevState)=>!prevState)
  }
  
    return (
      <div className="w-full h-screen grid grid-cols-2 bg-gray-50">
        <div className="px-28 py-10">
          <div>
            <img src={logoImg} alt="Logo: Vertigo" />
          </div>

          <form className='mt-28 flex flex-col gap-10'>
            <header className='flex flex-col gap-4'>
              <h1 className='text-gray-800 font-bold text-4xl'>
                Acesse a plataforma
              </h1>
              <span className='text-gray-600 text-base text-left'>
                Faça login ou registe-se para começar a construir <br/> 
                seus projetos ainda hoje.
              </span>
            </header>

            <main className='flex flex-col gap-4'>
              <div className='flex flex-col gap-2'>
                <label className="text-gray-900 text-sm font-semibold">E-mail</label>
                <input 
                {...register("email")}
                  type="email"
                  className={clsx(`px-3 py-4 text-gray-800 rounded border border-gray-200 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-500 hover:border-purple-500 transition`, {
                    'border-red-500 focus:outline-none focus:ring-0 hover:border-red-500': errors.email
                  })}
                  placeholder='Digite seu e-mail'
                />
                {errors.email?.message && 
                   <p className="text-red-500 text-sm">{errors.email.message}</p>
                }
              </div>

              <div className='flex flex-col gap-2'>
                <div className='flex justify-between'>
                  <label className="text-gray-900 text-sm font-semibold">
                    Senha
                  </label>
                  <a href="#" className='text-sm text-purple-500 font-bold hover:underline'>
                    Esqueceu a senha?
                  </a>
                </div>

                <div className='flex items-center relative group'>
                  <input
                  {...register("password")}
                    type={passwordVisible ? 'text': 'password'}
                    className={clsx('w-full px-3 py-4 text-gray-800 rounded border border-gray-200 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-500 group-hover:border-purple-500 transition', {
                      'border-red-500 focus:outline-none focus:ring-0 group-hover:border-red-500': errors.password
                    })}
                    placeholder='Digite sua senha'
                    autoComplete="true"
                  />
                  <button 
                    type="button" 
                    onClick={handlePasswordChange} 
                    className='p-2 rounded flex absolute right-3 focus:outline-none focus:ring-1 focus:ring-purple-500' >
                      {passwordVisible ?  <EyeSlash/> : <Eye/> }
                  </button>
                </div>
                {errors.password?.message && 
                   <p className="text-red-500 text-sm">{errors.password.message}</p>
                }
              </div>

              <button 
                type='submit'
                onClick={handleSubmit(handleSubmitForm)}
                className='mt-4 px-6 py-4 rounded bg-purple-500 text-gray-50 font-bold hover:bg-purple-500/60 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-50  transition'
              >
                Entrar
              </button>
              <span className='mt-4 text-gray-600'>Ainda não tem uma conta? 
                <a href="#" className="ml-2 text-purple-500 font-bold hover:underline">
                 Inscreva-se
                </a>
              </span>
            </main>
          </form>
        </div>

        <div className="bg-[url('/src/assets/bg-img.png')] bg-cover bg-no-repeat"/>
      </div>
  )
}

export default App
