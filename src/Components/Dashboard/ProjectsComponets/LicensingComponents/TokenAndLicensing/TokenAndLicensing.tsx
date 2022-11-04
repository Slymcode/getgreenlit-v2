import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { AddLicenseModal } from './AddLicenseModal'
import { AddTokenModal } from './AddTokenModal'
import './TokenAndLicensing.css'
export const TokenAndLicensing = (props: any) => {
  const [showSummary, setshowSummary] = useState(false)
  const [showLicenseModal, setShowLicenseModal] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      props.setShowAlert(false)
    }, 5000)
  }, [props])
  return (
    <div className="w-full md:w-5/6 px-5 py-10 sm:p-10 flex flex-col gap-y-10">
      <div>
        <div className="flex items-center justify-between">
          <h1 className="text-white text-2xl font-bold">Tokens</h1>
          <button
            onClick={() => {
              props.setShowTokenModal(true)
            }}
            className=" text-white text-xs font-semibold px-5 py-1 rounded-full addToken-btn"
          >
            Add a Token
          </button>
        </div>
        {props.showTokenModal && (
          <AddTokenModal
            setShowAlert={props.setShowAlert}
            setShowTokenModal={props.setShowTokenModal}
            showTokenModal={props.showTokenModal}
          ></AddTokenModal>
        )}
        <p className="text-gray-200 text-xs mt-2">
          Specify the assets that users can stake in exchange for a license to
          your IP.
        </p>
        <div className="w-full token-card rounded-sm py-5 px-4 sm:px-8 mt-3">
          <h1 className="text-xl text-white font-semibold">
            Hidden Ones (HIDDENONES)
          </h1>
          <p className="text-gray-200 text-xs mt-1">
            The genesis collection of the Hidden Lakes Cinematic Universe.
          </p>
          <div className="flex items-start flex-wrap sm:flex-nowrap gap-y-5 sm:gap-y-0 gap-x-5 mt-3">
            <div className="flex flex-col gap-y-2">
              <h1 className="text-sm text-white font-semibold">Network</h1>
              <p className="text-xs text-gray-200">Ethereum</p>
            </div>
            <div className="flex flex-col gap-y-2">
              <h1 className="text-sm text-white font-semibold">Type</h1>
              <p className="text-xs text-gray-200">ERC-721</p>
            </div>
            <div className="flex flex-col gap-y-2">
              <h1 className="text-sm text-white font-semibold">
                Token Contract
              </h1>
              <p className="text-xs text-gray-200 break-all">
                0xc314f59A2e1559007c98BFdD36658866A2b7be59
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <h1 className="text-white text-2xl font-bold">Licenses</h1>
          <button
            onClick={() => {
              setShowLicenseModal(true)
            }}
            className=" text-white text-xs font-semibold px-5 py-1 rounded-full addToken-btn"
          >
            Add a license
          </button>
        </div>
        {
          <AddLicenseModal
            setShowAlert={props.setShowAlert}
            showLicenseModal={showLicenseModal}
            setShowLicenseModal={setShowLicenseModal}
          ></AddLicenseModal>
        }
        <p className="text-gray-200 text-xs mt-2">
          Add a license that users can stake their tokens in order to acquire.
          These are configured by staking tiers.
        </p>
        <div className="w-full token-card rounded-sm py-5 px-4 sm:px-8 mt-3">
          <h1 className="text-xl text-white font-semibold">
            Greenlit Boilerplate License
          </h1>
          <div className="flex items-end justify-between flex-wrap sm:flex-nowrap gap-y-5 sm:gap-y-0 gap-x-5 w-full mt-3">
            <div className="flex flex-col gap-y-2">
              <h1 className="text-sm text-white font-semibold">File</h1>
              <p className="text-xs text-gray-200 underline">
                HiddenOnes-Boilerplate-License.pdf
              </p>
            </div>
            <button
              onClick={() => {
                setshowSummary(!showSummary)
              }}
              className="flex items-center gap-x-2 font-bold"
            >
              <span className="text-xs text-white">
                {showSummary ? 'Hide summary' : 'Show summary'}
              </span>
              {showSummary ? (
                <FontAwesomeIcon
                  icon={faChevronUp}
                  className="text-white text-xs"
                />
              ) : (
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="text-white text-xs"
                />
              )}
            </button>
          </div>
          {showSummary && (
            <div className="mt-4">
              <div className="border-b border-zinc-600" />
              <div className="mt-10">
                <h1 className="text-sm text-white font-semibold">Summary</h1>
                <p className="text-gray-200 text-xs mt-2">
                  By staking tokens and agreeing to the license to follow, you
                  are entering into a legal agreement with [IP Holder]: the
                  holding organization of [IP title].
                </p>

                <p className="text-gray-200 text-xs my-4">
                  You must read the entire license, but here are the key
                  takeaways:
                </p>
                <ul className="list-disc pl-8">
                  <li className="text-gray-200 text-xs">
                    [IP Holder] is not affiliated with your project or company
                    unless explicitly stated.{' '}
                  </li>
                  <li className="text-gray-200 text-xs">
                    You retain all of the rights to your project’s tangible
                    artifacts.
                  </li>
                  <li className="text-gray-200 text-xs">
                    You must use the supplied resources to the [IP title] brand
                    & associated Brand Guidelines when applicable.
                  </li>
                  <li className="text-gray-200 text-xs">
                    Other stakers may use any new intellectual property you add
                    to the universe via creating & releasing this project.
                  </li>
                  <li className="text-gray-200 text-xs">
                    [IP Holder] receives a 10% total royalty on all of your
                    project’s revenue in perpetuity, payable after the project
                    is in distribution according to the revenue policy.
                  </li>
                  <li className="text-gray-200 text-xs">
                    There are no penalties under any circumstances for failing
                    to realize a project.
                  </li>
                  <li className="text-gray-200 text-xs">
                    [IP Holder] is not responsible for any lost funds, legal
                    liabilities, or other perils that result from this project.
                    The safety & legality of the project is the sole
                    responsibility of the licensee.
                  </li>
                  <li className="text-gray-200 text-xs">
                    This license applies only to the stated project you wish to
                    create. For other projects, you must stake & create a new,
                    distinct license which pertains to that project.
                  </li>
                  <li className="text-gray-200 text-xs">
                    You must have explicit legal permission to use any existing
                    IP from outside [IP title] in your project, and such IP will
                    not roll into [IP title].
                  </li>
                  <li className="text-gray-200 text-xs">
                    Your project is forbidden from containing explicit hate
                    speech or pornography of any kind, and [IP Holder] retains
                    the right to enforce this measure in court of law.
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
      <div>
        <h1 className="text-white text-2xl font-bold">Licensing Intro</h1>
        <p className="text-gray-200 text-xs mt-2">
          This brief message will display each time a user creates a new
          project.
        </p>
        <input
          type="text"
          placeholder="Enter licensing intro..."
          className="border border-gray-700 rounded-md bg-transparent w-full py-3 px-5 text-xs text-gray-200 mt-4"
        />
        <div className="mt-5 flex justify-end">
          <button className=" text-white text-xs font-semibold px-8 py-1 rounded-full addToken-btn">
            Save text
          </button>
        </div>
      </div>
    </div>
  )
}
