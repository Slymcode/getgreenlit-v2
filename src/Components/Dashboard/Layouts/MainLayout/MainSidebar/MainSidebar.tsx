import React, { Dispatch, SetStateAction, useState } from 'react'
import { NavLink } from 'react-router-dom'
import eye_circle from '../../../../../assets/eye_circle.png'
import plus_circle from '../../../../../assets/plus_circle.png'
import miniLogo from '../../../../../assets/miniLogo.png'
import greenHalfDot from './../../../../../assets/greenHalfDot.png'
import './MainSidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { CreateSpaceModal } from '../../../../../Components/Dashboard/SpacesComponents/AllSpacesPageComponets/CreateSpaceModal'

interface Props {
  show: Boolean
  setShow: Dispatch<SetStateAction<Boolean>>
  setNestedSidebarShow: Dispatch<SetStateAction<Boolean>>
}
const MainSidebar: React.FC<Props> = (props) => {
  const [showModal, setShowModal] = useState<Boolean>(false)
  
  return (
    <div
      className={`${
        props.show ? 'w-full left-0 z-10 fixed' : 'fixed -left-full'
      } lg:relative lg:left-0 duration-500 block z-10 w-16 h-full pb-20 mainSidebar border-r border-gray-700`}
    >
      <div className="flex items-center justify-between px-2 gap-x-3 h-14 block lg:hidden">
        <div className="flex justify-center items-center">
          <button
            onClick={() => {
              props.setNestedSidebarShow(false)
              props.setShow(false)
            }}
          >
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="text-white text-lg"
            />
          </button>
        </div>
        <div className="flex justify-center items-center">
          <button
            onClick={() => {
              props.setNestedSidebarShow(true)
            }}
          >
            <FontAwesomeIcon
              icon={faArrowRight}
              className="text-white text-lg"
            />
          </button>
        </div>
      </div>

      <div className="block px-2 flex justify-center items-center">
        <NavLink
          to={'/'}
          className="flex items-center justify-center border-b border-gray-700 h-14"
        >
          <img src={miniLogo} alt="miniLogo" className="w-6" />
        </NavLink>
      </div>
      <div className="h-full flex flex-col gap-y-3 overflow-y-auto py-4">
        <NavLink
          to="/greenlit-home"
          className="flex items-center justify-center py-1 text-white text-sm font-semibold relative"
        >
        <div className='p-1 eyeImg rounded-full'>
        <img src={eye_circle} alt="eye_circle" className="w-8" />
        </div>
        <img
          src={greenHalfDot}
          alt="greenHalfDot"
          className="w-1/12 absolute right-0"
        />
        </NavLink>
        <button onClick={() => {setShowModal(true)}} className="flex items-center justify-center py-1 text-white text-sm font-semibold">
          <img src={plus_circle} alt="plus_circle" className="w-6" />
        </button>
      </div>
      {showModal && <CreateSpaceModal setShowAlert={() => {}} showModal={showModal} setShowModal={setShowModal}></CreateSpaceModal>}
    </div>
  )
}

export default MainSidebar
