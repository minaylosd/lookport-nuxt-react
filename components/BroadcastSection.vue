<template>
  <div class="relative w-full">
    <img
      src="/images/broadcast-glass.png"
      class="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-full max-w-[900px] h-auto object-cover"
      alt="" />
    <section
      class="flex flex-col items-center justify-between w-full max-w-screen-lg gap-20 px-6 py-10 mx-auto md:px-10 md:py-48 md:flex-row xl:max-w-screen-xl">
      <div class="relative flex justify-center order-1 md:justify-end basis-5/12 md:order-none">
        <img
          class="object-cover w-full md:w-[120%] max-w-[611px] h-auto mix-blend-lighten"
          src="/images/broadcast.png" />
      </div>

      <div class="flex flex-col gap-6 basis-7/12">
        <h1
          class="text-5xl font-normal leading-none text-white uppercase md:text-8xl font-ag">
          Broadcast your events online
        </h1>
        <p
          class="relative z-10 md:text-2xl text-lg leading-[130%] font-normal tracking-tighter font-geometria text-[#eeeeee]">
          Get real-time notifications for every ticket sold and a daily summary
          with sales analytics directly in our chat bot in WhatsApp or Telegram
        </p>
        <div>
          <GetStartedBtn />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import GetStartedBtn from "./GetStartedBtn.vue";
</script>
