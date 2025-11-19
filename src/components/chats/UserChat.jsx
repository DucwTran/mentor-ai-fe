import { Stack } from '@mui/material'

function UserChat() {
  const truncateText = (text) => {
    if (!text) return ''
    let shortText = text.substring(0, 20)
    if (text.length > 20) {
      shortText = shortText + '...'
    }
    return shortText
  }
  return (
    <Stack
      direction='horizontal'
      gap={1}
      className='text-white relative border-b border-gray-400 w-[200px] align-items-center p-2 justify-content-between'
    >
      <div className='d-flex'>
        <div className='w-[100x]'>
          <div className='text-gray-700 text-[14px]'>
            {truncateText('Xin chào mọi người mình là Trần Công Đức đây')}
          </div>
        </div>
      </div>
    </Stack>
  )
}

export default UserChat
