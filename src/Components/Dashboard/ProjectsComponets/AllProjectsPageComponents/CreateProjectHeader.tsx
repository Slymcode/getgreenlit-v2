import React from 'react'
import './AllProjectsPage.css'
import projectsIcon from './../../../../assets/projectsIcon.png'
export const CreateProjectHeader = () => {
  return (
    <div className="CreateProjectHeader h-60 p-10 flex items-end">
      <div className="flex flex-wrap sm:flex-nowrap gap-y-8 sm:gap-y-0 justify-between items-end w-full">
        <div  className='flex flex-col gap-y-6'>
          <h1 className="CreateProjectHeader_heading text-white font-bold">
            Projects
          </h1>
          <div className='flex items-center gap-x-2'>
            <img src={projectsIcon} alt="projectsIcon" className="w-8" />
            <p className='text-white font-semibold text-xs'>
              Total <br /> 0 Projects
            </p>
          </div>
        </div>
        <button className="px-5 py-2 xl:mr-20 text-white text-xs sm:text-sm createProject_btn rounded-full">
          Create a new project
        </button>
      </div>
    </div>
  )
}
