import React, { useState } from 'react'

function UploadCV() {
  const [file, setFile] = useState(null)

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0]
    if (selectedFile) {
      setFile(selectedFile)
    }
  }

  return (
    <div className='flex justify-center items-center mt-20'>
      <div className='border-2 border-dashed border-blue-500 p-10 w-80 text-center rounded-xl bg-white shadow-lg hover:border-blue-400 transition-all duration-300'>
        <input type='file' id='file-upload' className='hidden' onChange={handleFileChange} />
        <label htmlFor='file-upload' className='cursor-pointer flex flex-col items-center space-y-2'>
          <span className='text-4xl'>📁</span>
          <span className='text-lg font-medium text-blue-500'>
            {file ? file.name : 'Click to upload a CV'}
          </span>
        </label>
      </div>

      {file && (
        <div className='mt-4 text-gray-700'>
          <p className='text-sm'>Selected file: {file.name}</p>
        </div>
      )}
    </div>
  )
}

export default UploadCV
