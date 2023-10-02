<template>
  <main>
    <CharactersFilter />
    <div v-if="searchStateCharacter.loading" class="d-flex justify-content-center py-5">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <CharactersList v-else />
  </main>
</template>

<script setup lang="ts">
  import CharactersList from '@/components/CharactersList.vue'
  import CharactersFilter from '@/components/CharactersFilter.vue'
  import { useCharacterStore } from '@/stores/character'
  import { storeToRefs } from 'pinia'
  import { onMounted } from 'vue';

  const characterStore = useCharacterStore()
  const { loadCharacters } = characterStore
  const { searchStateCharacter } = storeToRefs(characterStore)

  onMounted(async () => {
    await loadCharacters()
  })
</script>
