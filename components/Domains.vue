<template>
  <div class="relative z-20 w-full h-lvh md:max-h-[1080px] md:min-h-[900px] section visible bg-pagebg">
    <div class="absolute inset-0 w-full h-full">
      <div class="body">
        <div class="pulse-background"></div>
        <div class="pulse-background-left"></div>
        <div class="pulse-background-right"></div>
      </div>
    </div>
    <img src="/images/domain-glass.png" class="absolute w-full max-w-[508px] bottom-0 -left-56 z-[2]" alt="">
    <div class="relative w-full h-full overflow-hidden">


      <div
        class="absolute z-40 -bottom-20 blur-xl left-1/2 -translate-x-1/2 w-[120vw] h-1/2 bg-[linear-gradient(to_bottom,_rgba(0,0,0,0)_0%,_#000_65%)]">
      </div>
      <section
        class="relative z-30 flex flex-col items-center justify-center w-full max-w-screen-lg px-6 py-40 mx-auto md:px-10 xl:max-w-screen-xl">
        <h1
          class="anim-up md:text-8xl text-5xl leading-none font-normal tracking-[-0.01em] text-center text-white font-ag uppercase mb-6">
          Custom domain for your events
        </h1>
        <p
          class="anim-up md:text-2xl text-lg leading-[140%] font-normal tracking-tighter font-geometria text-center text-[#bbbbbb] mb-16">
          Brand your events with custom domains.<br />
          Integrate your branding seamlessly.
        </p>

        <div
          class="anim-up w-full 2xl:w-[1320px]  bg-[linear-gradient(68deg,_rgba(49,_52,_64,_0.8)_0%,_rgba(255,_255,_255,_0)_100%)] rounded-[41px] border-[1.7px] md:pt-8 pt-4 border-[#1E1D20]/80 h-[1100px] shadow-[0_2.56px_32px_rgba(0,0,0,0.5)] backdrop-blur-2xl">
          <div class="flex gap-4 md:px-11 px-8 md:mb-[27px] mb-4">
            <div
              class="rounded-full bg-[radial-gradient(circle,_rgba(196,_196,_196,_1)_0%,_rgba(196,_196,_196,_0.52)_100%)] md:h-[22px] md:w-[22px] h-4 w-4 opacity-30">
            </div>
            <div
              class="rounded-full bg-[radial-gradient(circle,_rgba(196,_196,_196,_1)_0%,_rgba(196,_196,_196,_0.52)_100%)] md:h-[22px] md:w-[22px] h-4 w-4 opacity-30">
            </div>
            <div
              class="rounded-full bg-[radial-gradient(circle,_rgba(196,_196,_196,_1)_0%,_rgba(196,_196,_196,_0.52)_100%)] md:h-[22px] md:w-[22px] h-4 w-4 opacity-30">
            </div>
          </div>
          <div class="flex w-full h-[1.7px] bg-white/10 mb-[74px]"></div>
          <div class="flex w-full px-6 anim-up">
            <div
              class="rounded-[15px] bg-white/10 border-[0.64px] h-12 md:h-[78px] gap-2 border-white/10 shadow-md flex w-full items-center justify-center max-w-[712px] mx-auto">
              <div class="w-4 h-4 md:h-6 md:w-6">
                <WebIcon />
              </div>
              <p class="text-base font-medium leading-none md:text-3xl font-geometria rotated-grad">
                tickets.yourdomain.com</p>
            </div>
          </div>

        </div>
      </section>
    </div>
  </div>

</template>

<script setup>
import WebIcon from "./WebIcon.vue";
</script>

<style scoped>
.text-grad {
  background-image: linear-gradient(to right,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(255, 255, 255, 1) 50%,
      rgba(255, 255, 255, 0.4) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.rotated-grad {
  background-image: linear-gradient(-105deg,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(255, 255, 255, 1) 50%,
      rgba(255, 255, 255, 0.4) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.body {
  margin: 0;
  padding: 0;
  /* background: #000; Чёрный фон */
  overflow: hidden;
  height: 100%;
  cursor: pointer;
}
.pulse-background-left{
  position: absolute;
  left: -10%;
  min-width: 1000px;
  width: 100vw; /* Ширина контейнера */
  height: 100%; /* Высота контейнера */
  background-image: url('/images/left.png'); /* Устанавливаем картинку как фон */
  background-repeat: no-repeat; /* Отключаем повторение фона */
  background-size: 80% 100%; /* Начальный размер фона */
  filter: blur(25px);
}
.pulse-background-right{
  position: absolute;
  left: 40%;
  min-width: 1000px;
  width: 100vw; /* Ширина контейнера */
  height: 100%; /* Высота контейнера */
  background-image: url('/images/right.png'); /* Устанавливаем картинку как фон */
  background-repeat: no-repeat; /* Отключаем повторение фона */
  background-size: 80% 100%; /* Начальный размер фона */
  
  transition: background-size 0.4s ease-out; /* Плавный переход */
  filter: blur(25px);
}
/* Стили для контейнера с фоном */
.pulse-background {
  position: absolute;
  left: 24%;
  top: 35%;
  min-width: 1000px;
  width: 100vw; /* Ширина контейнера */
  height: 100%; /* Высота контейнера */
  background-image: url('/images/center.png'); /* Устанавливаем картинку как фон */
  background-repeat: no-repeat; /* Отключаем повторение фона */
  background-size: 45% 66%; /* Начальный размер фона */
  
  filter: blur(25px);

}

.visible .pulse-background-right {
  animation: skewAnimation 5s cubic-bezier(0.42, 0, 0.58, 1) infinite alternate;
}

.visible .pulse-background {
  animation: transformAnimation 5s cubic-bezier(0.4, 0, 0.2, 1) infinite alternate;
}
@keyframes transformAnimation {
  0% {
    transform: scale(0.8);
  }
  100% {
    transform: scale(0.9);
  }
}
.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background: radial-gradient(circle at 5% 5%, rgb(0, 255, 195), rgba(225, 0, 255, 0.638));
  mix-blend-mode: overlay; /* Накладываем эффект */
  
  z-index: 2;
}

.visible .gradient-overlay {
  animation: gradientFlow1 5s ease-in infinite; /* Увеличиваем время анимации */
}

/* Анимация искажения правого края */
@keyframes skewAnimation {
  0% {
    background-size: 80% 100%; /* Начальный размер фона */
  }
  100% {
    background-size: 84% 105%; /* Конечный размер фона */
  }
}
@keyframes gradientFlow1 {
  0% {
    opacity: 0;
  }
  25%{
    opacity: 0.25;
  }
  50%{
    opacity: 0.8;
  }
  75%{
    opacity: 0.25;
  }
  100% {
    opacity: 0;
  }
}
</style>
