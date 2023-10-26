<template>
  <div class="py-6">
    <span class="block text-sm text-center text-slate-600 dark:text-slate-400"><Icon name="ph:copyleft" style="width: 0.875rem; height: 0.875rem;" :inline="true" /> {{ calculateYear() }} <a href="https://github.com/wernersa/wernersa.github.io" class="hover:underline">Public Domain</a>. All Rights Reversed.
    </span>
  </div>
</template>


<script setup>
function calculateYear () {
  return new Date().getFullYear()
}
</script>
