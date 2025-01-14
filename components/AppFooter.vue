<template>
  <footer class="relative w-full section">
    <div class="absolute bottom-0 z-0 bg-black w-full h-[200lvh]"></div>
    <div class="absolute bottom-0 left-0 z-10 w-full">
      <div class="body">
        <div class="pulse-background"></div>
        <div class="gradient-overlay"></div>
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
    </div>
  </footer>
</template>

<script setup>
import LogoLink from './LogoLink.vue';
import LangSelector from './LangSelector.vue';
</script>

<style scoped>
.body {
  margin: 0;
  padding: 0;
  height: 100lvh;
  width: 100%;
  background: black;
}

/* Стили для контейнера с фоном */
.pulse-background {
  position: absolute;
  left: 10%;
  width: 100vw;
  /* Ширина контейнера */
  height: 100lvh;
  /* Высота контейнера */
  background-image: url('/images/Vector.png');
  /* Устанавливаем картинку как фон */
  background-repeat: no-repeat;
  /* Отключаем повторение фона */
  background-size: 90% 120%;
  /* Начальный размер фона */
  animation: skewAnimation 5s cubic-bezier(0.42, 0, 0.58, 1) infinite alternate;
  transition: background-size 0.2s ease-out;
  /* Плавный переход */
  filter: blur(25px);
  /* animation: skewAnimation 5s cubic-bezier(0.42, 0, 0.58, 1) infinite alternate; */
}

.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100lvh;
  background: radial-gradient(circle at 10% 10%, rgb(0, 195, 255), rgba(255, 0, 225, 0.638));
  mix-blend-mode: overlay;
  /* Накладываем эффект */
  animation: gradientFlow1 5s ease-in infinite;
  /* Увеличиваем время анимации */
  z-index: 2;
}

/* Анимация для фона */
@keyframes skewAnimation {
  0% {
    background-size: 80% 100%;
  }

  100% {
    background-size: 75% 110%;
  }
}

@keyframes gradientFlow1 {
  0% {
    opacity: 0;
  }

  25% {
    opacity: 0.25;
  }

  50% {
    opacity: 0.8;
  }

  75% {
    opacity: 0.25;
  }

  100% {
    opacity: 0;
  }
}
</style>
