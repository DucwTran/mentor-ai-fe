import { useEffect, useRef } from 'react'
import { Stack } from '@mui/material'
import Message from '~/components/Chats/Message'
import { useForm } from 'react-hook-form'

function ChatBox() {
  const chatContainerRef = useRef(null)
  const { register, handleSubmit, reset } = useForm()

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [])

  // Hàm xử lý khi người dùng gửi tin nhắn
  const onSubmit = (data) => {
    console.log('Message:', data.message)
    // Xử lý tin nhắn gửi đi tại đây, ví dụ: gửi tin nhắn, thêm tin nhắn vào state, v.v.
    reset() // Xóa nội dung input sau khi gửi
  }

  return (
    <Stack gap={4} className='h-[70vh] overflow-y-auto bg-[#f7f7f7] rounded-xl w-[950px]'>
      <Stack gap={3} className='max-h-[70vh] overflow-y-auto px-8 py-5 h-full' ref={chatContainerRef}>
        <Message isMine={true} content={'ff'} />
        <Message isMine={false} content={'s'} />
        <Message isMine={true} content={'sdf'} />
        <Message isMine={true} content={'sdf'} />
        <Message isMine={false} content={'áda'} />
        <Message isMine={true} content={'sdf'} />
        <Message isMine={false} content={'sdf'} />
        <Message isMine={false} content={'df'} />
        <Message isMine={true} content={'ád'} />
        {/* <div className='text-gray-600 mt-20 text-3xl'>Start Chat</div> */}
      </Stack>
      <Stack direction='horizontal' gap={3} className='chat-input grow-0'>
        <form onSubmit={handleSubmit(onSubmit)} className='flex grow gap-2'>
          <input
            type='text'
            placeholder='Type your question...'
            className='grow px-4 py-2 text-gray-700 rounded-xl border border-gray-300 focus:outline-none'
            {...register('message', { required: 'Message is required' })}
          />
          <button type='submit' className='bg-[#4c8bf5] text-white p-3 rounded-md shadow-md'>
            Send
          </button>
        </form>
      </Stack>
    </Stack>
  )
}

export default ChatBox
