import React, { Dispatch, SetStateAction } from 'react'
import './ProjectsSidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import twittIcon from './../../../.././../assets/twittIcon.png'
import discordIcon from './../../../.././../assets/discordIcon.png'
interface Props {
  showProjectsSidebar: Boolean
  setShowProjectsSidebar: Dispatch<SetStateAction<Boolean>>
}
const ProjectsSidebar: React.FC<Props> = (props) => {
  return (
    <div
      className={`${
        props.showProjectsSidebar
          ? 'fixed left-0 z-10 top-0'
          : 'fixed top-0 -left-full'
      } lg:relative lg:left-0 duration-500 block  z-10 w-48 h-full pb-20 mainSidebar border-r border-gray-700`}
    >
      <div className="flex justify-end px-5 items-center h-14 block lg:hidden">
        <button
          onClick={() => {
            props.setShowProjectsSidebar(false)
          }}
        >
          <FontAwesomeIcon icon={faArrowLeft} className="text-white text-lg" />
        </button>
      </div>
      <div className="h-full overflow-y-auto py-4 flex flex-col gap-y-5">
        <NavLink
          to="/all-projects"
          className={({ isActive }) =>
            [
              'px-8 py-1 text-white text-sm font-semibold border-r-4 border-white',
              isActive ? 'border-opacity-100' : 'border-opacity-0 hover:border-opacity-100',
            ]
              .filter(Boolean)
              .join(' ')
          }
        >
          <span>All Projects</span>
        </NavLink>
        <NavLink
          to="/about-projects"
          className={({ isActive }) =>
            [
              'px-8 py-1 text-white text-sm font-semibold border-r-4 border-white',
              isActive ? 'border-opacity-100' : 'border-opacity-0 hover:border-opacity-100',
            ]
              .filter(Boolean)
              .join(' ')
          }
        >
          <span>About</span>
        </NavLink>
        <div className="mx-8 border-b border-gray-700"></div>
        <NavLink
          to="/admin"
          className={({ isActive }) =>
            [
              'px-8 py-1 text-white text-sm font-semibold border-r-4 border-white',
              isActive ? 'border-opacity-100' : 'border-opacity-0 hover:border-opacity-100',
            ]
              .filter(Boolean)
              .join(' ')
          }
        >
          <span>Admin</span>
        </NavLink>
        <NavLink
          to="/space-setting"
          className={({ isActive }) =>
            [
              'px-8 py-1 text-white text-sm font-semibold border-r-4 border-white',
              isActive ? 'border-opacity-100' : 'border-opacity-0 hover:border-opacity-100',
            ]
              .filter(Boolean)
              .join(' ')
          }
        >
          <span>Space settings</span>
        </NavLink>
        <NavLink
          to="/licensing"
          className={({ isActive }) =>
            [
              'px-8 py-1 text-white text-sm font-semibold border-r-4 border-white',
              isActive ? 'border-opacity-100' : 'border-opacity-0 hover:border-opacity-100',
            ]
              .filter(Boolean)
              .join(' ')
          }
        >
          <span>Licensing</span>
        </NavLink>
        <div className="mx-8 border-b border-gray-700"></div>
        <div className="px-8 flex items-center justify-center gap-x-3">
          <img src={twittIcon} alt="twittIcon" className="w-6" />
          <img src={discordIcon} alt="discordIcon" className="w-6" />
        </div>
      </div>
    </div>
  )
}

export default ProjectsSidebar
