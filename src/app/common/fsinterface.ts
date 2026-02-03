
//export type Root = CharactersFS[]

export interface CharactersFS {
  id: number
  name: string
  status: string
  species?: string
  gender: string
  hair: string
  alias: string[]
  origin: string
  abilities: string[]
  img_url: string
}
