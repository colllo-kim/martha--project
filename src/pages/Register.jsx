import { Card, CardContent } from '@/components/ui/card'
import React, { useContext, useState } from 'react'
import logo from '@/assets/logo.png'
import { Form } from '@/components/ui/form'
import { useNavigate } from 'react-router-dom'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { Button } from '@/components/ui/button'
import { AppContext } from '@/context/AppContext'
import ErrorContainer from '@/comp/ErrorContainer'
import { setTheme, getTheme } from'@/utils/themeUtils';
function Register() {
  const [theme, setThemeState] = useState(getTheme());
  const [showPassword, setShowPassword] = useState(false)
  const { setCurrentUser } = useContext(AppContext)
  const navigate = useNavigate()
  const [error, setError] = useState(null);

  const [userData, setUserData] = useState({
    username:'',
    email: '',
    password: ''
  })

  

  const togglePassword = () => setShowPassword(!showPassword)

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value })
  }

  const handleRegister = (e) => {
    e.preventDefault()

  
  }

  return (
    <div className='flex flex-col gap-6 w-full h-screen justify-center items-center bg-gray-200 px-4'>
      <Card className='w-full max-w-3xl overflow-hidden'>
        <CardContent className='grid grid-cols-1 md:grid-cols-2 p-0'>
          <Form>
            <form className='p-6 md:p-8 bg-card' onSubmit={handleRegister}>
              <div className='flex flex-col gap-6'>
                <div className='flex flex-col items-center text-center'>
                  <h1 className='text-2xl font-bold'>Welcome </h1>
                  <p className='text-muted-foreground'>Create an account</p>
                </div>

                <div className='grid gap-3'>
                <div>
  <label className='block mb-1'>Username</label>
  <input
    type='text'
    name='username'
    value={userData.username}
    onChange={handleChange}
    className={`w-full p-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500
      ${theme === 'dark' ? 'bg-gray-800 text-white placeholder:text-gray-500' : 'bg-white text-black placeholder:text-gray-400'}
    `}
    placeholder='@username'
    required
  />
</div>
                <div>
  <label className='block mb-1'>Email</label>
  <input
    type='email'
    name='email'
    value={userData.email}
    onChange={handleChange}
    className={`w-full p-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500
      ${theme === 'dark' ? 'bg-gray-800 text-white placeholder:text-gray-500' : 'bg-white text-black placeholder:text-gray-400'}
    `}
    placeholder='Email'
    required
  />
</div>
<div className='relative'>
  <label className='block mb-1'>Password</label>
  <div className='relative'>
    <input
      type={showPassword ? 'text' : 'password'}
      name='password'
      value={userData.password}
      onChange={handleChange}
      className={`w-full py-2 pl-3 pr-10 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500
        ${theme === 'dark' ? 'bg-gray-800 text-white placeholder:text-gray-500' : 'bg-white text-black placeholder:text-gray-400'}
      `}
      placeholder='Password'
      required
    />
    <button
      type='button'
      className={`absolute inset-y-0 right-3 flex items-center text-lg
        ${theme === 'dark' ? 'text-gray-200' : 'text-gray-600'}
      `}
      onClick={togglePassword}
    >
      {showPassword ? <FaEyeSlash /> : <FaEye />}
    </button>
  </div>
</div>

   {error && <ErrorContainer message={error} />}

   <Button type='submit' className='hover:bg-green-600  mt-[20px] transition'>
                    Register
                  </Button>             

                  <div className='relative text-center text-sm'>
                    <span className='bg-card text-muted-foreground relative z-10 px-2'>
                      or continue with
                    </span>
                  </div>

                  <div className='grid grid-cols-2 gap-4'>
                    <Button variant='outline' type='button' className='w-full'>
                      Google
                    </Button>
                    <Button variant='outline' type='button' className='w-full'>
                      Github
                    </Button>
                  </div>
                </div>

                <p className='text-center mt-4 text-blue-500'>
                  Already have an account?{' '}
                  <span
                    onClick={() => navigate('/login')}
                    className='font-bold  cursor-pointer'
                  >
                    Login
                  </span>
                </p>
              </div>
            </form>
          </Form>

          <div className='bg-green-800 hidden md:flex flex-col gap-y-4 items-center justify-center p-4'>
            <img className='h-24 w-24' src={logo} alt='Logo' />
            <p className='text-2xl font-semibold text-red-400'>Environment</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Register
