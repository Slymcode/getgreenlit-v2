import React, { useState, useEffect } from 'react'
import './AllSpacesPage.css'
import users_icon from './../../../../assets/users_icon.png'
import { useNavigate } from 'react-router-dom'
import { SpaceMetadata } from '../../../../Pages/Dashboard/SpacePage/SpaceNestedPages/AllSpaces'

interface Props {
  spaces: SpaceMetadata[],
  handleSearch: (searchTerm: string) => void
}

export const AllSpacesCardsList: React.FC<Props> = (props: Props) => {
  let navigate = useNavigate()

  return (
    <div className="m-4 sm:m-10 xl:pr-20">
      <div className="flex flex-col-reverse sm:flex-row gap-y-8 sm:gap-y-0 sm:items-center justify-between">
        <div className="flex items-center gap-x-6">
          <span className="text-2xl font-semibold text-white">All spaces</span>
          <span className="text-lg text-white mt-2">{props.spaces.length}</span>
        </div>
        <div>
          <input
            type={'text'}
            placeholder="Search spaces..."
            onChange={(e) => {
              props.handleSearch(e.target.value)
            }}
            style={{ outline: 'none', boxShadow: 'none' }}
            className="searchInput shadow-none outline-none px-4 py-2 rounded-full w-full sm:w-80 text-sm bg-transparent text-gray-400 font-semibold"
          />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-y-5 xl:gap-y-0 sm:gap-x-5 mt-8">
        {props.spaces.map((data, ind) => (
          <div key={ind + 1} className="col-span-12 sm:col-span-6 xl:col-span-4">
            <div className="border border-gray-700 rounded-xl overflow-hidden">
              <div
                className={`${
                  data.name === 'Nuclear Nerds' ? 'nerdsImg_bg' : ''
                } "flex justify-center w-full  sm:h-48 2xl:h-60 object-cover"`}
              >
                <img
                  src={data.featuredImg}
                  className={`${
                    data.name === 'Nuclear Nerds' ? 'w-3/4' : 'w-full'
                  } sm:h-48 2xl:h-60 object-cover`}
                />
              </div>
              <div className="flex items-center gap-x-5 px-4 py-8">
                <img
                  src={data.avatarImg}
                  className="w-10 h-10 rounded-full"
                />
                <h1 className="text-white font-semibold text-lg">
                  {data.name}
                </h1>
              </div>
              <div className="border-t border-gray-700 flex items-center justify-between p-4">
                <button
                  onClick={() => {
                    navigate(`/all-projects`)
                  }}
                  className={`rounded-full text-white text-sm font-bold px-10 h-6 ${(data.isMember ? "joined_btn" : "join_btn")}`}
                >
                  {(data.isMember) ? 'Joined' : 'Join'}
                </button>
                <div className="flex items-center border border-gray-700 px-2 gap-x-1 py-1 rounded-full">
                  <img src={users_icon} alt="users_icon" className="w-4" />
                  <span className="text-xs text-white">1.2k</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
