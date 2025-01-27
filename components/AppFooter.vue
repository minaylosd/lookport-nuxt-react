<template>
  <footer class="relative w-full section">
    <div class="absolute bottom-0 z-0 bg-black w-full h-[200lvh]"></div>
    <div class="absolute bottom-0 left-0 z-10 w-full">
      <div class="body">
        <div class="pulse-background"></div>
      </div>
    </div>
    <div
      class="relative z-30 w-full pt-6 pb-6 overflow-hidden border-t border-[#505050]/25 md:pt-9 md:pb-8 bg-tertiary">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse,_rgba(33,_27,_58,_1)_0%,#0A0A0A_100%)] opacity-70"></div>
      <div class="absolute inset-0 z-10 bg-[#0A0A0A]/40"></div>

      <div class="relative z-20 w-full max-w-screen-xl px-6 mx-auto md:px-10">
        <div class="flex flex-col justify-between gap-4 pb-5 md:flex-row">
          <div class="flex flex-col items-start justify-between w-full gap-6 md:flex-row md:gap-30">
            <div
              class="flex flex-col flex-wrap justify-end text-base font-normal leading-6 text-white md:flex-row gap-x-6 gap-y-4 font-geometria">
              <div
                class="relative flex gap-2 group text-[#b6b6b6] hover:text-white transition-colors duration-500 ease-out">
                <a class="whitespace-nowrap" href="/PRIVACY_POLICY_Lookport_LTD.pdf" target="_blank">Privacy Policy</a>
                <div
                  class="absolute bottom-0 left-0 flex w-[0%] h-[1px] bg-white group-hover:w-full transition-all duration-300 ease-out">
                </div>
              </div>
              <div
                class="relative flex gap-2 group text-[#b6b6b6] hover:text-white transition-colors duration-500 ease-out">
                <a class="whitespace-nowrap" href="/PURCHASE_POLICY_Lookport_LTD.pdf" target="_blank">Terms of Use</a>
                <div
                  class="absolute bottom-0 left-0 flex w-[0%] h-[1px] bg-white group-hover:w-full transition-all duration-300 ease-out">
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="flex flex-col items-start justify-between gap-6 pt-6 font-normal leading-6 md:text-base text-xs md:flex-row md:items-center font-geometria text-[#999999] border-t border-[#999999]/20">
          <div class="w-[91px] h-[29px]">
            <LogoLink />
          </div>
          <p class="text-right">™ Lookport LTD<br />London, the UK</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import LogoLink from './LogoLink.vue';
</script>

<style scoped>
.body {
  margin: 0;
  padding: 0;
  height: 100lvh;
  width: 100%;
  background: black;
}

.pulse-background {
  position: absolute;
  left: 10%;
  width: 100vw;
  height: 100lvh;
  background-image: url('/images/Vector.png');
  background-repeat: no-repeat;
  background-size: 90% 120%;
}

.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100lvh;
  background: radial-gradient(circle at 10% 10%, rgb(0, 195, 255), rgba(255, 0, 225, 0.638));
  mix-blend-mode: overlay;
  z-index: 2;
}
</style>
