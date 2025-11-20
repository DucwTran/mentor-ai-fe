import Header from '~/components/Header'
import MainContentRoadmap from '~/pages/Roadmap/MainContentRoadmap'

const Roadmap = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <Header title='Roadmap' />

      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        <MainContentRoadmap />
      </main>
    </div>
  )
}
export default Roadmap
