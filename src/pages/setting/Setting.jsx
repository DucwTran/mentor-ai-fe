import Header from '~/components/Header'
import MainContentSetting from '~/pages/setting/MainContentSetting'

const Setting = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <Header title='Setting' />

      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        <MainContentSetting />
      </main>
    </div>
  )
}
export default Setting
