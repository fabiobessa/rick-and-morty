<template>
  <!-- Modal -->
  <div class="modal fade" id="characterModal" tabindex="-1" aria-labelledby="characterModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-fullscreen-sm-down modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="characterModalLabel">
            {{ character?.name }}
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="w-100 text-center py-3">
            <img
              :src="character?.image"
              class="rounded-circle w-50 border border-4 shadow"
              :class="{
                'border-success': character?.status.toLowerCase() === 'alive',
                'border-danger': character?.status.toLowerCase() === 'dead',
                'border-dark': character?.status.toLowerCase() === 'unknown'
              }"
            >
          </div>
          <div class="text-center">
            <p>
              <span class="fw-bold">Status</span><br> {{ character?.status }}
            </p>
            <p>
              <span class="fw-bold">Species</span><br> {{ character?.species }}
            </p>
            <p v-if="character?.type">
              <span class="fw-bold">Type</span><br> {{ character?.type }}
            </p>
            <p>
              <span class="fw-bold">Gender</span><br> {{ character?.gender }}
            </p>
            <p>
              <span class="fw-bold">Origin</span><br> {{ character?.origin.name }}
            </p>
            <p>
              <span class="fw-bold">Last known location</span><br> {{ character?.location.name }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { Character } from '@/interfaces/rickMorty';

  defineProps<{ character: Character | undefined }>()
</script>
