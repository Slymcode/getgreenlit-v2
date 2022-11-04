import React, { useEffect, useState } from 'react'
import { StakingTier } from '../../../../../Components/Dashboard/ProjectsComponets/LicensingComponents/StakingTier/StakingTier'
import { AddTokenModal } from '../../../../../Components/Dashboard/ProjectsComponets/LicensingComponents/TokenAndLicensing/AddTokenModal'
import { TokenAndLicensing } from '../../../../../Components/Dashboard/ProjectsComponets/LicensingComponents/TokenAndLicensing/TokenAndLicensing'
import { Alert } from '../../../../../Components/SubComponents/Alert'
import './Licensing.css'
export const Licensing = () => {
  const [tokensTab, setTokensTab] = useState<any>(null)
  const [showTokenModal, setShowTokenModal] = useState<any>(false)
  const [showAlert, setShowAlert] = useState<any>(false)
  useEffect(() => {
    setTimeout(() => {
      setShowAlert(false)
    }, 5000)
  }, [])
  return (
    <div>
      {showAlert && <Alert />}
      <div className="licensingHeader h-60 px-5 sm:px-10 pt-10 flex items-end">
        <div className="flex flex-col">
          <h1 className="licensingHeader_heading text-white font-bold">
            Proof-of-stake Licensing
          </h1>
          <p className="text-sm text-white my-3">
            Allow token holders to license this space’s IP by staking their
            assets. Learn more.
          </p>
          {tokensTab && (
            <div className="flex items-center gap-x-8 mt-8">
              <button
                onClick={() => {
                  setTokensTab('Tokens & Licenses')
                }}
                className={`text-white text-sm font-semibold py-2 border-b-2 border-white ${
                  tokensTab === 'Tokens & Licenses'
                    ? 'border-opacity-100'
                    : 'border-opacity-0'
                }`}
              >
                Tokens & Licenses
              </button>
              <button
                onClick={() => {
                  setTokensTab('Staking Tiers')
                }}
                className={`text-white text-sm font-semibold py-2 border-b-2 border-white ${
                  tokensTab === 'Staking Tiers'
                    ? 'border-opacity-100'
                    : 'border-opacity-0'
                }`}
              >
                Staking Tiers
              </button>
            </div>
          )}
        </div>
      </div>
      {tokensTab === 'Tokens & Licenses' && (
        <TokenAndLicensing
          setShowAlert={setShowAlert}
          showTokenModal={showTokenModal}
          setShowTokenModal={setShowTokenModal}
        ></TokenAndLicensing>
      )}
      {tokensTab === 'Staking Tiers' && <StakingTier setShowAlert={setShowAlert}></StakingTier>}
      {!tokensTab && (
        <div className="flex flex-col items-center px-4 py-20">
          <h1 className="text-white text-xl sm:text-2xl font-semibold text-center">
            Add a token to enable decentralized licensing for this space.
          </h1>
          <p className="text-center text-white text-sm sm:text-md mt-5">
            Users will need this token in order to create projects,
            <br className="hidden sm:block" /> stake, and acquire licenses.
            Space owners will be able
            <br className="hidden sm:block" /> to set pre-requisites for
            staking.
          </p>
          <button
            onClick={() => {
              setShowTokenModal(true)
            }}
            className=" text-white text-sm font-semibold px-8 py-2 mt-8 rounded-full addToken-btn"
          >
            Add a Token
          </button>
        </div>
      )}
      <AddTokenModal
        setShowAlert={setShowAlert}
        setShowTokenModal={setShowTokenModal}
        showTokenModal={showTokenModal}
        setTokensTab={setTokensTab}
      ></AddTokenModal>
    </div>
  )
}
