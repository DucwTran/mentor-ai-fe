import React from 'react'
import { useNavigate } from 'react-router-dom'
import CastForEducationIcon from '@mui/icons-material/CastForEducation'
import DescriptionIcon from '@mui/icons-material/Description'
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer'

const LandingPage = () => {
  const navigate = useNavigate()
  return (
    <div className='bg-background-light dark:bg-background-dark font-display text-[#111827] dark:text-gray-200'>
      <div className='relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden'>
        <div className='layout-container flex h-full grow flex-col'>
          <div className='flex flex-1 justify-center py-5'>
            <div className='layout-content-container flex flex-col w-full max-w-5xl flex-1'>
              {/* TopNavBar */}
              <header className='-mt-5 sticky top-0 z-50 flex items-center justify-between whitespace-nowrap bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm border-b border-solid border-gray-200/50 dark:border-gray-700/50 px-6 sm:px-10 py-3'>
                <div className='flex items-center gap-4 text-primary'>
                  <div className='size-6'>
                    <svg fill='currentColor' viewBox='0 0 48 48' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        clipRule='evenodd'
                        d='M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z'
                        fillRule='evenodd'
                      ></path>
                    </svg>
                  </div>
                  <h2 className='text-[#111827] dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]'>
                    Mentor AI
                  </h2>
                </div>
                <div className='hidden md:flex flex-1 justify-end gap-8'>
                  <nav className='flex items-center gap-9'>
                    <a
                      className='text-[#111827] dark:text-gray-300 text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary'
                      href='#'
                    >
                      Lộ trình
                    </a>
                    <a
                      className='text-[#111827] dark:text-gray-300 text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary'
                      href='#'
                    >
                      CV Matching
                    </a>
                    <a
                      className='text-[#111827] dark:text-gray-300 text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary'
                      href='#'
                    >
                      Interview with AI
                    </a>
                  </nav>
                  <div className='flex gap-2'>
                    <button className='flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-gray-200 dark:bg-gray-800 text-[#111827] dark:text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-gray-300 dark:hover:bg-gray-700'>
                      <span
                        className='truncate'
                        onClick={() => {
                          navigate('/login')
                        }}
                      >
                        Đăng nhập
                      </span>
                    </button>
                    <button className='flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary bg-gray-200 text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-90'>
                      <span
                        className='truncate'
                        onClick={() => {
                          navigate('/register')
                        }}
                      >
                        Đăng ký
                      </span>
                    </button>
                  </div>
                </div>
                <button className='md:hidden flex items-center justify-center rounded-lg p-2 text-[#111827] dark:text-white'>
                  <span className='material-symbols-outlined'>menu</span>
                </button>
              </header>

              <main>
                {/* HeroSection */}
                <section className='py-16 sm:py-24'>
                  <div className='@container'>
                    <div className='flex flex-col-reverse gap-8 px-4 py-10 @[864px]:flex-row @[864px]:items-center'>
                      <div className='flex flex-col gap-6 @[480px]:min-w-[400px] @[480px]:gap-8 @[864px]:justify-center'>
                        <div className='flex flex-col gap-4 text-left'>
                          <h1 className='text-[#111827] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl'>
                            Định hướng sự nghiệp của bạn với Mentor Trí tuệ nhân tạo.
                          </h1>
                          <p className='text-gray-600 dark:text-gray-300 text-base font-normal leading-normal @[480px]:text-lg'>
                            Mentor AI sử dụng công nghệ để xây dựng lộ trình cá nhân hóa, tối ưu CV và đưa ra lời khuyên
                            chuyên nghiệp, giúp bạn phát triển sự nghiệp.
                          </p>
                        </div>
                        <button className='flex w-fit min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90'>
                          <span className='truncate'>Bắt đầu miễn phí</span>
                        </button>
                      </div>
                      <div
                        className='w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl @[480px]:h-auto @[480px]:min-w-[400px] @[864px]:w-full'
                        style={{
                          backgroundImage:
                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBKD3RnyapG4uKixYxZVmdZOZBbKRqi68um14jk418xKrwoGqpd1KraqpO1bfRbViJL-WHsnbKHCYUUKjcDmO_PxUqIRpsj_I_Bzne6VR_lmbhgW3SfK8OZaD5X4U-0WLOni26c3nuY29jvYaoyBZ8sK1RnN8Mbl3f1EpPRn7H3sgAtii7zi4j1_77v2hNbQnYrozpPoNyqkCJZd4iqZaNUXxhNQWu-GSIPi8qGVYIo4_LPVvgBQfH57bNFDt5-sDgoNB3-bD0exRY')"
                        }}
                      ></div>
                    </div>
                  </div>
                </section>

                {/* FeatureSection */}
                <section className='bg-white dark:bg-background-dark py-16 sm:py-24'>
                  <div className='flex flex-col gap-12 px-4 @container'>
                    <div className='flex flex-col gap-4 text-center items-center'>
                      <h2 className='text-[#111827] dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em] sm:text-4xl max-w-2xl'>
                        Những công cụ giúp bạn bứt phá
                      </h2>
                      <p className='text-gray-600 dark:text-gray-300 text-base font-normal leading-normal max-w-3xl'>
                        Tận dụng sức mạnh của AI để xây dựng lộ trình sự nghiệp, tối ưu hóa CV cho từng công việc và
                        nhận tư vấn chuyên nghiệp mọi lúc, mọi nơi.
                      </p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                      <div className='flex flex-1 items-center gap-4 rounded-xl border border-gray-200/80 dark:border-gray-800 bg-background-light dark:bg-gray-900/50 p-6 flex-col'>
                        <div className='text-primary'>
                          <span className='material-symbols-outlined text-xl'>
                            <CastForEducationIcon />
                          </span>
                        </div>
                        <div className='flex flex-col gap-1'>
                          <h3 className='text-[#111827] dark:text-white text-lg font-bold leading-tight text-center'>
                            Lộ trình cá nhân hóa
                          </h3>
                          <p className='text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal text-center'>
                            AI phân tích mục tiêu và kỹ năng để tạo ra một bản đồ phát triển sự nghiệp rõ ràng và hiệu
                            quả.
                          </p>
                        </div>
                      </div>
                      <div className='flex flex-1 items-center gap-4 rounded-xl border border-gray-200/80 dark:border-gray-800 bg-background-light dark:bg-gray-900/50 p-6 flex-col'>
                        <div className='text-primary'>
                          <span className='material-symbols-outlined text-4xl'>
                            <DescriptionIcon />
                          </span>
                        </div>
                        <div className='flex flex-col gap-1'>
                          <h3 className='text-[#111827] dark:text-white text-lg font-bold leading text-center '>
                            Tối ưu CV với AI
                          </h3>
                          <p className='text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal text-center'>
                            Phân tích CV, so khớp với mô tả công việc và đưa ra gợi ý cải thiện để tăng cơ hội trúng
                            tuyển.
                          </p>
                        </div>
                      </div>
                      <div className='flex flex-1 items-center gap-4 rounded-xl border border-gray-200/80 dark:border-gray-800 bg-background-light dark:bg-gray-900/50 p-6 flex-col'>
                        <div className='text-primary'>
                          <span className='material-symbols-outlined text-4xl'>
                            <QuestionAnswerIcon />
                          </span>
                        </div>
                        <div className='flex flex-col gap-1'>
                          <h3 className='text-[#111827] dark:text-white text-lg font-bold leading-tight text-center'>
                            Hỏi đáp 24/7
                          </h3>
                          <p className='text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal text-center'>
                            Trợ lý AI luôn sẵn sàng trả lời các câu hỏi về nghề nghiệp, giúp bạn vượt qua mọi thử thách.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Testimonials Section */}
                <section className='py-16 sm:py-24'>
                  <div className='flex flex-col gap-12 px-4'>
                    <h2 className='text-[#111827] dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em] sm:text-4xl text-center'>
                      Xem người dùng nói gì về chúng tôi
                    </h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                      <div className='flex flex-col gap-4 rounded-xl border border-gray-200/80 dark:border-gray-800 bg-white dark:bg-background-dark p-6'>
                        <p className='text-gray-600 dark:text-gray-300'>
                          "Mentor AI đã thay đổi hoàn toàn cách tôi tiếp cận sự nghiệp. Lộ trình được cá nhân hóa thật
                          sự chi tiết và hữu ích. Tôi đã tìm được công việc mơ ước chỉ sau 2 tháng!"
                        </p>
                        <div className='flex items-center gap-4 mt-auto pt-4'>
                          <img
                            className='size-12 rounded-full object-cover'
                            alt='Avatar of An Nguyen'
                            src='https://lh3.googleusercontent.com/aida-public/AB6AXuCRCYAgWRWDPS-OCcMsRsZAihH0BxbN6enyyFOlaO8r0amM7R1S8e7vakqGQITBt_gOTbqtx7xDL-dK89Xb0_odi067qAv-3LNXNJO9c_r3AA6tnLKVVG5R0cwLi5_mnkpe-HeYJY9kj5_jGnIRGwzpj0Y_TSmh6KzMr8pzIyekjcuIH6LtcReBiBv3cXcDY_jzABZEtvGZb6jlsalqH8R-cOV5EZokqNQFzByIiRfyA4juYxLq01HL5xTDFMc30l27R2rkm3DdAdk'
                          />
                          <div>
                            <p className='font-bold text-[#111827] dark:text-white'>An Nguyễn</p>
                            <p className='text-sm text-gray-500 dark:text-gray-400'>Software Engineer</p>
                          </div>
                        </div>
                      </div>
                      {/* Similar testimonial sections */}
                    </div>
                  </div>
                </section>

                {/* Final CTA Section */}
                <section className='py-16 sm:py-24'>
                  <div className='rounded-xl bg-primary/10 dark:bg-primary/20 p-8 sm:p-16 flex flex-col items-center text-center gap-6'>
                    <h2 className='text-[#111827] dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em] sm:text-4xl'>
                      Sẵn sàng để nâng tầm sự nghiệp của bạn?
                    </h2>
                    <p className='text-gray-600 dark:text-gray-300 max-w-xl'>
                      Bắt đầu hành trình phát triển chuyên nghiệp của bạn ngay hôm nay. Đăng ký miễn phí và khám phá
                      tiềm năng của bạn với sự hỗ trợ từ AI.
                    </p>
                    <button className='flex min-w-[84px] w-fit max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 mt-2'>
                      <span className='truncate'>Đăng ký ngay</span>
                    </button>
                  </div>
                </section>
              </main>

              {/* Footer */}
              <footer className='border-t border-gray-200/80 dark:border-gray-800 mt-16 py-10'>
                <div className='px-4 flex flex-col sm:flex-row justify-between items-center gap-6'>
                  <div className='flex items-center gap-4'>
                    <div className='size-5 text-primary'>
                      <svg fill='currentColor' viewBox='0 0 48 48' xmlns='http://www.w3.org/2000/svg'>
                        <path
                          clipRule='evenodd'
                          d='M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z'
                          fillRule='evenodd'
                        ></path>
                      </svg>
                    </div>
                    <h2 className='text-[#111827] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]'>
                      Mentor AI
                    </h2>
                  </div>
                  <nav className='flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-500 dark:text-gray-400'>
                    <a className='hover:text-primary' href='#'>
                      Về chúng tôi
                    </a>
                    <a className='hover:text-primary' href='#'>
                      Liên hệ
                    </a>
                    <a className='hover:text-primary' href='#'>
                      Điều khoản dịch vụ
                    </a>
                    <a className='hover:text-primary' href='#'>
                      Chính sách bảo mật
                    </a>
                  </nav>
                  <p className='text-sm text-gray-400 dark:text-gray-500'>© 2024 Mentor AI. All rights reserved.</p>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
