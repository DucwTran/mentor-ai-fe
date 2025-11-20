import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import HomeIcon from '@mui/icons-material/Home'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

function HeaderRegister() {
  return (
    <div className='bg-[#17254E] flex items-center justify-between 2xl:justify-around h-[50px] text-white'>
      <div className='flex sm:gap-5 2xl:gap-7'>
        <div className='flex items-center gap-3 '>
          <PhoneIcon style={{ color: '#FFD25D' }} />
          <span className='sm:hidden 2xl:inline-block'>0395827485</span>
        </div>
        <div className='flex items-center gap-3  '>
          <EmailIcon style={{ color: '#FFD25D' }} />
          <span className='sm:hidden 2xl:inline-block'>trancongduc0812@gmail.com</span>
        </div>
        <div className='flex items-center gap-3'>
          <HomeIcon style={{ color: '#FFD25D' }} />
          <span className='sm:hidden 2xl:inline-block'>Đại học Bách Khoa Đà Nẵng</span>
        </div>
      </div>
      <div className='bg-[#FFD25D] text-[#17254E] flex items-center gap-4 px-4 h-full'>
        <a href='https://www.facebook.com/ducnguyen.ductran' target='_blank'>
          <FacebookIcon />
        </a>
        <a>
          <InstagramIcon />
        </a>
        <a>
          <YouTubeIcon />
        </a>
        <a>
          <LinkedInIcon />
        </a>
      </div>
    </div>
  )
}

export default HeaderRegister
