<template>
  <div class="pt-5">
    <nav v-if="!hasSpan">
      <ul class="pagination justify-content-center mb-0">
        <li
          v-for="page in props.pagination.pages"
          :key="page"
          class="page-item"
          :class="{ 'active': currentPage === page }"
          :data-cy="`page-item-${page}`"
        >
          <button
            class="page-link"
            @click="$emit('toPage', page)"
          >
            {{ page }}
          </button>
        </li>
      </ul>
    </nav>

    <nav v-else>
      <ul class="pagination justify-content-center mb-0">
        <li
          v-if="!isFirst && currentPage > 5"
          class="page-item"
        >
          <button
            class="page-link"
            @click="$emit('toPage', 1)"
          >
            First
          </button>
        </li>

        <li
          v-for="page in initialPages"
          :key="page"
          class="page-item"
          :class="{ 'active': currentPage === page }"
        >
          <button
            class="page-link"
            @click="$emit('toPage', page)"
          >
            {{ page }}
          </button>
        </li>

        <li
          v-if="props.pagination.pages - currentPage > 3"
        >
          <button
            class="page-link"
          >
            ...
          </button>
        </li>

        <template v-if="!finalPages.includes(currentPage)">
          <li
            v-for="page in finalPages"
            :key="page"
            class="page-item"
            :class="{ 'active': currentPage === page }"
          >
            <button
              class="page-link"
              @click="$emit('toPage', page)"
            >
              {{ page }}
            </button>
          </li>
        </template>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import type { PaginationInfo } from '@/interfaces/rickMorty';
import { computed } from 'vue';

  const props = defineProps<{ pagination: PaginationInfo }>()
  defineEmits<{(e: 'toPage', page: number): void}>()

  const currentPage = computed(() => {
    const nextPageURL = props.pagination.next ? makeURL(props.pagination.next) : null
    return nextPageURL
      ? Number(nextPageURL.searchParams.get('page')) - 1
      : props.pagination.pages
  })

  function makeURL(pageLink: string): URL {
    return new URL(pageLink)
  }

  const initialPages = computed(() => {
    const span = 3
    const center = currentPage.value

    let start = center - 3

    if(currentPage.value <= span) start = 1

    const distToEnd = props.pagination.pages - currentPage.value

    const end = distToEnd > 3 ? center + 3 : center + distToEnd

    const pages: number[] = []

    for (let page = start; page <= end; page++) {
      pages.push(page)
    }

    return pages
  })

  const finalPages = computed(() => {
    const end = props.pagination.pages
    const start = props.pagination.pages - 3
    const pages: number[] = []

    for (let page = start; page <= end; page++) {
      pages.push(page)
    }

    return pages
  })

  const isFirst = computed(() => !props.pagination.prev)

  const hasSpan = computed(() => props.pagination.pages > 10)
</script>
