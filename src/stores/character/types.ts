import type { Character, PaginationInfo, CharacterQuery } from "@/interfaces/rickMorty"

export interface CharacterState {
  characterList: {
    searchQuery: CharacterQuery
    searchState: {
      loading: boolean
      success: boolean
      error: boolean
      errors: string
    }
    data: Character[]
    pagination: PaginationInfo | null
  }
}
