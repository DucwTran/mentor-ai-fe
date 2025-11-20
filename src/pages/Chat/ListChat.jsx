import { Stack } from '@mui/material'
import UserChat from '~/components/Chats/UserChat'

function ListChat() {
  return (
    <Stack
      className='grow-0 pe-3 max-h-[500px] overflow-hidden scrollbar-thin scrollbar-thumb-transparent hover:overflow-y-auto hover:scrollbar-thumb-gray-600 hover:scrollbar-thumb-rounded-lg transition-all duration-300 ease-in-out'
      gap={3}
    >
      <UserChat />
      <UserChat />
      <UserChat />
      <UserChat />
      <UserChat />
      <UserChat />
      <UserChat />
      <UserChat />
      <UserChat />
      <UserChat />
      <UserChat />
      <UserChat />
      {/* <div className='text-gray-500 text-center mt-10 pl-5'>No Conversation</div> */}
    </Stack>
  )
}

export default ListChat
