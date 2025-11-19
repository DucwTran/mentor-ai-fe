import { Outlet } from 'react-router-dom'
import Sidebar from './SideBar'

function MainLayout() {
  return (
    <div className='flex h-screen bg-gray-100 text-gray-800 overflow-hidden'>
      {/* Background Light */}
      <div className='fixed inset-0 z-0'>
        {/* Soft Gradient Background */}
        <div className='absolute inset-0 bg-linear-to-br from-white via-gray-100 to-gray-200 opacity-80' />

        {/* Blur layer */}
        <div className='absolute inset-0 backdrop-blur-sm' />
      </div>

      <Sidebar />
      <Outlet />
    </div>
  )
}

export default MainLayout
