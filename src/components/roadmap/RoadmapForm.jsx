import { useForm } from 'react-hook-form'

function RoadmapForm() {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-4 max-w-sm mx-auto p-4 scale-90'>
      <div className='flex flex-col space-y-2'>
        <label htmlFor='context' className='font-medium text-sm'>
          Context:
        </label>
        <input
          id='context'
          {...register('context', { required: 'Context is required' })}
          type='text'
          placeholder='Enter your career context... '
          className='p-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
        />
      </div>

      <div className='flex flex-col space-y-2'>
        <label htmlFor='job' className='font-medium text-sm'>
          Choose a job:
        </label>
        <select
          id='job'
          {...register('job', { required: 'Please select a job' })}
          className='p-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
        >
          <option value=''>Select...</option>
          <option value='fe'>FE</option>
          <option value='be'>BE</option>
          <option value='ai'>AI</option>
        </select>
      </div>

      <button
        type='submit'
        className='w-full py-2 text-sm bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400'
      >
        Submit
      </button>
    </form>
  )
}

export default RoadmapForm
