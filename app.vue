<template>
  <div class="lg:mt-6">
    <Html lang="en" />
    <Meta property="og:image" content="/cover.jpg" /> <!-- Size: 1200x630 - See: https://ogp.me/ -->
    <NavBar />
    <div class="max-w-4xl px-4 sm:px-8 py-4 md:py-12  m-auto text-slate-700 bg-white sm:shadow dark:text-slate-300 dark:bg-gray-800 sm:rounded">
      <NuxtPage />
    </div>
    <Footer />
    <DevMode />
  </div>
</template>
