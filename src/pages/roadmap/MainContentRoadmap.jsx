// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

function MainContentRoadmap() {
  return (
    <motion.div
      className='bg-white bg-opacity-80 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-200'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <h2 className='text-lg font-medium text-gray-900'>Roadmap Content</h2>
      <div className='h-20'></div>
    </motion.div>
  )
}

export default MainContentRoadmap
