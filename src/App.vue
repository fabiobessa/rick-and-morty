<script setup lang="ts">
import Topbar from "@/components/Topbar.vue"
import Filter from "@/components/Filter.vue"
import CharactersSection from "@/components/CharactersSection.vue"
</script>

<template>
  <header>
    <Topbar />
  </header>

  <main>
    <Filter></Filter>
    <CharactersSection />
  </main>
</template>
