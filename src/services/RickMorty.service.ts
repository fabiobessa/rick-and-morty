import axios from "axios"
import type { CharacterResponse, CharacterQuery } from "@/interfaces/rickMorty"
import { sanitizer } from '@/helpers/SanitizeHelpers'

const endpoint = 'https://rickandmortyapi.com/api'

export const rickMortyService = {
  async list(query?: CharacterQuery): Promise<CharacterResponse> {
    const sanitizedQuery = sanitizer.clearNullProperty(query)

    const response = await axios.get<CharacterResponse>(`${endpoint}/character`, { params: sanitizedQuery})

    return response.data
  }
}
