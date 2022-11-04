import React, { Dispatch, SetStateAction, useEffect } from 'react'
import MainSidebar from './MainSidebar/MainSidebar'
import "./MainLayout.css"
import { MainNavbar } from './MainNavbar/MainNavbar'
import { Outlet } from 'react-router-dom'
interface Props {
  navHeading: any
  setNestedSidebarShow:Dispatch<SetStateAction<Boolean>>
  showMainSidebar: any
  setShowMainSidebar:Dispatch<SetStateAction<Boolean>>
}
export const MainLayout: React.FC<Props> = (props) => {
    useEffect(() => {
      window.addEventListener("resize", () => {props.setShowMainSidebar(false)})
    }, [props])
  return (
    <div className={`mainLayout fixed w-full h-full`}>
      <div className="h-full w-full flex flex-row">
        <div>
          <MainSidebar
            show={props.showMainSidebar}
            setShow={props.setShowMainSidebar}
            setNestedSidebarShow={props.setNestedSidebarShow}
          />
        </div>
        <div className="w-full h-full children">
          <MainNavbar setShow={props.setShowMainSidebar} navHeading={props.navHeading}></MainNavbar>
          <div className="h-full overflow-y-auto pb-14">
           <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}
