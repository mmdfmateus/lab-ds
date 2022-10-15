import { Logo } from './Logo';
import { Heading } from './components/Heading'
import { Text } from './components/Text'
import { TextInput } from './components/TextInput'
import { Checkbox } from './components/Checkbox'
import { Button } from './components/Button'
import './styles/global.css';
import { Envelope, Lock } from 'phosphor-react';

export const App = () => {

  return (
    <>
      <div className='w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-white'>
        <header className='flex flex-col items-center'>
          <Logo />
          <Heading size='lg' className='mt-4'>
            Ignite Lab
          </Heading>

          <Text size='lg' className='text-gray-400 mt-3'>
            Faça login e comece a usar
          </Text>
        </header>

        <form className='w-full max-w-sm flex flex-col gap-4 items-stretch mt-10'>
          <label htmlFor="email" className='flex flex-col gap-3'>
            <Text className='font-semibold'>Email</Text>
            <TextInput.Root>
              <TextInput.Icon>
                <Envelope />
              </TextInput.Icon>
              <TextInput.Input type='email' id='email' placeholder='name@mail.com' />
            </TextInput.Root>
          </label>

          <label htmlFor="password" className='flex flex-col gap-3'>
            <Text className='font-semibold'>Senha</Text>
            <TextInput.Root>
              <TextInput.Icon>
                <Lock />
              </TextInput.Icon>
              <TextInput.Input type='password' id='password' placeholder='******' />
            </TextInput.Root>
          </label>

          <label htmlFor="remember" className='flex items-center gap-2'>
            <Checkbox id='remember'/>
            <Text size='sm' className='text-gray-200'>Lembrar de mim por 30 dias</Text>
          </label>

          <Button type='submit' className='mt-4'>Entrar</Button>
        </form>

        <footer className='flex flex-col items-center gap-4 mt-8'>
          <Text asChild size='sm'>
            <a href="" className=' text-gray-400 underline hover:text-gray-200'>Esqueceu sua senha?</a>
          </Text>
          <Text asChild size='sm'>
            <a href="" className=' text-gray-400 underline hover:text-gray-200'>Não possui conta? Crie uma agora!</a>
          </Text>
        </footer>
      </div>
    </>
  )
}

