
<script setup>
import { unscramble } from 'botex'
const key = import.meta.env.VITE_KEY

const obfuscatedData = await $fetch('/api/obfuscated', { server: false })
const data = useState('data', () => obfuscatedData) // Store the API call on Static site generation (SSG)

function deObfuscate (encoded) {
  const unobfuscated = unscramble(encoded, key)
  window.location.href = unobfuscated
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
      <button title="LinkedIn" aria-label="visit linkedin profile" class="inline-block" onClick="window.location.href = `https://www.linkedin.com/in/werners/`">
        <Icon name="ph:linkedin-logo" />
      </button>
      <button title="Mastodon" aria-label="visit mastodon profile" class="inline-block">
        <a rel="me" href="https://kopiti.am/@Wern">
          <Icon name="ri:mastodon-line" />
        </a>
      </button>
      <button title="WhatsApp (Personal)" aria-label="contact Werner directly through WhatsApp" class="inline-block" @click="deObfuscate(data.obfuscatedPhone)">
        <Icon name="ph:whatsapp-logo" />
      </button>
      <button title="Email" aria-label="send Werner an e-Mail" class="inline-block" @click="deObfuscate(data.obfuscatedMail)">
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
