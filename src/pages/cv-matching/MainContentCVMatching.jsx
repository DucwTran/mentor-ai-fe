// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import ProcessUpload from '~/components/CV-Matching/ProcessUpload'
import ResultMatching from '~/components/CV-Matching/ResultMatching'
import UploadCV from '~/components/CV-Matching/UploadCV'
import UploadJD from '~/components/CV-Matching/UploadJD'

function MainContentCVMatching() {
  return (
    <motion.div
      className='bg-white bg-opacity-80 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-200 h-[83vh] overflow-y-scroll overflow-x-hidden'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <h2 className='text-lg font-medium text-gray-900'>
        <ProcessUpload />
        {/* <UploadCV /> */}
        {/* <UploadJD /> */}
        <ResultMatching />
      </h2>
    </motion.div>
  )
}

export default MainContentCVMatching
