import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Logout() {
  const navigate = useNavigate()

  localStorage.removeItem('user')

  useEffect(() => {
    navigate('/login')
  }, [navigate])

  return <div></div>
}

export default Logout
