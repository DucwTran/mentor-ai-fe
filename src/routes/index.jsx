import MainLayout from '~/layouts/MainLayout'
import Chat from '~/pages/Chat'
import Home from '~/pages/home'

export const Routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'chatbox',
        element: <Chat />
      }
    ]
  }
]
