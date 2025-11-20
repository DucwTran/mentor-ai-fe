import MainLayout from '~/layouts/MainLayout'
import Chat from '~/pages/chat'
import CVMatching from '~/pages/cv-matching'
import Home from '~/pages/home'
import Roadmap from '~/pages/roadmap'
import Setting from '~/pages/setting'

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
