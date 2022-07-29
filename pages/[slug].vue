<template>
  <div>
    <!-- Fetch and display the Markdown document from current path -->
    <ContentDoc class="prose lg:prose-lg prose-slate dark:prose-invert mx-auto">
      <!-- Slot if document is not found -->
      <template #not-found>
        <!-- Shamelessly copied from: https://mambaui.com/components/error -->
        <section class="flex items-center h-full p-16">
          <div class="container flex flex-col items-center justify-center px-5 mx-auto my-8">
            <div class="max-w-md text-center">
              <h2 class="mb-8 font-extrabold text-9xl text-slate-800 dark:text-slate-200">
                <span class="sr-only">Error</span>404
              </h2>
              <p class="text-2xl font-semibold md:text-3xl">
                Sorry, this page does not exist.
              </p>
              <p class="mt-4">
                I've likely made several inattentive mistakes when playing around with this website.
              </p>
              <p class="mt-4 mb-14">
                Any feedback would be much appreciated!
              </p>
              <NuxtLink to="/" class="px-8 py-3 font-semibold rounded hover:shadow-md hover:shadow-sky-900/30 dark:shadow-sky-900/50 bg-slate-300 text-slate-700 dark:bg-slate-700 dark:text-slate-300">
                Back to homepage
              </NuxtLink>
            </div>
          </div>
        </section>
      </template>
    </ContentDoc>
  </div>
</template>

<style lang="postcss">
/* Customize headers to remove default underline */
.prose h1 a,
.prose h2 a,
.prose h3 a {
  @apply no-underline;
  &:hover {
    @apply border-b border-neutral-600 dark:border-neutral-300;
  }
}
</style>
