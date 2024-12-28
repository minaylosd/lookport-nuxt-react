<!-- <template>
  <div class="w-full">
    <section
      class="flex flex-col items-center justify-center w-full max-w-screen-lg px-6 py-48 mx-auto md:px-10 xl:max-w-screen-xl">
      <div class="mb-6">
        <Badge value="Seamless Branding" />
      </div>
      <h1
        class="md:text-8xl text-5xl leading-none font-normal tracking-[-0.01em] text-center font-ag uppercase mb-6 text-grad">
        Custom domain for your events
      </h1>
      <p
        class="md:text-2xl text-lg leading-[140%] font-normal tracking-tighter font-geometria text-center text-[#bbbbbb]">
        Brand your events with custom domains.<br />
        Integrate your branding seamlessly.
      </p>
    </section>
  </div>
</template> -->

<template>
  <!-- if needed radial gradient: bg-[radial-gradient(ellipse,_rgba(35,_28,_61,_1)_0%,#0A0A0A_100%)] -->
  <div class="w-full max-h-[100svh] overflow-hidden relative">
    <img src="/images/notifications-glass.png" class="absolute w-full max-w-[800px] -top-96 -right-96" alt="">
    <section
      class="relative z-30 flex flex-col items-center justify-center w-full max-w-screen-lg px-6 py-40 mx-auto md:px-10 xl:max-w-screen-xl">
      <h1
        class="md:text-8xl text-5xl leading-none font-normal tracking-[-0.01em] text-center text-white font-ag uppercase mb-6">
        Custom domain for your events
      </h1>
      <p
        class="md:text-2xl text-lg leading-[140%] font-normal tracking-tighter font-geometria text-center text-[#bbbbbb] mb-16">
        Brand your events with custom domains.<br />
        Integrate your branding seamlessly.
      </p>

      <div class="w-full bg-[linear-gradient(68deg,_rgba(49,_52,_64,_0.8)_0%,_rgba(255,_255,_255,_0)_100%)] rounded-[41px] border-[1.7px] md:pt-8 pt-4 border-[#1E1D20]/80 h-[1100px] shadow-lg backdrop-blur-lg">
        <div class="flex gap-4 md:px-11 px-8 md:mb-[27px] mb-4">
          <div class="rounded-full bg-[radial-gradient(circle,_rgba(196,_196,_196,_1)_0%,_rgba(196,_196,_196,_0.52)_100%)] md:h-[22px] md:w-[22px] h-4 w-4 opacity-30"></div>
          <div class="rounded-full bg-[radial-gradient(circle,_rgba(196,_196,_196,_1)_0%,_rgba(196,_196,_196,_0.52)_100%)] md:h-[22px] md:w-[22px] h-4 w-4 opacity-30"></div>
          <div class="rounded-full bg-[radial-gradient(circle,_rgba(196,_196,_196,_1)_0%,_rgba(196,_196,_196,_0.52)_100%)] md:h-[22px] md:w-[22px] h-4 w-4 opacity-30"></div>
        </div>
        <div class="flex w-full h-[1.7px] bg-white/10 mb-[74px]"></div>
        <div class="flex w-full px-6"><div class="rounded-[15px] bg-white/10 border-[0.64px] h-12 md:h-[78px] gap-2 border-white/10 shadow-md flex w-full items-center justify-center max-w-[712px] mx-auto">
          <div class="w-4 h-4 md:h-6 md:w-6"><WebIcon /></div>
          <p class="text-base font-medium leading-none md:text-3xl font-geometria rotated-grad">tickets.yourdomain.com</p>
        </div></div>
        
      </div>
    </section>
  </div>
</template>

<script setup>
import Badge from "./Badge.vue";
import WebIcon from "./WebIcon.vue";
</script>

<style scoped>
.text-grad {
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.4) 0%,
    rgba(255, 255, 255, 1) 50%,
    rgba(255, 255, 255, 0.4) 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.rotated-grad {
  background-image: linear-gradient(
    -105deg,
    rgba(255, 255, 255, 0.4) 0%,
    rgba(255, 255, 255, 1) 50%,
    rgba(255, 255, 255, 0.4) 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
</style>
