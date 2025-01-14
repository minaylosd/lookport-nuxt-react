<template>
  <div class="relative flex items-center w-full mb-20 md:h-lvh max-h-max section">
    <div class="absolute inset-0 w-full h-full">
      <div class="body-pricing">
        <div class="pulse-background-pricing"></div>
        <div class="gradient-overlay-pricing"></div>
      </div>
    </div>
    <!-- <img
      class="anim-up md:absolute md:left-0 object-cover md:w-6/12 h-auto md:min-w-[600px] max-w-screen-lg md:block hidden"
      src="/images/seats.png" /> -->
    <section
      class="flex flex-col items-center justify-between w-full max-w-screen-lg gap-10 px-6 py-10 mx-auto md:px-10 md:py-16 md:flex-row xl:max-w-screen-xl xl:gap-20">
      <div class="relative flex flex-col items-center order-2 gap-5 anim-up basis-5/12 xl:basis-1/2 md:order-none">
        <img class="absolute top-1/2 left-1/2 -translate-x-[47%] -translate-y-[45%] min-w-[200%] object-cover"
          src="/images/seats-gradient.png" alt="">
        <img class="relative z-10 block object-cover w-full max-w-[520px] h-auto" src="/images/seats-nogradient.png" />
      </div>

      <div class="relative z-30 flex flex-col xl:gap-10 gap-6 pt-[18px] basis-7/12 xl:basis-1/2">
        <h1
          class="anim-up md:text-8xl text-5xl leading-[110%] font-normal tracking-[-0.01em] text-white font-ag uppercase xl:whitespace-nowrap">
          Seated or standing
        </h1>
        <p
          class="anim-up relative z-10 md:text-2xl text-lg leading-[140%] font-normal tracking-[-0.05em] font-geometria text-[#bbbbbb]">
          Flexible seat maps for all venues.<br />Easily customize and manage
          seating arrangements
        </p>

        <ul class="flex flex-col gap-4">
          <li v-for="(item, index) in seatsBullets" :key="index"
            class="anim-up flex items-center gap-4 text-lg leading-none font-normal tracking-[-0.04em] font-geometria text-[#dddddd]">
            {{ item }}
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script setup>
const seatsBullets = [
  "Customizable seat maps",
  "Simple seat management",
  "Add new seat maps within one business day",
];
</script>

<style scoped>
.text-grad {
  background-image: linear-gradient(105deg,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(255, 255, 255, 1) 50%,
      rgba(255, 255, 255, 0.4) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

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

li::before {
  content: "";
  background-image: url("~/assets/images/icons/list-disk.svg");
  background-repeat: no-repeat;
  display: inline-block;
  width: 18px;
  height: 18px;
  min-width: 18px;
  min-height: 18px;
}

/* Основные стили страницы */
.body {
  margin: 0;
  padding: 0;
  /* background: #0a0a0a; */
  /* overflow: hidden; */
  height: 100%;
  cursor: pointer;
}

/* Стили для фоновой картинки */
.pulse-background {
  position: absolute;
  left: -30px;
  width: 100vw;
  height: 100%;
  background-image: url('/images/Neon.png');
  /* Градиентное изображение */
  background-repeat: no-repeat;
  background-size: auto 100%;
  object-fit: cover;

  filter: blur(30px) brightness(1.2) contrast(1.1);
  z-index: 1;
}

.visible .pulse-background {
  animation: skewAnimation 5s cubic-bezier(0.42, 0, 0.58, 1) infinite alternate;
}

/* Наложение динамического слоя */
.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background: radial-gradient(circle at 70% 80%, rgba(0, 255, 0, 0.8), rgba(0, 0, 255, 0.5));
  mix-blend-mode: overlay;
  /* Накладываем эффект */

  /* Увеличиваем время анимации */
  z-index: 2;
}

.visible .gradient-overlay {
  animation: gradientFlow1 5s ease-in infinite;
}

/* Анимация для фона */
@keyframes skewAnimation {
  0% {
    background-size: 30% 100%;
  }

  100% {
    background-size: 40% 100%;
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
    opacity: 0.5;
  }

  75% {
    opacity: 0.25;
  }

  100% {
    opacity: 0;
  }
}

.body-pricing {
  margin: 0;
  padding: 0;
  /* background: #0a0a0a; Чёрный фон */
  /* overflow: hidden; */
  height: 100lvh;
  cursor: pointer;
}

.pulse-background-pricing {
  position: absolute;
  left: 75%;
  width: 100vw;
  /* Ширина контейнера */
  height: 100lvh;
  /* Высота контейнера */
  background-image: url('/images/Neonright.png');
  /* Устанавливаем картинку как фон */
  background-repeat: no-repeat;
  /* Отключаем повторение фона */
  background-size: auto 100%;
  /* Начальный размер фона */
  object-fit: cover;

  transition: background-size 0.2s ease-out;
  /* Плавный переход */
  filter: blur(25px) brightness(1.6) contrast(1.1);
}

.visible .pulse-background-pricing {
  animation: skewAnimation 5s cubic-bezier(0.42, 0, 0.58, 1) infinite alternate;
}

/* Наложение динамического слоя */
.gradient-overlay-pricing {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100lvh;
  background: radial-gradient(circle at 10% 10%, rgb(153, 0, 255), rgb(0, 4, 255, 0.4));
  mix-blend-mode: overlay;
  /* Накладываем эффект */

  z-index: 2;
}

.visible .gradient-overlay-pricing {
  animation: gradientFlow1 5s ease-in infinite;
  /* Увеличиваем время анимации */
}

/* Анимация для фона */
@keyframes skewAnimationPricing {
  0% {
    background-size: 30% 100%;
  }

  100% {
    background-size: 35% 100%;
  }
}

@keyframes gradientFlow1Pricing {
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

@media (min-width:640px) {
  .pulse-background {
    background-size: 30% 100%;
  }

  .pulse-background-pricing {
    background-size: 30% 100%;
    /* Начальный размер фона */
  }
}
</style>