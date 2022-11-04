import React from 'react'
import { BasicModal } from '../../../../SubComponents/Modal'
import './AddTokenModal.css'
export const AddTokenModal = (props: any) => {
  return (
    <BasicModal setShowModal={props.setShowTokenModal} showModal={props.showTokenModal}>
      <div className="tokenModalMain w-full h-full overflow-hidden rounded-2xl mb-10 ">
        <div className="tokenModalHeader flex items-end justify-between pt-5 px-5 sm:px-8 pb-4">
          <div>
            <p className="text-sm text-white font-semibold">
              Hidden Lakes Cinematic Universe
            </p>
            <h1 className="text-white w-1/2 sm:w-auto sm:text-lg font-bold mt-2">
              Add a token
            </h1>
          </div>
          <button
            onClick={() => {
              props.setShowTokenModal(false)
            }}
            className="text-white text-xs sm:text-sm font-bold"
          >
            Cancel
          </button>
        </div>
        <div className="tokenModalContent h-full overflow-auto px-5 sm:px-8 py-8 flex flex-col gap-y-10">
          <div>
            <h1 className="text-white text-md font-semibold">Network</h1>
            <input
              type="text"
              placeholder="Enter network..."
              className=" mt-2 py-3 px-4 w-full sm:w-1/2 text-xs text-white border border-zinc-700 tokenModalInput outline-0 shadow-none bg-transparent rounded-md"
              defaultValue={'Ethereum Mainnet'}
            />
          </div>
          <div>
            <h1 className="text-white text-md font-semibold">
              Token Contract Address
            </h1>
            <input
              type="text"
              placeholder="Paste contract address..."
              className=" mt-2 py-3 px-0 w-full text-xs text-white border-b border-0 border-zinc-700 tokenModalInput outline-0 shadow-none bg-transparent"
            />
          </div>
          <div>
            <h1 className="text-white text-md font-semibold">
              Token description (optional)
            </h1>
            <input
              type="text"
              placeholder="Enter description..."
              className=" mt-2 py-3 px-0 w-full text-xs text-white border-b border-0 border-zinc-700 tokenModalInput outline-0 shadow-none bg-transparent"
            />
            <p className="text-zinc-500 text-xs text-right mt-1 font-semibold">
              0/180
            </p>
          </div>
        <div>
        <p className='text-gray-200 text-xs'>
            Adding a token to your IP creates a staking smart contract for it,
            which is in your custody under your<br className='hidden sm:block' /> connected wallet. Each new smart
            contract requires a 0.2 ETH fee, plus gas.
          </p>
          <div className='flex items-center gap-x-5 mt-5'>
          <button onClick={() => {props.setShowAlert(true); props.setTokensTab('Tokens & Licenses'); props.setShowTokenModal(false);}} className='text-white text-xs font-semibold py-2 px-4 rounded-full addTokenModalBtn'>Add a Token</button>
          <button className='text-white text-xs font-semibold'>Cancel</button>
          </div>
        </div>
        </div>
      </div>
    </BasicModal>
  )
}
