function ProcessUpload() {
  return (
    <div className='flex justify-center items-center gap-1 text-[15px] font-light'>
      <div className='flex flex-col gap-1 justify-center items-center'>
        <div
          className='rounded-[999px] w-10 h-10 border-[#006EDC] border-solid border-2 flex justify-center items-center text-white bg-[#006EDC] 
      '
        >
          1
        </div>
        <div>UploadCV</div>
      </div>
      <div className='w-30 border-blue-300 border-solid border mb-8'></div>
      <div className='flex flex-col gap-1 justify-center items-center'>
        <div
          className='rounded-[999px] w-10 h-10 border-[#006EDC] border-solid border-2 flex justify-center items-center
      '
        >
          2
        </div>
        <div>Add Job</div>
      </div>
      <div className='w-30 border-blue-300 border-solid border mb-8'></div>
      <div className='flex flex-col gap-1 justify-center items-center'>
        <div
          className='rounded-[999px] w-10 h-10 border-[#006EDC] border-solid border-2 flex justify-center items-center
      '
        >
          3
        </div>
        <div>View Result</div>
      </div>
    </div>
  )
}

export default ProcessUpload
