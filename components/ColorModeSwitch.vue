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
const onClick = () => (colorMode.value === 'light' ? (colorMode.preference = 'dark') : (colorMode.preference = 'light'))
</script>

<template>
  <button aria-label="change color" class="inline-block" @click="onClick">
    <ColorScheme placeholder="...">
      <Icon v-if="colorMode.value === 'dark'" v-tooltip.bottom="{content:'Dark mode', distance: '16'}" name="ph:moon-stars-fill" />
      <Icon v-else v-tooltip="{content:'Light mode', distance: '16'}" name="ph:sun-dim-fill" />
    </ColorScheme>
  </button>
</template>
