import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Input from '~/components/Login/Input'
import { loginUser } from '~/redux/userSlice'

const user = {
  email: 'trancongduc@gmail.com',
  password: '123456',
  token: 'abcxyz'
}

export default function Login() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm()

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const onSubmit = handleSubmit((data) => {
    if (data.email === user.email && data.password === user.password) {
      localStorage.setItem('user', JSON.stringify(user))
      dispatch(loginUser(user))
      navigate('/user/home')
    } else {
      if (data.email !== user.email || data.password !== user.password) {
        setError('email', {
          type: 'manual',
          message: 'Email hoặc mật khẩu không chính xác'
        })
        setError('password', {
          type: 'manual',
          message: 'Email hoặc mật khẩu không chính xác'
        })
      }
    }
  })

  return (
    <div className='bg-primary mr-120'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-5 lg:py-12 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='p-10 rounded bg-white shadow-sm' onSubmit={onSubmit}>
              <div className='text-2xl'>Đăng nhập</div>
              <Input
                type='email'
                placeholder='Email'
                className='mt-5'
                name='email'
                register={register}
                errorMessage={errors.email?.message}
              />
              <Input
                type='password'
                placeholder='Password'
                className='mt-2'
                name='password'
                register={register}
                autoComplete='on'
                errorMessage={errors.password?.message}
              />
              <div className='mt-3'>
                <button
                  type='submit'
                  className='w-full text-center py-4 px2 uppercase bg-[#17254E] text-white text-sm hover:bg-[#2544a3]'
                >
                  Đăng nhập
                </button>
              </div>
              <div className='flex items-center justify-center mt-8'>
                <span className='text-gray-400'>Bạn chưa có tài khoản?</span>
                <Link to='/register' className='ml-2 text-[#17254E] font-semibold hover:underline'>
                  Đăng kí
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
