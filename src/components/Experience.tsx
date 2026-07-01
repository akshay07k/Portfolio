import React from 'react'
import { experienceArray } from '../arrays/experience'
import { useRefContext } from '../contexts'
import { Work, TripOrigin } from '@mui/icons-material'

const Experience: React.FC = () => {

  const { experienceRef } = useRefContext()

  return (
    <div id='experience' ref={experienceRef} className='w-full pt-28 px-8'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5791b5]'>Experience</p>
        <h2 className='py-4 text-3xl sm:text-4xl font-bold m-0 text-gray-800'>Where I've Worked</h2>

        <div className='relative mt-6 flex flex-col gap-8'>
          {/* vertical timeline line */}
          <div className='hidden sm:block absolute left-[19px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-[#306279] to-[#5791b5]'></div>

          {experienceArray.map((exp) => (
            <div key={exp.company + exp.role} className='relative flex flex-col sm:flex-row sm:gap-6'>
              {/* timeline marker */}
              <div className='hidden sm:flex shrink-0 z-10 h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#306279] to-[#5791b5] text-white shadow-lg shadow-gray-400'>
                <Work sx={{ fontSize: 20 }} />
              </div>

              {/* card */}
              <div className='flex-1 p-6 bg-white shadow-xl shadow-gray-400 rounded-xl hover:scale-[1.02] ease-in duration-300'>
                <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-1'>
                  <div>
                    <h3 className='text-xl sm:text-2xl font-bold text-gray-800'>{exp.role}</h3>
                    <p className='text-lg font-semibold text-[#5791b5]'>
                      {exp.company}
                      {exp.location && (
                        <span className='text-gray-600 font-normal'> · {exp.location}</span>
                      )}
                    </p>
                  </div>
                  <span className='inline-block w-fit text-sm font-medium text-white uppercase tracking-wide px-3 py-1 rounded-full bg-gradient-to-r from-[#306279] to-[#5791b5]'>
                    {exp.period}
                  </span>
                </div>

                {/* tech stack pills */}
                <div className='flex flex-wrap gap-2 mt-4'>
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className='text-xs sm:text-sm font-medium px-3 py-1 rounded-full bg-[#306279]/10 text-[#306279] border border-[#5791b5]/30'
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* highlights */}
                <ul className='mt-5 flex flex-col gap-3'>
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className='flex items-start gap-3 text-gray-700'>
                      <span className='mt-[6px] text-[#f15627]'>
                        <TripOrigin sx={{ fontSize: 12 }} />
                      </span>
                      <span className='text-sm sm:text-base leading-relaxed'>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience
