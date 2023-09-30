<template>
  <section class="container-md py-md-5">
    <div class="row">
      <div class="col-md-12 col-xl-6 d-xl-block d-flex justify-content-center my-2" v-for="character in characterListData" :key="character.id" >
        <CharacterCard :character="character"/>
      </div>
    </div>
    <Pagination
      v-if="paginationCharacter && paginationCharacter.pages > 1"
      :pagination="paginationCharacter"
      @to-page="handlePagination"
    />
  </section>
</template>

<script setup lang="ts">
  import CharacterCard from '@/components/CharacterCard.vue'
  import Pagination from '@/components/Pagination.vue'
  import { onMounted } from "vue"
  import { useCharacterStore } from '@/stores/character'
  import { storeToRefs } from "pinia";

  const characterStore = useCharacterStore()
  const { loadCharacters } = characterStore
  const {
    searchStateCharacter,
    searchQueryCharacter,
    characterListData,
    paginationCharacter
  } = storeToRefs(characterStore)

  onMounted(async () => {
    await loadCharacters()
  })

  function handlePagination(page: number) {
    searchQueryCharacter.value.page = page
    loadCharacters()
  }
</script>
