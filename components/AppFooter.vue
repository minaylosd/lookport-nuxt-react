<template>
  <footer class="relative w-full pt-6 pb-6 overflow-hidden border-t border-[#505050]/25 md:pt-9 md:pb-8 bg-tertiary">
    <div class="absolute inset-0 bg-[radial-gradient(ellipse,_rgba(33,_27,_58,_1)_0%,#0A0A0A_100%)] opacity-70"></div>
    <div class="absolute inset-0 z-10 bg-[#0A0A0A]/40"></div>
    <div class="relative z-20 w-full max-w-screen-xl px-6 mx-auto md:px-10">
      <div class="flex flex-col justify-between gap-4 pb-5 md:flex-row">
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

        <!-- <div class="flex text-base font-normal gap-9 font-geometria">
          <p class="text-[#8a8a8a] tracking-tighter">Язык:</p>
          <LangSelector />
        </div> -->
      </div>

      <div
        class="flex flex-col items-start justify-between gap-6 pt-6 font-normal leading-6 md:text-base text-xs md:flex-row md:items-center font-geometria text-[#999999] border-t border-[#999999]/20">
        <div class="w-[91px] h-[29px]">
          <LogoLink />
        </div>
        <p class="text-right">™ Lookport LTD<br />London, the UK</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import LogoLink from './LogoLink.vue';
import LangSelector from './LangSelector.vue';
</script>
