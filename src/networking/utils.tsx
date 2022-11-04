import { UserAuth } from './spaces'

function toUserAuth(user: any): UserAuth {
    const userAuth: UserAuth = {
        userId: (!user) ? '' : user.userId,
        sessionToken: (!user) ? '' : user.sessionToken
    }

    return userAuth;
}

export { toUserAuth }