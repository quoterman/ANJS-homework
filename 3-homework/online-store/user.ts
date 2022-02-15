type UserBase = {
    id: string
}

type EmailOwner = {
    email: string
}

export type Admin = UserBase & {
    kind: "Admin"
    EmailOwner: EmailOwner
    superAdmin: boolean
}

export type Client = UserBase & {
    kind: "Client"
    EmailOwner: EmailOwner
    balance: number
    collection: string[]
}

export type User =  Admin | Client

