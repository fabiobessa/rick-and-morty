import axios from "axios"
import type { CharacterResponse, CharacterQuery } from "@/interfaces/rickMorty"

const endpoint = 'https://rickandmortyapi.com/api'

export const rickMortyService = {
  async list(query?: CharacterQuery): Promise<CharacterResponse> {
    const response = await axios.get<CharacterResponse>(`${endpoint}/character`, { params: query})

    return response.data
  }
}
