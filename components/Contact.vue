<template>
  <div
    class="section w-full relative bg-[radial-gradient(ellipse_50%_30%_at_center,_rgba(35,28,61,1)_0%,_rgba(10,10,10,1)_100%)]">
    <img class="absolute left-1/2 -bottom-2/3 -translate-x-1/2 w-full max-w-[1054px] h-auto object-cover"
      src="/images/contact-neon.png" alt="">
    <section
      class="flex flex-col items-center justify-between w-full max-w-screen-lg gap-4 px-6 py-64 mx-auto md:px-10 md:gap-24 md:flex-row xl:max-w-screen-xl">
      <div class="flex flex-col w-full gap-6 md:basis-5/12">
        <Badge class="anim-up" value="Contact Us" />
        <h1 class="anim-up xl:text-[134px] md:text-8xl text-5xl leading-none font-normal text-white font-ag uppercase">
          Get Started with a First Event Now
        </h1>
      </div>

      <div class="flex w-full md:justify-center md:basis-1/2">
        <div class="">
          <p
            class="anim-up relative z-10 md:text-2xl text-lg leading-[140%] font-normal tracking-tighter font-geometria text-white mb-6">
            We are here to help you<br />starting with Lookport
          </p>

          <p class="mb-1 text-lg font-normal leading-none tracking-tighter text-white/50 anim-up font-geometria">
            Promoters support team:
          </p>
          <div class="anim-up">
            <a class="md:text-2xl text-lg leading-[130%] font-normal tracking-tighter text-white font-geometria"
              href="mailto:pomoters@lookport.live">promoters@lookport.live</a>
          </div>
          <div class="flex items-center w-full gap-4 mt-8">
            <GetStartedBtn class="anim-up" :big="true" />
            <NuxtLink
              class="anim-up cursor-pointer text-lg font-normal leading-[13px] px-[15px] py-3 text-[#eeeeee] font-geometria text-arrow">
              Login</NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import Badge from "./Badge.vue";
import GetStartedBtn from "./GetStartedBtn.vue";
</script>

<style scoped>
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