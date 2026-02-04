//En caso de root y root 2 no cargamos el root1 y ponemos en service root2[] en array
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
