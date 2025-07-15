import { Card, CardContent } from '@/components/ui/card'
import React, { useState } from 'react'
import logo from '@/assets/logo.png'
import { Form } from '@/components/ui/form'
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import ErrorContainer from '@/comp/ErrorContainer';

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null)
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    username: '',
    name: '',
    email: '',
    password: '',
    confirm: ''
  });

  const togglePassword = () => setShowPassword(!showPassword);
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const formData = new FormData();
      formData.append('email', userData.email);
      formData.append("password", userData.password);

      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, formData);
      const user = response.FormData
      if (!user) {
        setError('failed to login try again')
      }
    } catch (err) {
      setError(err)
    }
  }

  return (
    <div className='flex flex-col gap-6 w-full h-screen justify-center items-center bg-gray-200 px-4'>
      <Card className='w-full max-w-3xl overflow-hidden p-0'>
        <CardContent className='grid grid-cols-1 md:grid-cols-2 p-0'>
          <Form>
            <form className='p-6 md:p-8 bg-card'>
              <div className='flex flex-col gap-6'>
                <div className='flex flex-col items-center text-center'>
                  <h1 className='text-2xl font-bold'>Welcome</h1>
                  <p className='text-muted-foreground text-balance'>Create an account</p>
                </div>
                <div className='grid gap-3'>
                  <div>
                    <label>Username</label>
                    <input
                      type='text'
                      name='username'
                      value={userData.username}
                      onChange={handleChange}
                      className='w-full p-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500'
                      placeholder='@example'
                    />
                  </div>
                  <div>
                    <label>Email</label>
                    <input
                      type='email'
                      name='email'
                      value={userData.email}
                      onChange={handleChange}
                      className='w-full p-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500'
                      placeholder='Email'
                    />
                  </div>

                  <div className='relative'>
                    <label>Password</label>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name='password'
                      value={userData.password}
                      onChange={handleChange}
                      className='w-full p-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10'
                      placeholder='Password'
                    />
                    <span className='absolute top-10 right-3 cursor-pointer' onClick={togglePassword}>
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>
                  {error && <ErrorContainer message={error} />}
                  <Button className='hover:bg-green-600 transition'>
                    Register
                  </Button>

                  <div className='after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t'>
                    <span className='bg-card text-muted-foreground relative z-10 px-2'>
                      or continue with
                    </span>
                  </div>

                  <div className='grid grid-cols-2 gap-4'>
                    <Button variant="outline" type="button" className='w-full'>
                      Google
                    </Button>
                    <Button variant="outline" type="button" className='w-full'>
                      Github
                    </Button>
                  </div>
                </div>
              </div>
              <p className='text-center mt-4 text-blue-500'>
                Already have an account? <span onClick={() => navigate('/login')} className='font-bold text-black cursor-pointer'>Login</span>
              </p>
            </form>
          </Form>

          <div className='bg-green-800 hidden md:flex flex-col gap-y-4 items-center justify-center p-4'>
            <img className='h-[92px] w-[92px]' src={logo} alt="Logo" />
            <p className='text-2xl font-semibold text-red-400'>Environment</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Register
