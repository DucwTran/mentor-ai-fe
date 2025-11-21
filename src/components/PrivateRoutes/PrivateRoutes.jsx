import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { selectCurrentUser } from '~/redux/userSlice'

function PrivateRoutes() {
  const user = JSON.parse(localStorage.getItem('user'))
  const userRedux = useSelector(selectCurrentUser)
  console.log(userRedux)
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
