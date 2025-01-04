<template>
  <div class="w-full">
    <section
      class="flex flex-col items-center justify-between w-full max-w-screen-lg gap-4 px-6 py-64 mx-auto md:px-10 md:gap-24 md:flex-row xl:max-w-screen-xl">
      <div class="flex flex-col w-full gap-6 md:basis-5/12">
        <Badge value="Contact Us" />
        <h1
          class="xl:text-[134px] md:text-8xl text-5xl leading-none font-normal text-white font-ag uppercase">
          Get Started with a First Event Now
        </h1>
      </div>

      <div class="flex w-full md:justify-center md:basis-1/2">
        <div class="md:basis-1/2">
          <p
            class="relative z-10 md:text-2xl text-lg leading-[140%] font-normal tracking-tighter font-geometria text-white mb-6">
            We are here to help you<br />starting with Lookport
          </p>

          <p
            class="text-lg font-normal leading-none tracking-tighter text-white font-geometria">
            Promoters support team:
          </p>
          <a
            class="md:text-2xl text-lg leading-[130%] font-normal tracking-tighter text-white font-geometria"
            href="mailto:pomoters@lookport.live"
            >pomoters@lookport.live</a
          >

          <div class="flex items-center w-full gap-4 mt-8">
            <button
              class="relative px-[30px] py-[15px] overflow-hidden rounded-full text-lg font-normal leading-[13px] tracking-tighter text-black font-geometria border border-[#808080]">
              <img
                src="/images/icons/btn-grad.png"
                class="absolute inset-0 object-cover w-full h-full"
                alt="" />
              <span class="relative z-10">Get Started</span>
            </button>
            <button
              class="px-[30px] py-[15px] overflow-hidden rounded-full text-lg font-normal leading-[13px] tracking-tighter text-[#eeeeee] font-geometria border border-[#808080]">
              Login
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import Badge from "./Badge.vue";
</script>
