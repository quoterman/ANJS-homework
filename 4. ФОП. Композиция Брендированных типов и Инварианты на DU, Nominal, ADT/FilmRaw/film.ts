type FilmInDraft = {
    type: "FilmInDraft"
    name: string | null
    description: string | null
    photo: string | null
}

type FilmInReady = {
    type: "FilmInReady"
    name: string
    description: string
    photo: string
    videofile: string | null
}

type FilmIsPublished = {
    type: "FilmIsPublished"
    name: string
    description: string
    photo: string
    videofile: string
}

type FilmState = FilmInDraft | FilmInReady | FilmIsPublished

type Film = {
    id: string
    state: FilmState
}

type FilmTableData = {
    id: string
    name: string | null
    description: string | null
    photo: string | null
    videofile: string | null
    published: boolean
}

const mapFilmFromDBData = (td: FilmTableData): Film => {
    let state: FilmState

    if (td.published) {
        state = {
            type: "FilmIsPublished",
            name: td.name as string,
            description: td.description as string,
            photo: td.photo as string,
            videofile: td.videofile as string,
        }
    } else {
        if (td.name && td.description && td.videofile && td.photo) {
            state = {
                type: "FilmInReady",
                name: td.name as string,
                description: td.description as string,
                photo: td.photo as string,
                videofile: td.videofile,
            }
        } else {
            state = {
                type: "FilmInDraft",
                name: td.name,
                description: td.description,
                photo: td.photo,
            }
        }
    }

    return {
        id: td.id,
        state,
    }
}


const editFilmData = (film: Film, newName: string) => {
    switch (film.state.type) {
        case "FilmIsPublished":
            throw new Error("asdqwe")
        case "FilmInDraft":
        case "FilmInReady":
            film.state.name = newName
            break
    }
}
