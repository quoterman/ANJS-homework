type Film = {
    id: string
    kind: 'Film'
    name: string
    description: string
    video: string
    price: number
}

type Series = {
    id: string
    kind: 'Series'
    name: string
    description: string
    video: string[]
    price: number
}

export type Item =  Film | Series