<template>
  <div id="broadcasting" class="relative flex items-center w-full mb-20 md:h-lvh md:max-h-max section">
    <div class="absolute inset-0 w-full h-full">
      <div class="body">
        <div class="pulse-background"></div>
        <div class="circle"></div>
      </div>
    </div>

    <div class="anim-up">
      <NuxtImg format="webp" src="/images/broadcast-glass.png"
        class="absolute z-30 top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-full max-w-[900px] h-auto object-cover"
        alt="Glass circle" />
    </div>

    <section
      class="relative z-30 flex flex-col items-center justify-between w-full max-w-screen-lg gap-20 px-6 py-10 mx-auto md:px-10 md:py-48 md:flex-row xl:max-w-screen-xl">
      <div class="relative flex justify-center order-1 md:justify-end basis-5/12 md:order-none">
        <NuxtImg format="webp" class="anim-up object-cover w-full md:w-[120%] max-w-[611px] h-auto"
          src="/images/broadcast.png" alt="Glass figure" />
        <NuxtImg format="webp" class="absolute z-10 bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-[200%] max-w-[1200px] object-cover"
          src="/images/broadcast-figure.png" alt="Gradient background" />
      </div>

      <div class="relative z-30 flex flex-col gap-6 basis-7/12">
        <h1 class="text-5xl font-normal leading-none text-white uppercase anim-up md:text-8xl font-ag">
          Broadcast your<br />events online
        </h1>
        <p
          class="anim-up relative z-10 md:text-2xl text-lg leading-[130%] font-normal tracking-tighter font-geometria text-[#eeeeee]">
          Get real-time notifications for every ticket sold and a daily summary
          with sales analytics directly in our chat bot in WhatsApp or Telegram
        </p>
        <div class="anim-up">
          <GetStartedBtn />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import GetStartedBtn from "./GetStartedBtn.vue";
</script>

<style scoped>
.body {
  margin: 0;
  padding: 0;
  height: 100%;
  cursor: pointer;
}

.pulse-background {
  position: absolute;
  left: 40%;
  top: 20%;
  width: 110vw;
  height: 100%;
  background-image: url('/new.png');
  background-repeat: no-repeat;
  background-size: 50% 80%;
  filter: blur(5px) brightness(1) contrast(1);
  -webkit-filter: blur(5px) brightness(1) contrast(1);
}

.pulse-background::after {
  content: '';
  background: linear-gradient(135deg, #00D1FF 0%, #C348FF 51.56%, #FF2E3A 100%);
  position: absolute;
  top: 3%;
  right: 65%;
  width: 30vw;
  height: 400px;
  filter: blur(105px) brightness(1) contrast(0.7);
  -webkit-filter: blur(105px) brightness(1) contrast(0.7);
}

.circle {
  position: absolute;
  top: 15%;
  left: -350px;
  width: 70vh;
  max-width: 700px;
  height: 70vh;
  max-height: 700px;
  border-radius: 50%;
  background: linear-gradient(117.5deg, rgba(49, 51, 64, 0.4) 0.16%, rgba(49, 51, 64, 0) 100%);
  backdrop-filter: blur(70px);
  pointer-events: none;
}

@media (min-width: 640px) {
  .circle {
    width: 90vh;
    height: 90vh;
    left: -45vh;
  }
}
</style>
