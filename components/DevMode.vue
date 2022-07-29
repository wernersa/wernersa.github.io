<script setup>
const dev = import.meta.env.DEV
</script>

<template>
  <div v-if="dev">
    <div class="fixed bottom-0 right-0 p-6 w-8 h-8 border dark:border-slate-400 flex justify-center items-center opacity-75">
      <div class="block sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden">
        XS
      </div>
      <div class="hidden sm:block md:hidden lg:hidden xl:hidden 2xl:hidden">
        SM
      </div>
      <div class="hidden sm:hidden md:block lg:hidden xl:hidden 2xl:hidden">
        MD
      </div>
      <div class="hidden sm:hidden md:hidden lg:block xl:hidden 2xl:hidden">
        LG
      </div>
      <div class="hidden sm:hidden md:hidden lg:hidden xl:block 2xl:hidden">
        XL
      </div>
      <div class="hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:block">
        2XL
      </div>
    </div>
  </div>
</template>
