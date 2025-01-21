<template>
  <div
    class="relative w-full section bg-[radial-gradient(ellipse_50%_30%_at_center,_rgba(35,28,61,1)_0%,_rgba(10,10,10,1)_100%)] mb-20">
    <div class="absolute inset-0 w-full h-full">
      <div class="body">
        <!-- <div class="pulse-background"></div> -->
        <!-- <div class="gradient-overlay"></div> -->
        <div class="pulse-background-left"></div>
      </div>
    </div>


    <section
      class="relative z-30 flex flex-col items-center justify-center w-full max-w-screen-lg gap-20 px-6 py-10 mx-auto md:justify-between md:px-10 md:py-40 md:flex-row xl:max-w-screen-xl">
      <div class="flex flex-col gap-6 basis-5/12 max-w-[420px]">
        <h1
          class="anim-up md:text-8xl text-5xl leading-none font-normal tracking-[-0.01em] text-white font-ag uppercase">
          Dynamic Prices and Donations
        </h1>
        <p
          class="anim-up relative z-10 md:text-2xl text-lg leading-[130%] font-normal tracking-tighter font-geometria text-white">
          Flexible pricing options to maximize revenue up to 30%
        </p>
      </div>

      <div class="w-full md:basis-5/12">
        <div class="relative z-30 flex flex-col justify-center gap-6 mx-auto max-w-96">
          <div class="anim-up absolute z-10 -bottom-[140px] -right-56 w-full max-w-[450px] h-auto ">
            <img src="/images/prices-glass.png" class="min-w-[450px] h-auto object-cover" alt="" />
          </div>

          <div
            class="anim-up relative z-30 flex flex-col justify-center md:w-full md:h-32 h-28 p-9 rounded-2xl font-geometria font-normal tracking-tighter text-white md:text-2xl text-lg border border-white/5 bg-[linear-gradient(68deg,_rgba(49,_52,_64,_0.8)_0%,_rgba(255,_255,_255,_0)_100%)] backdrop-blur-lg">
            Open price tickets
          </div>
          <div
            class="relative z-30 flex flex-col justify-center overflow-hidden border anim-up max-w-96 md:h-32 h-28 md:w-full p-9 rounded-2xl border-white/5">
            <img class="absolute inset-0 object-cover w-full h-full" src="/images/icons/ang-gradient.png" alt="" />
            <p class="relative z-30 text-lg font-normal tracking-tighter text-black md:text-2xl font-geometria">
              Donation<br />options
            </p>
          </div>
          <div
            class="anim-up relative z-30 flex max-w-96 flex-col justify-center md:w-full md:h-32 h-28 p-9 rounded-2xl font-geometria font-normal tracking-tighter text-white md:text-2xl text-lg border border-white/5 bg-[linear-gradient(68deg,_rgba(49,_52,_64,_0.8)_0%,_rgba(255,_255,_255,_0)_100%)] backdrop-blur-lg">
            Price adjustments<br />based on demand
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.body {
  margin: 0;
  padding: 0;
  height: 100%;
  /* cursor: pointer; */
}

/* Стили для контейнера с фоном */
.pulse-background {
  position: absolute;
  left: 40%;
  width: 100%;
  /* Ширина контейнера */
  height: 100%;
  /* Высота контейнера */
  background-image: url('/images/second.png');
  /* Устанавливаем картинку как фон */
  background-repeat: no-repeat;
  /* Отключаем повторение фона */
  background-size: 70% 120%;
  /* Начальный размер фона */

  /* filter: blur(25px); */
}

.visible .pulse-background {
  /* animation: skewAnimation 5s ease-in infinite alternate-reverse; */
}

.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background: radial-gradient(circle at 10% 10%, rgb(0, 195, 255), rgba(255, 0, 225, 0.638)); */
  /* mix-blend-mode: overlay; */
  /* Накладываем эффект */

  /* Увеличиваем время анимации */
  z-index: 2;
}

.visible .gradient-overlay {
  /* animation: gradientFlow1 5s ease-in infinite; */
}



.pulse-background-left {
  position: absolute;
  left: 5%;
  width: 100%;
  /* Ширина контейнера */
  height: 100%;
  /* Высота контейнера */
  background-image: url('/images/first.png');
  /* Устанавливаем картинку как фон */
  background-repeat: no-repeat;
  /* Отключаем повторение фона */
  background-size: 50% 100%;
  /* Начальный размер фона */
  /* filter: blur(25px); */
  /* animation: skewAnimation 5s cubic-bezier(0.42, 0, 0.58, 1) infinite alternate; */
}

/* Анимация искажения правого края */
@keyframes skewAnimation {
  0% {
    background-size: 70% 120%;
    /* Начальный размер фона */
  }

  100% {
    background-size: 68% 120%;
    /* Конечный размер фона */
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
