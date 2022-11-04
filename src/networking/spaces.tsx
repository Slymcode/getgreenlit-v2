import { AxiosRequestHeaders } from 'axios'
import axios from 'axios'

// TODO: use an environment variable to swap url out
//const BASE_URL = 'https://pure-lake-78684.herokuapp.com';
 const BASE_URL = process.env.REACT_APP_BASE_URL;

type Space = {
    id: string,
    title: string,
    legalCustodian: string,
    ipDescription: string,
    officialWebsite: string,
    twitter: string,
    discord: string,
    logoImgUrl: string,
    bannerImgUrl: string,
    featuredImgUrl: string,
    isMember: boolean
}

type CreateSpaceRequest = {
    title: string,
    legalCustodian: string,
    ipDescription: string,
    officialWebsite: string,
    twitter: string,
    discord: string,
    hideFromHomepage: boolean,
    logoImg: File,
    bannerImg: File,
    featuredImg: File
}

type UserAuth = {
    userId: string | null,
    sessionToken: string | null
}

const getAuthHeaders = (user: UserAuth) : AxiosRequestHeaders => {
    return {
        userId: (!user.userId) ? '' : user.userId,
        Authorization: (!user.sessionToken) ? '' : user.sessionToken
    }
}

async function createSpace (space: CreateSpaceRequest, user: UserAuth) {
    const formData = new FormData()
    formData.append('title', space.title)
    formData.append('legalCustodian', space.legalCustodian)
    formData.append('ipDescription', space.ipDescription)
    formData.append('officialWebsite', space.officialWebsite)
    formData.append('twitter', space.twitter)
    formData.append('discord', space.discord)
    formData.append('hideFromHomepage', '' + space.hideFromHomepage)
    formData.append('logoImg', space.logoImg, space.logoImg.name)
    formData.append('bannerImg', space.bannerImg, space.bannerImg.name)
    formData.append('featuredImg', space.featuredImg, space.featuredImg.name)


    // Display the values

    return new Promise((resolve) => {
      axios.post(`${BASE_URL}/api/spaces/create`, formData, {headers: {"Content-Type": "multipart/form-data"}})
    .then(res => {
        // TODO: what should I respond with? If anything...
        resolve(res)
    }).catch(err => {
        console.log(err)
        //throw Error("Failed to create space")
    })

   })
}

async function getSpaces(user: any): Promise<Array<Space>> {
    return new Promise((resolve) => {
        axios.get(`${BASE_URL}/api/spaces/`, { headers: getAuthHeaders(user) }).then(res => {
            const spaces: Space[] = []
    
            res.data.forEach((spaceResponse: any) => {
                const space: Space = {
                    id: spaceResponse.objectId,
                    title: spaceResponse.title,
                    legalCustodian: spaceResponse.legalCustodian,
                    ipDescription: spaceResponse.ipDescription,
                    officialWebsite: spaceResponse.officialWebsite,
                    twitter: spaceResponse.twitter,
                    discord: spaceResponse.discord,
                    logoImgUrl: spaceResponse.logoImg,
                    bannerImgUrl: spaceResponse.bannerImg,
                    featuredImgUrl: spaceResponse.featuredImg,
                    isMember: (!spaceResponse.isMember) ? false : spaceResponse.isMember
                }
                spaces.push(space)
            })
    
            resolve(spaces)
        }).catch(err => {
            console.log(err)
            //throw Error("Failed to get space")
            return Promise.reject(err);
        })
    })
}

export { createSpace, getSpaces }
export type { CreateSpaceRequest, Space, UserAuth }
