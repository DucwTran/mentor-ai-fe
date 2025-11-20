import { BarChart2, Menu, Settings, ShoppingBag, Users, Home } from 'lucide-react'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const SIDEBAR_ITEMS = [
  { name: 'HOME', icon: Home, color: '#6E5f14', href: 'home' },
  { name: 'ROADMAP', icon: BarChart2, color: '#6366f1', href: 'roadmap' },
  { name: 'CV MATCHING', icon: ShoppingBag, color: '#8B5CF6', href: 'cv-matching' },
  { name: 'CHATBOX', icon: Users, color: '#EC4899', href: 'chatbox' },
  { name: 'SETTINGS', icon: Settings, color: '#6EE7B7', href: 'setting' }
]

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [activeTab, setActiveTab] = useState('HOME')

  return (
    <motion.div
      className={`relative z-10 transition-all duration-300 ease-in-out flex-0 ${isSidebarOpen ? 'w-64' : 'w-20'}`}
      animate={{ width: isSidebarOpen ? 256 : 80 }}
    >
      <div className='h-full bg-white/80 backdrop-blur-md p-4 flex flex-col border-r border-gray-200 shadow-sm'>
        {/* Toggle button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className='p-2 rounded-full hover:bg-gray-100 transition-colors max-w-fit'
        >
          <Menu size={24} />
        </motion.button>

        {/* Navigation */}
        <nav className='mt-8 grow'>
          {SIDEBAR_ITEMS.map((item) => (
            <Link key={item.href} to={item.href} onClick={() => setActiveTab(item.name)}>
              <motion.div
                className={`flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-100 transition-colors mb-2 ${activeTab === item.name ? 'bg-gray-100 scale-105 shadow-md' : ''}`}
              >
                <item.icon size={20} style={{ color: item.color, minWidth: '20px' }} />

                <AnimatePresence>
                  {isSidebarOpen && (
                    <motion.span
                      className='ml-4 whitespace-nowrap text-gray-800'
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: 'auto' }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.2, delay: 0.15 }}
                    >
                      {item.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>
          ))}
        </nav>
      </div>
    </motion.div>
  )
}

export default Sidebar
