import React, { useEffect, useState } from 'react'
import { CreateStakingTierModal } from './CreateStakingTierModal'
import './StakingTier.css'
import quesCircleIcon from './../../../../../assets/quesCircleIcon.png'
export const StakingTier = (props:any) => {
  const [showStakingModal, setShowStakingModal] = useState<any>(false)
  const [stakingData, setStakingData] = useState<any>([])
  const [activeStakings, setActiveStakings] = useState<any>([1, 2])
  const handleActiveStakings = (val: any) => {
    let d = activeStakings && activeStakings.find((ele: any) => ele === val)
    let res = false
    if (d) {
      res = true
    }
    return res
  }
  const handleSwitch = (e:any ,val:any) => {
    if (e.target.checked) {
      setActiveStakings([...activeStakings, val])
    } else {
      let  res = activeStakings.filter((ele:any) => ele !== val)
      setActiveStakings(res)
    }
  }
  useEffect(() => {
    setTimeout(() => {
      props.setShowAlert(false)
    }, 5000)
  }, [props])
  return (
    <div className="w-full md:w-5/6 px-5 py-10 sm:p-10">
      <div className="flex items-center justify-between">
        <h1 className="text-white text-2xl font-bold">Staking Tiers</h1>
        <button
          onClick={() => {
            setShowStakingModal(true)
          }}
          className=" text-white text-sm font-semibold px-5 py-1 rounded-full addToken-btn"
        >
          Create a staking tier
        </button>
      </div>
      <p className="text-white text-sm mt-5">
        Configure the pre-requisites for staking, the amount of tokens required,
        and licenses. At least once tier must be added in
        <br /> order for token holders to stake.
      </p>
      {showStakingModal && (
        <CreateStakingTierModal
        setShowAlert={props.setShowAlert}
          showStakingModal={showStakingModal}
          setShowStakingModal={setShowStakingModal}
          setStakingData={setStakingData}
        ></CreateStakingTierModal>
      )}
      {stakingData && stakingData.length > 0 ? (
        <div className="flex flex-col gap-y-5 mt-6">
          {stakingData &&
            stakingData.length > 0 &&
            stakingData.map((data: any, ind: any) => (
              <div key={ind + 1} className="stakingCard px-6 py-4 rounded-sm">
                <div className="flex items-center justify-between">
                  <h1 className="text-white text-lg font-bold">{data.name}</h1>
                  <div className="flex items-center gap-x-5">
                    <span className="text-white text-xs font-bold">
                      {handleActiveStakings(ind + 1) ? "Active" : "Inactive"}
                    </span>
                    <div>
                      <label className="switch">
                        <input type="checkbox" onChange={(e) => {handleSwitch(e, ind + 1)}} checked={handleActiveStakings(ind + 1)} />
                        <span className="slider round"></span>
                      </label>
                    </div>
                    <img
                      src={quesCircleIcon}
                      alt="quesCircleIcon"
                      className="w-4"
                    />
                  </div>
                </div>
                <p className="text-white text-sm mt-1">{data.desc}</p>
                <div className="mt-5 flex items-center gap-y-5 sm:gap-y-0 flex-wrap sm:flex-nowrap gap-x-10 lg:gap-x-5 xl:gap-x-10">
                  <div>
                    <h3 className="uppercase text-xs text-white font-bold">
                      Required stake
                    </h3>
                    <p className="text-xs text-white mt-2">
                      {data.required} HIDDENONES
                    </p>
                  </div>
                  <div>
                    <h3 className="uppercase text-xs text-white font-bold">
                      License
                    </h3>
                    <p className="text-xs text-white mt-2">{data.license}</p>
                  </div>
                  <div>
                    <h3 className="uppercase text-xs text-white font-bold">
                      BUDGET
                    </h3>
                    <p className="text-xs text-white mt-2">{data.budget}</p>
                  </div>
                  <div>
                    <h3 className="uppercase text-xs text-white font-bold">
                      CATEGORIES
                    </h3>
                    <p className="text-xs text-white mt-2">{data.categories}</p>
                  </div>
                  <div>
                    <h3 className="uppercase text-xs text-white font-bold">
                      Royalty
                    </h3>
                    <p className="text-xs text-white mt-2">{data.royalty}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      ) : (
        <p className="text-sm mt-5 italic text-white">No staking tiers yet</p>
      )}
    </div>
  )
}
