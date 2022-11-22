<script setup lang="ts">
defineProps({
  size: {
    type: String,
    default: 'w-8 h-8'
  },
  spacing: {
    type: String,
    default: 'p-0'
  }
})

const colorMode = useColorMode()
const alternateToggle = computed(() => (colorMode.value === 'light' ? 'dark' : 'light'))
</script>

<template>
  <button aria-label="change color" class="inline-block" title="Toggle dark-mode" @click="colorMode.preference = alternateToggle">
    <ColorScheme placeholder="...">
      <Icon v-if="colorMode.value === 'dark'" name="ph:moon-stars-fill" />
      <Icon v-else name="ph:sun-dim-fill" />
    </ColorScheme>
  </button>
</template>
