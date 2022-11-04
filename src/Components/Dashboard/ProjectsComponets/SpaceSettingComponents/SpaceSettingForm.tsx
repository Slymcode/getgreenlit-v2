import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './SpaceSettingForm.css'
import eye_circle from './../../../../assets/eye_circle.png'
import projectsHeaderImg from './../../../../assets/projectsHeaderImg.png'
import hiddenLakes from './../../../../assets/hiddenLakes.png'
export const SpaceSettingForm = () => {
  let navigate = useNavigate()
  const [logo, setLogo] = useState<null | any>(eye_circle)
  const [bannerImg, setBannerImg] = useState<null | any>(projectsHeaderImg)
  const [featuredImg, setFeaturedImg] = useState<null | any>(hiddenLakes)
  const [spaceTitle, setSpaceTitle] = useState<any>('')
  return (
    <div>
      <div className="SpaceSettingFormMain w-full sm:w-3/4 h-full mb-10">
        <div className="SpaceSettingFormContent h-full overflow-auto px-5 sm:px-8 py-8 flex flex-col gap-y-20">
          <div className="flex flex-col gap-y-10">
            <h1 className="text-white text-2xl font-bold">IP details </h1>
            <div className="flex flex-col gap-y-1">
              <label className="text-white text-lg font-bold">Title</label>
              <input
                type="text"
                onChange={(e) => {
                  setSpaceTitle(e.target.value)
                }}
                placeholder="IP title..."
                className="spaceSettingFormTypeInput text-white bg-transparent text-sm px-0 shadow-none outlin-none"
              />
            </div>
            <div className="flex flex-col gap-y-1">
              <label className="text-white text-lg font-bold">
                Legal custodian of this IP
              </label>
              <input
                type="text"
                placeholder="Enter name..."
                className="spaceSettingFormTypeInput text-white bg-transparent text-sm px-0 shadow-none outlin-none"
              />
            </div>
            <div className="flex flex-col gap-y-1">
              <label className="text-white text-lg font-bold">
                IP Description
              </label>
              <input
                type="text"
                placeholder="Enter description..."
                className="spaceSettingFormTypeInput text-white bg-transparent text-sm px-0 shadow-none outlin-none"
              />
            </div>
            <div className="flex flex-col gap-y-5">
              <label className="text-white text-lg font-bold">Links</label>
              <div className="flex flex-col sm:flex-row gap-y-4 sm:gap-y-0 sm:items-center sm:gap-x-5">
                <label className="text-white text-sm sm:w-32">
                  Official website
                </label>
                <input
                  type="text"
                  placeholder="Website URL..."
                  className="spaceSettingFormTypeInput text-white w-full sm:w-3/5 bg-transparent text-sm px-0 shadow-none outlin-none"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-y-4 sm:gap-y-0 sm:items-center sm:gap-x-5">
                <label className="text-white text-sm sm:w-32">Twitter</label>
                <input
                  type="text"
                  placeholder="Twitter URL..."
                  className="spaceSettingFormTypeInput text-white w-full sm:w-3/5 bg-transparent text-sm px-0 shadow-none outlin-none"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-y-4 sm:gap-y-0 sm:items-center sm:gap-x-5">
                <label className="text-white text-sm sm:w-32">Discord</label>
                <input
                  type="text"
                  placeholder="Discord URL..."
                  className="spaceSettingFormTypeInput text-white w-full sm:w-3/5 bg-transparent text-sm px-0 shadow-none outlin-none"
                />
              </div>
            </div>
            <div className="flex items-center gap-x-3">
              <input
                type="checkbox"
                className="w-4 h-4 p-2 border-2 bg-transparent rounded-md"
              />
              <label className="text-white text-sm">
                Hide this space from the Greenlit homepage
              </label>
            </div>
          </div>
          <div className="flex flex-col gap-y-10">
            <h1 className="text-white text-2xl font-bold">Branding</h1>

            <div className="flex flex-col gap-y-1">
              <label className="text-white text-lg font-bold">Logo</label>
              <span className="text-xs text-white">
                This will display on Greenlit navigation. 800 x 800 recommended.
              </span>
              {logo ? (
                <div>
                  <img
                    src={logo}
                    alt="logo"
                    className="spaceSettingFormFileInput mt-4 w-14 sm:w-20 object-cover"
                  />
                  <div className="flex items-center gap-x-2 mt-2">
                    <span className="text-white text-sm underline">
                      hiddennones.png
                    </span>
                    <div className="border-r-2 border-white h-3 mt-1"></div>
                    <button
                      onClick={() => {
                        setLogo('')
                      }}
                      className="text-white text-sm underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ) : (
                <label className="fileInput py-10 w-full mt-4 flex justify-center px-3">
                  <input
                    onChange={(e) =>
                      e.target.files instanceof FileList
                        ? setLogo(URL.createObjectURL(e.target.files[0]))
                        : null
                    }
                    type="file"
                    className="hidden"
                  />
                  <span className="text-white text-md">
                    Drag & drop or <u>upload</u>
                  </span>
                </label>
              )}
            </div>

            <div className="flex flex-col gap-y-1">
              <label className="text-white text-lg font-bold">
                Banner Image
              </label>
              <span className="text-xs text-white">
                This will be the header image for your space. 1200 x 800
                recommended.
              </span>
              {bannerImg ? (
                <div>
                  <img
                    src={bannerImg}
                    alt="bannerImg"
                    className="spaceSettingFormFileInput mt-4 p-1 h-40 w-full sm:w-2/3 object-cover"
                  />
                  <div className="flex items-center gap-x-2 mt-2">
                    <span className="text-white text-sm underline">
                      slender.jpg
                    </span>
                    <div className="border-r-2 border-white h-3 mt-1"></div>
                    <button
                      onClick={() => {
                        setBannerImg('')
                      }}
                      className="text-white text-sm underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ) : (
                <label className="fileInput py-10 w-full mt-4 flex justify-center px-3">
                  <input
                    onChange={(e) =>
                      e.target.files instanceof FileList
                        ? setBannerImg(URL.createObjectURL(e.target.files[0]))
                        : null
                    }
                    type="file"
                    className="hidden"
                  />
                  <span className="text-white text-md">
                    Drag & drop or <u>upload</u>
                  </span>
                </label>
              )}
            </div>

            <div className="flex flex-col gap-y-1">
              <label className="text-white text-lg font-bold">
                Featured Image
              </label>
              <span className="text-xs text-white">
                This will display on the Greenlit spaces directory and as the
                default image on user projects. 1920 x 1080 recommended.
              </span>
              {featuredImg ? (
                <div>
                  <img
                    src={featuredImg}
                    alt="featuredImg"
                    className="spaceSettingFormFileInput mt-4 p-1 h-52 w-full sm:w-1/2 object-cover"
                  />
                  <div className="flex items-center gap-x-2 mt-2">
                    <span className="text-white text-sm underline">
                      hiddennones.jpg
                    </span>
                    <div className="border-r-2 border-white h-3 mt-1"></div>
                    <button
                      onClick={() => {
                        setFeaturedImg('')
                      }}
                      className="text-white text-sm underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ) : (
                <label className="fileInput py-10 w-full mt-4 flex justify-center px-3">
                  <input
                    onChange={(e) =>
                      e.target.files instanceof FileList
                        ? setFeaturedImg(URL.createObjectURL(e.target.files[0]))
                        : null
                    }
                    type="file"
                    className="hidden"
                  />
                  <span className="text-white text-md">
                    Drag & drop or <u>upload</u>
                  </span>
                </label>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <h1 className="text-white text-2xl font-bold">Admins</h1>
            <span className="text-white text-sm">
              Set the Ethereum addresses that can administrate the content &
              projects under this space.
            </span>
            <input
              type="text"
              placeholder="Key 1..."
              className="adminKeyInput border border-gray-400 rounded-md text-white w-full bg-transparent text-sm px-4 py-3"
              defaultValue={'0xEe7672722c2de2125E1b4D866c04B893AC8F7D22'}
            />
            <input
              type="text"
              placeholder="Key 2..."
              className="adminKeyInput border border-gray-400 rounded-md text-white w-full bg-transparent text-sm px-4 py-3"
              defaultValue={'0xEe7672722c2de2125E1b4D866c04B893AC8F7D22'}
            />
            <div className="flex justify-start">
              <button className="font-bold text-sm text-white">
                + Add an admin
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <h1 className="text-white text-2xl font-bold">Resources</h1>
            <span className="text-white text-sm">
              Use this open text box to add resources for users to learn more
              about your space’s IP.
            </span>
            <input
              type="text"
              placeholder="Enter text..."
              className="adminKeyInput border border-gray-400 rounded-md text-white w-full bg-transparent text-sm px-4 py-3"
            />
          </div>
        </div>
        <div className="flex justify-start p-10">
          <button
            onClick={() =>
              spaceTitle ? navigate(`/all-projects/${spaceTitle}`) : null
            }
            className="text-white text-sm font-semibold rounded-full px-8 py-2 createSpaceFormBtn"
          >
            Save Space Setting
          </button>
        </div>
      </div>
    </div>
  )
}
