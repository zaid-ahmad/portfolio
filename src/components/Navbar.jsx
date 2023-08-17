import { Link } from 'react-scroll'
import resume from '../assets/resume.pdf'
import { useState } from 'react'
import Hamburger from 'hamburger-react'

function Navbar() {
  const [isOpen, setOpen] = useState(false)
  const showMenuNav =
    'showMenuNav block absolute w-full h-screen top-0 left-0 flex flex-col justify-evenly items-center text-white transition'
  return (
    <>
      <header className='container justify-center mt-10 hidden md:flex'>
        <ul className='w-[60rem] h-[7rem] p-1 text-white fixed flex items-center justify-center gap-[3.125rem] rounded-full shrink-0 z-50'>
          <li className='text-center text-xl leading-normal cursor-pointer'>
            <Link
              activeClass='active'
              to='home'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li className='text-center text-xl leading-normal cursor-pointer'>
            <Link
              activeClass='active'
              to='about'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About me
            </Link>
          </li>
          <li className='text-center text-xl leading-normal cursor-pointer'>
            <Link
              activeClass='active'
              to='skills'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li className='text-center text-xl leading-normal cursor-pointer'>
            <Link
              activeClass='active'
              to='projects'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li className='text-center text-xl leading-normal cursor-pointer'>
            <Link
              activeClass='active'
              to='contact'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact
            </Link>
          </li>
          <span>|</span>
          <a
            href={resume}
            className='bg-[#FDCB6E] flex items-center gap-3 text-black py-2 px-8 rounded-md font-medium'
            download
          >
            Resume
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='14'
              height='20'
              viewBox='0 0 14 20'
              fill='none'
            >
              <path
                d='M1 19H13M7 1V15M7 15L12 10M7 15L2 10'
                stroke='black'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </a>
        </ul>
      </header>
      <nav>
        <section className='MOBILE-MENU flex md:hidden fixed top-0 right-0 left-0 z-50'>
          <div className='absolute top-0 right-0 px-8 py-8'>
            <Hamburger toggled={isOpen} toggle={setOpen} color='#fff' rounded />
          </div>
          <div className={isOpen ? showMenuNav : 'hidden'}>
            <div className='absolute top-0 right-0 px-8 py-8'>
              <Hamburger
                toggled={isOpen}
                toggle={setOpen}
                color='#fff'
                rounded
              />
            </div>
            <ul className='flex flex-col items-center justify-between min-h-[250px]'>
              <li className='border-b border-gray-400 my-8 uppercase cursor-pointer'>
                <Link
                  activeClass='active'
                  to='home'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Home
                </Link>
              </li>
              <li className='border-b border-gray-400 my-8 uppercase cursor-pointer'>
                <Link
                  activeClass='active'
                  to='about'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  About me
                </Link>
              </li>
              <li className='border-b border-gray-400 my-8 uppercase cursor-pointer'>
                <Link
                  activeClass='active'
                  to='skills'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Skills
                </Link>
              </li>
              <li className='border-b border-gray-400 my-8 uppercase cursor-pointer'>
                <Link
                  activeClass='active'
                  to='projects'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Projects
                </Link>
              </li>
              <li className='border-b border-gray-400 my-8 uppercase cursor-pointer'>
                <Link
                  activeClass='active'
                  to='contact'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </section>

        <ul className='DESKTOP-MENU hidden space-x-8 lg:flex'>
          <li>
            <a href='/about'>About</a>
          </li>
          <li>
            <a href='/portfolio'>Portfolio</a>
          </li>
          <li>
            <a href='/contact'>Contact</a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
