import { Link } from 'react-router-dom'

function LogoutAccount() {
  return (
    <div className='flex justify-end'>
      <Link
        to={'/logout'}
        className='bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded 
    transition duration-200 mr-[50px]'
      >
        Logout
      </Link>
    </div>
  )
}

export default LogoutAccount
