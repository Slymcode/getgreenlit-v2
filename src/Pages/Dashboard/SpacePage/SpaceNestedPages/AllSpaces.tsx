import React, { useEffect, useState, useContext } from 'react'
import { AllSpacesCardsList } from '../../../../Components/Dashboard/SpacesComponents/AllSpacesPageComponets/AllSpacesCardsList'
import { CreateSpaceHeader } from '../../../../Components/Dashboard/SpacesComponents/AllSpacesPageComponets/CreateSpaceHeader'
import { Alert } from '../../../../Components/SubComponents/Alert'
import { getSpaces } from '../../../../networking/spaces'
import { toUserAuth } from '../../../../networking/utils'

import { AppContext } from '../../../../context/AppContext';

import { getSessionCookie } from '../../../../networking/session';


type SpaceMetadata = {
  id: string
  featuredImg: string
  avatarImg: string
  name: string
  isMember: boolean
}

const SpacesData: SpaceMetadata[] = []

export const AllSpaces = () => {
  const [showAlert, setShowAlert] = useState<any>(false)
  const { isAuthenticated, user } = useContext(AppContext)
  const [spacesCards, setSpacesCards] = useState(SpacesData)


  const getAllSpaces = async () => {
    if(isAuthenticated) {
      getSpaces(toUserAuth(user)).then(async res => {
        const spaces: SpaceMetadata[] = []
        res.forEach(async (space) => {
          const spaceMeta: SpaceMetadata = {
            id: space.id,
            name: space.title,
            featuredImg: space.featuredImgUrl,
            avatarImg: space.logoImgUrl,
            isMember: space.isMember
          }
          spaces.push(spaceMeta)
          SpacesData.push(spaceMeta)
        })
        setSpacesCards(spaces)
      })
    }
  }

  const handleSearchImpl = (val: string) => {
    if (val.length) {
      let filtered = SpacesData.filter((d) => d.name.toUpperCase().includes(val.toUpperCase()))
      if (filtered) {
        setSpacesCards(filtered)
      } else {
        setSpacesCards(SpacesData)
      }
    } else {
      setSpacesCards(SpacesData)
    }
  }

  useEffect(() => {
    getAllSpaces()
  }, [isAuthenticated])
  
  useEffect(() => {
    setTimeout(() => {
      setShowAlert(false)
    }, 5000)
  }, [])

  return (
    <div>
      {showAlert && <Alert />}
      <CreateSpaceHeader setShowAlert={setShowAlert}></CreateSpaceHeader>
      <AllSpacesCardsList spaces={spacesCards} handleSearch={handleSearchImpl}></AllSpacesCardsList>
    </div>
  )
}

export type { SpaceMetadata }