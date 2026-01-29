export interface Dsinterface {
    info: Info
    data: CharacterDS[]
}
export interface Info {
  count: number
  totalPages: number
  previousPage: string | null
  nextPage: string | null
}

export interface CharacterDS {
  id: number
  films: string[]
  shortFilms: string[]
  tvShows: string[]
  videoGames: string[]
  parkAttractions: string[]
  allies: string[]
  enemies: string[]
  name: string
  imageUrl: string
  url: string
}


