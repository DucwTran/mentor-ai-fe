import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

function ResultMatching() {
  // Dữ liệu cho biểu đồ: Tương thích giữa CV và JD
  const data = [
    { feature: 'Skills', cvMatch: 85, jdRequirement: 90 },
    { feature: 'Experience', cvMatch: 80, jdRequirement: 85 },
    { feature: 'Education', cvMatch: 65, jdRequirement: 70 },
    { feature: 'Cultural', cvMatch: 65, jdRequirement: 70 }
  ]

  return (
    <div className='result-matching-container p-8'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
        {/* Cột biểu đồ */}
        <div>
          <h2 className='text-xl font-semibold mb-3'>CV vs JD Matching</h2>
          <div className='chart-container mb-8 mx-auto'>
            <ResponsiveContainer width='90%' height={380}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='feature' />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey='cvMatch' fill='#4CAF50' name='CV Match' />
                <Bar dataKey='jdRequirement' fill='#FF9800' name='JD Requirement' />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Cột nhận xét */}
        <div className='evaluation-section'>
          <h3 className='text-xl font-medium mb-3'>Evaluation</h3>
          <div className='grid grid-cols-2 gap-4 scale-90'>
            <div className='evaluation-card p-4 bg-blue-100 rounded-lg shadow-md w-[200px]'>
              <h4 className='font-semibold text-md'>Skills Matching</h4>
              <p className='text-gray-700'>85% </p>
            </div>
            <div className='evaluation-card p-4 bg-green-100 rounded-lg shadow-md w-[200px]'>
              <h4 className='font-semibold text-md'>Experience Level</h4>
              <p className='text-gray-700'>80%</p>
            </div>
            <div className='evaluation-card p-4 bg-yellow-100 rounded-lg shadow-md w-[200px]'>
              <h4 className='font-semibold text-md'>Cultural Fit</h4>
              <p className='text-gray-700'>75%</p>
            </div>
            <div className='evaluation-card p-4 bg-red-100 rounded-lg shadow-md w-[200px]'>
              <h4 className='font-semibold text-md'>Education</h4>
              <p className='text-gray-700'>70%</p>
            </div>
          </div>
          <div className='mt-5'>
            <div className='mb-3 text-xl'>Nhận xét</div>
            <div>
              <div className='mb-2 font-light'>
                <span className='font-medium'>Skills: </span> Em cần phải thêm abcdefx Em cần phải thêm abcdefx Em cần
                phải thêm abcdefx
              </div>
              <div className='mb-2 font-light'>
                <span className='font-medium'>Experience: </span> Em cần phải thêm abcdefx Em cần phải thêm abcdefx Em
                cần phải thêm abcdefx
              </div>
              <div className='mb-2 font-light'>
                <span className='font-medium'>Education: </span> Em cần phải thêm abcdefx Em cần phải thêm abcdefx Em
                cần phải thêm abcdefx
              </div>
              <div className='mb-2 font-light'>
                <span className='font-medium'>Cultural: </span> Em cần phải thêm abcdefx Em cần phải thêm abcdefx Em cần
                phải thêm abcdefx
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResultMatching
