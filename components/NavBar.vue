
<script setup>
import { unscramble } from 'botex'
const key = import.meta.env.VITE_KEY
const { data } = await useFetch('/api/obfuscated', {server: false})

function deObfuscate (encoded) {
  const unobfuscated = unscramble(encoded, key)
  window.open(unobfuscated)
}
</script>

<template>
  <div class="flex justify-between max-w-4xl px-4 py-4 mx-auto sm:px-8">
    <!-- Navigation -->
    <div class="text-slate-700 dark:text-slate-200">
      <ContentNavigation v-slot="{ navigation }">
        <span key="/">
          <NuxtLink to="/" active-class="font-bold" class="mr-4">
            Home
          </NuxtLink>
        </span>
        <span v-for="link of navigation" :key="link._path">
          <NuxtLink v-if="link.navigation" :to="link._path" active-class="font-bold" class="mr-4">
            {{ link.navTitle || link.title }}
          </NuxtLink>
        </span>
      </ContentNavigation>
    </div>

    <!-- Social icons & Color Mode -->
    <div class="space-x-3 text-slate-500 transition">
      <button aria-label="linkedin profile" class="inline-block" onClick="window.open(`https://www.linkedin.com/in/werners/`);">
        <Icon name="ph:linkedin-logo" />
      </button>
      <button aria-label="contact on whatsapp" class="inline-block" @click="deObfuscate(data.obfuscatedPhone)">
        <Icon name="ph:whatsapp-logo" />
      </button>
      <button aria-label="send email" class="inline-block" @click="deObfuscate(data.obfuscatedMail)">
        <Icon name="ph:envelope-simple-duotone" />
      </button>
      <ColorModeSwitch />
    </div>
  </div>
</template>

<style lang="postcss" scoped>
a, button {
  @apply hover:text-gray-700 dark:hover:text-gray-300;
}
</style>
