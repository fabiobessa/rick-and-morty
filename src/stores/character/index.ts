import { defineStore } from 'pinia'
import { characterState } from './state'
import { rickMortyService } from '@/services/RickMorty.service'

export const useCharacterStore = defineStore({
  id: 'characterStore',
  state: () => characterState,
  getters: {
    searchQueryCharacter: (state) => state.characterList.searchQuery,
    searchStateCharacter: (state) => state.characterList.searchState,
    characterListData: (state) => state.characterList.data,
    paginationCharacter: (state) => state.characterList.pagination
  },
  actions: {
    async loadCharacters(): Promise<boolean> {
      this.$patch({
        characterList: {
          searchState: {
            loading: true,
            success: false,
            error: false,
            errors: ''
          },
          data: [],
        }
      })

      try {
        const response = await rickMortyService.list(this.characterList.searchQuery)

        this.$patch({
          characterList: {
            searchState: {
              loading: false,
              success: true,
            },
            data: response.results,
            pagination: response.info
          }
        })

        return true
      } catch(error: any) {
        this.$patch({
          characterList: {
            searchState: {
              loading: false,
              error: true,
              errors: error.response.data.error
            },
            data: [],
          }
        })

        return false
      }
    }
  }
})
