import { Navigate, Outlet } from 'react-router-dom'

function PrivateRoutes() {
  const user = JSON.parse(localStorage.getItem('user'))
  if (!user) {
    return <Navigate to='/login' replace />
  }

  const token = user.token

  if (!token) {
    return <Navigate to='/login' replace />
  }

  return <Outlet />
}
export default PrivateRoutes
