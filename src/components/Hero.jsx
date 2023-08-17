/* eslint-disable react/jsx-no-target-blank */
import { Link } from 'react-scroll'

import Gmail from '../assets/gmail.png'

function Hero() {
  return (
    <>
      <main
        className='container md:w-full flex flex-col items-start md:items-center h-screen md:p-0'
        id='home'
      >
        <div className='flex justify-start items-center w-screen md:w-full h-full p-5'>
          <div className='inline-flex flex-col items-start gap-4 md:gap-10 md:ml-24 '>
            <div className='flex flex-col items-start gap-8'>
              <div className='flex flex-col'>
                <h1 className='text-white font-lalezar text-7xl md:text-9xl'>
                  Hi<span className='text-[#FDCB6E]'>,</span> I am Zaid Ahmad
                </h1>
                <h2 className='text-white text-2xl md:text-4xl font-light'>
                  Full Stack Developer
                </h2>
              </div>
              <a
                href='https://drive.google.com/file/d/1A_h9ATtqbZNJmtYESAdTr6z_3gAADcBm/view?usp=sharing'
                className='bg-[#FDCB6E] text-black py-2 px-6 md:text-base text-sm md:px-12 rounded-md font-medium'
                target='_blank'
              >
                View Resume
              </a>
            </div>
            <div className='flex items-center gap-7'>
              <a href='https://github.com/zaid-ahmad' target='_blank'>
                <div>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='45'
                    height='55'
                    viewBox='0 0 55 55'
                    fill='none'
                  >
                    <path
                      d='M24.9792 4.8125C14.4375 5.95834 5.95835 14.4375 4.81252 24.75C3.66669 35.5208 9.85419 45.1458 19.25 48.8125C19.9375 49.0417 20.625 48.5833 20.625 47.6667V44C20.625 44 19.7084 44.2292 18.5625 44.2292C15.3542 44.2292 13.9792 41.4792 13.75 39.875C13.5209 38.9583 13.0625 38.2708 12.375 37.5833C11.6875 37.3542 11.4584 37.3542 11.4584 37.125C11.4584 36.6667 12.1459 36.6667 12.375 36.6667C13.75 36.6667 14.8959 38.2708 15.3542 38.9583C16.5 40.7917 17.875 41.25 18.5625 41.25C19.4792 41.25 20.1667 41.0208 20.625 40.7917C20.8542 39.1875 21.5417 37.5833 22.9167 36.6667C17.6459 35.5208 13.75 32.5417 13.75 27.5C13.75 24.9792 14.8959 22.4583 16.5 20.625C16.2709 20.1667 16.0417 19.0208 16.0417 17.4167C16.0417 16.5 16.0417 15.125 16.7292 13.75C16.7292 13.75 19.9375 13.75 23.1459 16.7292C24.2917 16.2708 25.8959 16.0417 27.5 16.0417C29.1042 16.0417 30.7084 16.2708 32.0834 16.7292C35.0625 13.75 38.5 13.75 38.5 13.75C38.9584 15.125 38.9584 16.5 38.9584 17.4167C38.9584 19.25 38.7292 20.1667 38.5 20.625C40.1042 22.4583 41.25 24.75 41.25 27.5C41.25 32.5417 37.3542 35.5208 32.0834 36.6667C33.4584 37.8125 34.375 39.875 34.375 41.9375V47.8958C34.375 48.5833 35.0625 49.2708 35.9792 49.0417C44.4584 45.6042 50.4167 37.3542 50.4167 27.7292C50.4167 13.9792 38.7292 3.20834 24.9792 4.8125Z'
                      fill='white'
                    />
                  </svg>
                </div>
              </a>
              <a href='https://twitter.com/zaidahmad__dev' target='_blank'>
                <div>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='40'
                    height='55'
                    viewBox='0 0 55 55'
                    fill='none'
                  >
                    <g clipPath='url(#clip0_1_35)'>
                      <path
                        d='M55.0688 11.4813C53.0363 12.3836 50.8578 12.9894 48.5676 13.2644C50.9051 11.8637 52.7012 9.64648 53.5434 7.0082C51.3606 8.30156 48.9328 9.24257 46.359 9.74961C44.2965 7.54961 41.3574 6.17891 38.1047 6.17891C31.857 6.17891 26.791 11.2406 26.791 17.4883C26.791 18.3734 26.8941 19.2371 27.0875 20.0664C17.6859 19.5938 9.3543 15.0906 3.77265 8.24571C2.79726 9.92149 2.24297 11.8637 2.24297 13.9348C2.24297 17.8578 4.23672 21.3211 7.27461 23.3535C5.41836 23.2934 3.67383 22.782 2.14844 21.9356C2.14844 21.9828 2.14844 22.0301 2.14844 22.0774C2.14844 27.5602 6.05001 32.1277 11.2191 33.1719C10.2738 33.4297 9.27265 33.5672 8.2414 33.5672C7.51094 33.5672 6.80196 33.4985 6.11015 33.361C7.5539 37.8512 11.7305 41.1297 16.6762 41.2199C12.809 44.2535 7.93203 46.0582 2.62969 46.0582C1.71446 46.0582 0.816405 46.0067 -0.0644531 45.8992C4.9371 49.1133 10.884 50.9824 17.2734 50.9824C38.0789 50.9824 49.457 33.7477 49.457 18.8031C49.457 18.3133 49.4441 17.8192 49.427 17.3379C51.6355 15.7438 53.552 13.75 55.0688 11.4813Z'
                        fill='white'
                      />
                    </g>
                    <defs>
                      <clipPath id='clip0_1_35'>
                        <rect width='55' height='55' fill='white' />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </a>
              <a href='mailto:zaidd250@gmail.com'>
                <div>
                  <img src={Gmail} alt='gmail' className='w-10' />
                </div>
              </a>
              <a
                href='https://www.linkedin.com/in/zaidahmad25/'
                target='_blank'
              >
                <div>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='38'
                    height='47'
                    viewBox='0 0 47 47'
                    fill='none'
                  >
                    <path
                      d='M40.7 0.399994H5.5C2.464 0.399994 0 2.86399 0 5.89999V41.1C0 44.136 2.464 46.6 5.5 46.6H40.7C43.736 46.6 46.2 44.136 46.2 41.1V5.89999C46.2 2.86399 43.736 0.399994 40.7 0.399994ZM14.3 18V38.9H7.7V18H14.3ZM7.7 11.917C7.7 10.377 9.02 9.19999 11 9.19999C12.98 9.19999 14.223 10.377 14.3 11.917C14.3 13.457 13.068 14.7 11 14.7C9.02 14.7 7.7 13.457 7.7 11.917ZM38.5 38.9H31.9C31.9 38.9 31.9 28.714 31.9 27.9C31.9 25.7 30.8 23.5 28.05 23.456H27.962C25.3 23.456 24.2 25.722 24.2 27.9C24.2 28.901 24.2 38.9 24.2 38.9H17.6V18H24.2V20.816C24.2 20.816 26.323 18 30.591 18C34.958 18 38.5 21.003 38.5 27.086V38.9Z'
                      fill='white'
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className='md:flex justify-center w-full mt-[-9rem] md:mt-[-12rem] hidden '>
          <Link
            activeClass='active'
            to='about'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='104'
              height='123'
              viewBox='0 0 104 123'
              fill='none'
              className='cursor-pointer lines md:w-full w-16'
            >
              <path
                d='M102.5 71L51.75 121.75L1 71'
                stroke='white'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M102.5 35L51.75 85.75L1 35'
                stroke='#FDCB6E'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M102.5 1L51.75 51.75L1 1'
                stroke='white'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </Link>
        </div>
      </main>
    </>
  )
}

export default Hero
