/* eslint-disable react/no-unescaped-entities */
function About() {
  return (
    <>
      <section
        id='about'
        className='container w-full h-full md:w-auto flex justify-start items-center p-5 md:mx-24 text-white md:mt-0 md:p-0'
      >
        <div className='flex flex-col md:mt-32'>
          <h2 className='font-lalezar text-6xl'>About me</h2>
          <div className='flex flex-col text-xl'>
            <br />
            <p className='leading-[160%]'>
              I am a software development student at the{' '}
              <strong>Southern Alberta Institute of Technology</strong> and also
              a full stack developer with a passion for creating scalable
              value-induced applications that help people. I am proficient in a
              variety of programming languages and technologies, including{' '}
              <strong>
                HTML, CSS, JavaScript, Python, Node JS, Express and React.
              </strong>
            </p>
            <br />
            <p className='leading-[160%]'>
              I am a highly motivated and results-oriented individual with a
              strong work ethic. I am also a team player and I am always learning something new.
            </p>
            <br />
            <p className='leading-[160%]'>
              Open source is awesome and I have contributed to several open source projects, and I am always 
              looking for new ways to give back to the community.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
