import type { CharacterState } from "./types";

export const characterState: CharacterState = {
  characterList: {
    searchQuery: {},
    searchState: {
      loading: false,
      success: false,
      error: false,
      errors: ''
    },
    data: [],
    pagination: null
  }
}
