<template>
  <section class="w-full">
    <div
      class="flex flex-col items-center justify-between w-full max-w-screen-lg gap-4 px-6 pt-20 pb-10 mx-auto md:px-10 md:pt-40 md:pb-40 md:gap-20 md:flex-row xl:max-w-screen-xl">
      <div class="flex flex-col gap-6">
        <Badge value="Unlock the power of AI" />
        <h1
          class="text-5xl font-normal leading-none text-white uppercase md:text-8xl xl:text-[134px] font-ag">
          AI-driven Event ticketing platform
        </h1>
        <p
          class="relative z-10 md:text-2xl xl:text-[32px] text-lg xl:leading-[140%] font-normal tracking-tighter font-geometria text-grad">
          Empowering promoters with artificial intelligence
        </p>
        <div class="flex flex-col items-start gap-4 md:items-center md:flex-row">
          <button
            class="relative px-[30px] py-[15px] overflow-hidden rounded-full text-lg font-normal leading-[13px] tracking-tighter text-black font-geometria border border-[#808080]">
            <img
              src="/images/icons/btn-grad.png"
              class="absolute inset-0 object-cover w-full h-full"
              alt="" />
            <span class="relative z-10">Get Started</span>
          </button>
          <NuxtLink
            class="text-lg font-normal leading-[13px] px-[15px] py-3 tracking-tighter text-[#eeeeee] font-geometria text-arrow"
            >Learn More</NuxtLink
          >
        </div>
      </div>

      <div class="relative h-full w-full xl:max-w-[371px] max-w-[340px]">
        <img
          class="absolute top-0 left-0 z-10 object-cover w-full h-auto"
          src="/images/ticket-1.png" />
        <img class="object-cover w-full h-auto" src="/images/ticket-2.png" />
      </div>
    </div>
  </section>
</template>

<script setup>
import Badge from "./Badge.vue";
</script>

<style scoped>
.text-grad {
  background-image: linear-gradient(
    105deg,
    rgba(255, 255, 255, 0.4) 0%,
    rgba(255, 255, 255, 1) 50%,
    rgba(255, 255, 255, 0.4) 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.text-arrow::after {
  content: "";
  background-image: url("~/assets/images/icons/arrow.svg");
  background-repeat: no-repeat;
  display: inline-block;
  margin-left: 13px;
  width: 10px;
  height: 10px;
  min-width: 10px;
  min-height: 10px;
}
</style>
