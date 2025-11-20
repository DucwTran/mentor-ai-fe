// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import RoadmapForm from '~/components/roadmap/RoadmapForm'
import RoadmapPipeline from '~/components/roadmap/RoadmapPipeline'

function MainContentRoadmap() {
  return (
    <motion.div
      className='bg-white bg-opacity-80 backdrop-blur-md shadow-lg rounded-xl px-6 pb-10 pt-1  border border-gray-200 h-[83vh] overflow-y-scroll overflow-x-hidden'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <RoadmapForm />
      <RoadmapPipeline />
    </motion.div>
  )
}

export default MainContentRoadmap
