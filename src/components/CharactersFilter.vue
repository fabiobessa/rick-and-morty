<template>
  <section class="container-md py-3 py-md-5">
    <h3>
      Filter
    </h3>
    <div class="row">
      <div class="col-md-5 mb-3 mb-md-0">
        <label for="characterName" class="form-label">
          Name
        </label>
        <input
          type="text"
          id="characterName"
          class="form-control"
          v-model="searchQueryCharacter.name"
          placeholder="Filter by name"
          :disabled="searchStateCharacter.loading"
        >
      </div>
      <div class="col-md-5 mb-3 mb-md-0">
        <label for="characterStatus" class="form-label">
          Status
        </label>
        <select
          id="characterStatus"
          class="form-select"
          v-model="searchQueryCharacter.status"
          :disabled="searchStateCharacter.loading"
        >
          <option value="">Select a status</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      <div class="col-md-2 align-self-end mb-3 mb-md-0">
        <button
          class="btn btn-success"
          @click="handleFilter"
          :disabled="searchStateCharacter.loading"
        >
          Filter
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useCharacterStore } from '@/stores/character'
import { storeToRefs } from 'pinia'

  const characterStore = useCharacterStore()
  const { loadCharacters } = characterStore
  const {
    searchQueryCharacter,
    searchStateCharacter
  } = storeToRefs(characterStore)

  function handleFilter() {
    characterStore.$patch({
      characterList: {
        searchQuery: {
          page: 1
        }
      }
    })

    loadCharacters()
  }
</script>
