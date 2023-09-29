<template>
  <div class="d-md-flex bg-gray w-100 rounded-3">
    <div class="">
      <img :src="props.character.image" alt="" class="rounded-3">
    </div>
    <div class="p-2">
      <h4 class="m-0">
        {{ props.character.name }}
      </h4>
      <span class="text-muted fs-7">{{ props.character.species }} - {{ props.character.status }}</span>
      <div class="mt-2">
        <div class="fw-bold fs-7">
          Origin:
        </div>
        <div>
          {{ props.character.origin.name }}
        </div>
      </div>
      <div class="mt-2">
        <div class="fw-bold fs-7">
          Last known location:
        </div>
        <div>
          {{ props.character.location.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Character } from '@/interfaces/rickMorty';

  const props = defineProps<{character: Character}>()
</script>

<style scoped>
.bg-gray {
  background-color: rgb(225, 225, 225);
}


</style>
