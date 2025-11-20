import Header from '~/components/header'
import MainContentCVMatching from '~/pages/cv-matching/MainContentCVMatching'

const CVMatching = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <Header title='CV-Matching' />

      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        <MainContentCVMatching />
      </main>
    </div>
  )
}
export default CVMatching
