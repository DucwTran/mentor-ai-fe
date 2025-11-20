import React from 'react'
import { Outlet } from 'react-router-dom'
import FooterRegister from '~/components/FooterRegister'
import HeaderRegister from '~/components/HeaderRegister'

function RegisterLayout() {
  return (
    <div className='flex flex-col justify-between'>
      <HeaderRegister />
      <Outlet />
      <FooterRegister />
    </div>
  )
}

export default RegisterLayout
