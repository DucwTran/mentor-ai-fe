import React from 'react'

function Input({ type, errorMessage, placeholder, className, name, register, autoComplete }) {
  return (
    <div className={className}>
      <input
        type={type}
        className='p-3 w-full outline-none none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
        placeholder={placeholder}
        autoComplete={autoComplete}
        {...register(name)}
      />
      <div className='mt-1 text-red-600 min-h-5 text-sm'>{errorMessage}</div>
    </div>
  )
}

export default Input
