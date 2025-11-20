// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import Header from '~/components/header'
import MainContentHome from '~/pages/home/MainContentHome'

const Home = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <Header title='Home' />

      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        <MainContentHome />
      </main>
    </div>
  )
}
export default Home
