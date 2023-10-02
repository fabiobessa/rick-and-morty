<template>
  <section
    v-if="searchStateCharacter.error"
    class="container-md py-5 d-flex justify-content-center"
  >
    <h4 class="text-danger">
      {{ searchStateCharacter.errors }}
    </h4>
  </section>
  <section v-else class="container-md py-5">
    <div class="row">
      <div
        v-for="character in characterListData"
        :key="character.id"
        class="col-md-12 col-xl-6 d-xl-block d-flex justify-content-center my-2"
      >
        <CharacterListItem
          :character="character"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#characterModal"
          @click="handleModal(character)"
        />
      </div>
    </div>
    <Pagination
      v-if="paginationCharacter && paginationCharacter.pages > 1"
      :pagination="paginationCharacter"
      @to-page="handlePagination"
    />
    <CharacterDetailModal :character="currentCharacter" />
  </section>
</template>

<script setup lang="ts">
  import CharacterListItem from '@/components/CharacterListItem/index.vue'
  import Pagination from '@/components/Pagination/index.vue'
  import CharacterDetailModal from '@/components/CharacterDetailModal/index.vue'
  import { ref } from "vue"
  import { useCharacterStore } from '@/stores/character'
  import { storeToRefs } from "pinia"
  import type { Character } from '@/interfaces/rickMorty'

  const characterStore = useCharacterStore()
  const { loadCharacters } = characterStore
  const {
    searchStateCharacter,
    characterListData,
    paginationCharacter
  } = storeToRefs(characterStore)

  function handlePagination(page: number) {
    characterStore.$patch({
      characterList: {
        searchQuery: {
          page: page
        }
      }
    })
    loadCharacters()
  }

  const currentCharacter = ref<Character>()

  function handleModal(character: Character) {
    currentCharacter.value = character
  }
</script>
