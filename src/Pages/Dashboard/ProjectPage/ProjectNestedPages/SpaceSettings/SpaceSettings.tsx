import React from 'react'
import { SpaceSettingForm } from '../../../../../Components/Dashboard/ProjectsComponets/SpaceSettingComponents/SpaceSettingForm'
import "./SpaceSetting.css"
export const SpaceSettings = () => {
  return (
      <div>
        <div className="spaceSettingHeader h-60 p-10 flex items-end">
          <h1 className="spaceSettingHeader_heading text-white font-bold">
            Space settings
          </h1>
        </div>
        <SpaceSettingForm></SpaceSettingForm>
      </div>
  )
}
