// State
export type User = {
    username: string;
    id: string;
}

export type UserRefreshState = {
    refreshAuth: User
}

export type UserRegisterState = {
    registrUser: User
}
