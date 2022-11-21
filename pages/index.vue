<template>
  <div>
    <Head>
      <Title>Werner Sævland - Psychologist in Singapore</Title>
      <Meta name="description" content="Norwegian psychologist providing therapy online over video" />
    </Head>

    <div class="space-y-6 gap-12 flex md:space-y-0 md:items-center">
      <div class="md:max-w-md prose lg:prose-lg prose-slate dark:prose-invert pl-5 ">
        <h1 class="text-4xl sm:text-5xl tracking-wide font-bold !my-0">
          Werner Sævland
        </h1>
        <h2 class="tracking-tighter sm:tracking-normal text-3xl sm:text-4xl font-extralight text-slate-600 dark:text-slate-400 !mt-0 !mb-5">
          Psychologist in Singapore
        </h2>
        <p>
          I'm a {{ calculateAge() }} year-old Norwegian with a relentless curiosity about the world and the people in it.
        </p>
        <p>
          I can boast about having hitchhiked alone across the states, caught an angler fish with a knife, and taught university-level inferential statistics.
        </p>
        <p>
          If you live in Singapore and would like to schedule a session with me, you can reach out to The Other Clinic by email at <a href="mailto:hello@theotherclinic.sg">hello@theotherclinic.sg</a> or through WhatsApp at <a href="https://wa.me/+6588090659?text=Hello. I found this link through Werner Sævland's website and would like to schedule a session any time soon. My name is _, and I would like to work on _">+65 8809 0659</a>!
        </p>
      </div>
      <div class="hidden md:block md:w-5/12">
        <img
          src="/cutout.webp"
          alt="portrait"
          class="rounded"
          width="362"
          height="737"
          style="filter: drop-shadow(-3px 3px 3px rgba(var(--shadow)));"
        >
      </div>
    </div>
  </div>
</template>

<script setup>
function calculateAge () {
  const currentDate = new Date()
  const birthDate = new Date('1990/10/17')
  const difference = currentDate - birthDate
  const age = Math.floor(difference / 31557600000)
  return age
}
</script>
