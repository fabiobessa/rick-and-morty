<template>
  <section class="container-md py-md-5">
    <div class="row mx-4">
      <div class="col-md-12 col-xl-6 d-xl-block d-flex justify-content-center my-2" v-for="character in characterListData" :key="character.id" >
        <CharacterCard :character="character"/>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import CharacterCard from '@/components/CharacterCard.vue'
  import { onMounted } from "vue"
  import { useCharacterStore } from '@/stores/character'
  import { storeToRefs } from "pinia";

  const characterStore = useCharacterStore()
  const { loadCharacters } = characterStore
  const {
    searchStateCharacter,
    characterListData,
    paginationCharacter
  } = storeToRefs(characterStore)

  onMounted(async () => {
    await loadCharacters()
  })
</script>
