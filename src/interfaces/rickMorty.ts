export type CharacterStatus = 'alive'
  | 'dead'
  | 'unknown'
  | ''

export type CharacterGender = 'female'
  | 'male'
  | 'genderless'
  | 'unknown'

export interface CharacterOrigin {
  name: string
  url: string
}

export interface CharacterLocation {
  name: string
  url: string
}

export interface Character {
  id: number
  name: string
  status: CharacterStatus
  species: string
  type: string
  gender: CharacterGender
  origin: CharacterOrigin
  location: CharacterLocation
  image: string
  episode: string[]
  url: string,
  created: string
}

export interface PaginationInfo {
  count: number
  pages: number
  next: string | null
  prev: string | null
}

export interface CharacterResponse {
  info: PaginationInfo
  results: Character[]
}

export interface CharacterQuery {
  name?: string
  status?: CharacterStatus
  page?: number
}
