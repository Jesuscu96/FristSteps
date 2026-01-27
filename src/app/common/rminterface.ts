//import { Info } from '../components/info/info';
export interface InfoApiRM {
    info: Info
    results: CharacterRM[]
}
export interface Info {
  count: number
  pages: number
  next: string | null
  prev: string | null
}

export interface CharacterRM {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: Origin
  location: Location
  image: string
  episode: string[]
  url: string
  created: string
}

export interface Origin {
  name: string
  url: string
}

export interface Location {
  name: string
  url: string
}