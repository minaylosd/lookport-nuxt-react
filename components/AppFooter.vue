<template>
  <footer class="relative w-full py-6 overflow-hidden md:py-12 bg-tertiary">
    <img src="/images/footer-bg.png" class="absolute inset-0 object-cover w-full h-full" alt="">
    <div class="relative z-10 w-full max-w-screen-xl px-6 mx-auto md:px-10">
      <div class="flex flex-col md:flex-row gap-4 justify-between pt-6 pb-[104px]">
        <div
          class="flex flex-col items-start justify-between w-full gap-6 md:flex-row md:gap-30">
          <div
            class="flex flex-col flex-wrap justify-end text-base font-normal leading-6 text-white md:flex-row gap-x-6 gap-y-4 font-geometria">
            <div class="flex gap-2">
              <a class="whitespace-nowrap" href="/">Privacy Policy</a>
            </div>
            <div class="flex gap-2">
              <a class="whitespace-nowrap" href="/">Terms of Use</a>
            </div>
            <div class="flex gap-2">
              <a class="whitespace-nowrap" href="/">Cookie Settings</a>
            </div>
          </div>
        </div>

        <div class="flex text-base font-normal gap-9 font-geometria">
          <p class="text-[#8a8a8a] tracking-tighter">Язык:</p>
          <LangSelector />
        </div>
      </div>

      <div
        class="flex flex-col items-start justify-between gap-6 py-6 font-normal leading-6 md:text-base text-xs md:flex-row md:items-center font-geometria text-[#999999] border-t border-[#999999]/20">
        <div class="w-[91px] h-[29px]">
          <LogoLink />
        </div>
        <p class="text-right">™ Lookport,  SKY corporation LLC</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import LogoLink from './LogoLink.vue';
import LangSelector from './LangSelector.vue';
</script>
