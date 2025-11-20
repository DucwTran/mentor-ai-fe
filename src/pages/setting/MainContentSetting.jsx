// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import LogoutAccount from '~/pages/setting/logoutAccount'

function MainContentSetting() {
  return (
    <motion.div
      className='bg-white bg-opacity-80 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-200'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <h2 className='text-lg font-medium text-gray-900'>
        <div className='w-[80%] mx-auto'>
          <div className='flex gap-5 mb-5'>
            <div className='w-[150px] text-gray-600 '>Name:</div> <div className='text-gray-900'>Đức Trần</div>
          </div>
          <div className='flex gap-5 mb-5'>
            <div className='w-[150px] text-gray-600 '>Email:</div>{' '}
            <div className='text-gray-900'>trancongduc0812@gmail</div>
          </div>
          <div className='flex gap-5 mb-5'>
            <div className='w-[150px] text-gray-600'>Status:</div> <div className='text-gray-900'>Active</div>
          </div>
        </div>
      </h2>
      <LogoutAccount />
    </motion.div>
  )
}

export default MainContentSetting
