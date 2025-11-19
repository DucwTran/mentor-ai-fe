// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import Header from '~/components/Header'
import ChatBox from '~/pages/Chat/ChatBox'
import { Container, Stack } from '@mui/material'
import React from 'react'
import ListChat from '~/pages/Chat/ListChat'

const Chat = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <Header title='Mock Interview with AI Assistant' />

      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        <motion.div
          className='bg-white bg-opacity-80 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-200 flex justify-center items-center max-h-[80vh] overflow-hidden'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className='h-[80vh] mt-auto overflow-hidden z-50'>
            <Stack direction='horizontal' gap={5} className='align-items-start max-h-[80vh] overflow-hidden'>
              <div className='overflow-auto max-h-[80vh] w-[220px]'>
                <ListChat />
              </div>

              <div
                style={{ textAlign: 'center', width: '100%', height: '70vh' }}
                className='rounded-xl overflow-hidden'
              >
                <ChatBox />
              </div>
            </Stack>
          </div>
        </motion.div>
      </main>
    </div>
  )
}

export default Chat
