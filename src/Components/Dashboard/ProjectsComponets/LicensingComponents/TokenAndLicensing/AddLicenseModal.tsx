import React, { useState } from 'react'
import { BasicModal } from '../../../../SubComponents/Modal'
import "./AddLicenseModal.css"
export const AddLicenseModal = (props: any) => {
    const [licenseTemplateImg, setLicenseTemplateImg] = useState<null | any>('')
  return (
    <BasicModal setShowModal={props.setShowLicenseModal} showModal={props.showLicenseModal}>
      <div className="licenseModalMain w-full h-full overflow-hidden rounded-2xl mb-10 ">
        <div className="licenseModalHeader flex items-end justify-between pt-5 px-5 sm:px-8 pb-4">
          <div>
            <p className="text-sm text-white font-semibold">
              Hidden Lakes Cinematic Universe
            </p>
            <h1 className="text-white w-1/2 sm:w-auto sm:text-lg font-bold mt-2">
              Add a license
            </h1>
          </div>
          <button
            onClick={() => {
              props.setShowLicenseModal(false)
            }}
            className="text-white text-xs sm:text-sm font-bold"
          >
            Cancel
          </button>
        </div>
        <div className="licenseModalContent h-full overflow-auto px-5 sm:px-8 py-8 flex flex-col gap-y-10">
        <div className="flex flex-col">
              <label className="text-white text-md font-bold">
              Upload a license template
              </label>
              {licenseTemplateImg ? (
                <div>
                  <img
                    src={URL.createObjectURL(licenseTemplateImg)}
                    alt="logo"
                    className="fileInput mt-4 p-2 h-40 w-full object-cover"
                  />
                  <div className="flex items-center gap-x-2 mt-2">
                    <span className="text-white text-sm underline">
                      hiddennones.jpg
                    </span>
                    <div className="border-r-2 border-white h-3 mt-1"></div>
                    <button onClick={() => {setLicenseTemplateImg("")}} className="text-white text-sm underline">
                      Remove
                    </button>
                  </div>
                </div>
              ) : (
                <label className="fileInput py-8 w-full mt-4 flex justify-center px-3">
                  <input
                    onChange={(e) =>
                      e.target.files instanceof FileList
                        ? setLicenseTemplateImg(e.target.files[0])
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
          <div className='w-full'>
            <h1 className="text-white text-md font-semibold">License name</h1>
            <input
              type="text"
              placeholder="Paste contract address..."
              className=" mt-2 py-3 px-0 w-full text-xs text-white border-b border-0 border-zinc-700 licenseModalInput outline-0 shadow-none bg-transparent"
            />
          </div>
          <div className='w-full'>
            <h1 className="text-white text-md font-semibold">
              License summary
            </h1>
            <input
              type="text"
              placeholder="Enter description..."
              className=" mt-2 py-3 px-0 w-full text-xs text-white border-b border-0 border-zinc-700 licenseModalInput outline-0 shadow-none bg-transparent"
            />
            <p className="text-zinc-500 text-xs text-right mt-1 font-semibold">
              0/2000
            </p>
          </div>
          <div className="flex items-center gap-x-5 mt-5">
            <button
              onClick={() => {
                props.setShowAlert(true);
                props.setShowLicenseModal(false);
              }}
              className="text-white text-xs font-semibold py-2 px-4 rounded-full addLicenseModalBtn"
            >
              Add a License
            </button>
            <button className="text-white text-xs font-semibold">Cancel</button>
          </div>
        </div>
      </div>
    </BasicModal>
  )
}
