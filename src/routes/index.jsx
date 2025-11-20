import PrivateRoutes from '~/components/PrivateRoutes'
import MainLayout from '~/layouts/MainLayout'
import RegisterLayout from '~/layouts/RegisterLayout'
import Chat from '~/pages/Chat'
import CVMatching from '~/pages/Cv-matching'
import Home from '~/pages/Home'
import Login from '~/pages/Login/Login'
import Register from '~/pages/Regsiter'
import Roadmap from '~/pages/Roadmap'
import Setting from '~/pages/Setting'

export const Routes = [
  {
    path: '/',
    element: <RegisterLayout />,
    children: [
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      }
    ]
  },
  {
    element: <PrivateRoutes />,
    children: [
      {
        path: '/user',
        element: <MainLayout />,
        children: [
          {
            path: 'home',
            element: <Home />
          },
          {
            path: 'roadmap',
            element: <Roadmap />
          },
          {
            path: 'cv-matching',
            element: <CVMatching />
          },
          {
            path: 'chatbox',
            element: <Chat />
          },
          {
            path: 'setting',
            element: <Setting />
          }
        ]
      }
    ]
  }
]
