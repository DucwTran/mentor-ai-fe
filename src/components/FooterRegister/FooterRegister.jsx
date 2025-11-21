import React from 'react'

function FooterRegister() {
  return (
    <footer className='border-t border-gray-200/80 dark:border-gray-800 mt-10 pt-10'>
      <div className='px-4 flex flex-row justify-between items-center gap-6'>
        <div className='flex items-center gap-4'>
          <div className='size-5 text-primary'>
            <svg fill='currentColor' viewBox='0 0 48 48' xmlns='http://www.w3.org/2000/svg'>
              <path
                clipRule='evenodd'
                d='M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z'
                fillRule='evenodd'
              ></path>
            </svg>
          </div>
          <h2 className='text-[#111827] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]'>
            Mentor AI
          </h2>
        </div>
        <nav className='flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-500 dark:text-gray-400'>
          <a className='hover:text-primary' href='#'>
            Về chúng tôi
          </a>
          <a className='hover:text-primary' href='#'>
            Liên hệ
          </a>
          <a className='hover:text-primary' href='#'>
            Điều khoản dịch vụ
          </a>
          <a className='hover:text-primary' href='#'>
            Chính sách bảo mật
          </a>
        </nav>
        <p className='text-sm text-gray-400 dark:text-gray-500'>© 2024 Mentor AI. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default FooterRegister
