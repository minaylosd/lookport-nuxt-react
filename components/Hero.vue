<template>
  <section ref="section" class="relative flex items-center w-full h-screen">
    <div class="absolute inset-0 z-30 w-full h-full">
      <div class="body">
        <div class="black"></div>
        <!-- <img ref="image" class="image" src="/screen-1-background/img/tickets.png" /> -->
      </div>
    </div>

    <div
      class="relative z-30 flex flex-col items-center justify-between w-full max-w-screen-lg gap-4 px-6 pt-20 pb-10 mx-auto md:px-10 md:pt-40 md:pb-40 md:gap-20 md:flex-row xl:max-w-screen-xl">
      <div class="flex flex-col gap-6">
        <Badge value="Unlock the power of AI" />
        <h1 class="text-5xl font-normal leading-none text-white uppercase md:text-8xl xl:text-[134px] font-ag">
          AI-driven Event ticketing platform
        </h1>
        <p
          class="relative z-10 md:text-2xl xl:text-[32px] text-lg xl:leading-[140%] font-normal tracking-tighter font-geometria text-grad">
          Empowering promoters with artificial intelligence
        </p>
        <div class="flex flex-col items-start gap-4 md:items-center md:flex-row">
          <button
            class="relative px-[30px] py-[15px] overflow-hidden rounded-full text-lg font-normal leading-[13px] tracking-tighter text-black font-geometria border border-[#808080]">
            <img src="/images/icons/btn-grad.png" class="absolute inset-0 object-cover w-full h-full" alt="" />
            <span class="relative z-10">Get Started</span>
          </button>
          <NuxtLink
            class="text-lg font-normal leading-[13px] px-[15px] py-3 tracking-tighter text-[#eeeeee] font-geometria text-arrow">
            Learn More</NuxtLink>
        </div>
      </div>

      <div class="relative h-full w-full xl:max-w-[371px] max-w-[340px]">
        <div class="tickets">
          <!-- Верхняя картинка -->
          <div ref="upperWrapper" class="wrapper wrapper-upper">
            <img ref="upperImage" src="/images/ticket-upper.png" alt="Interactive Image" class="interactive-image" />
            <div ref="upperGlare" class="glare"></div>
          </div>
          <!-- Нижняя картинка -->
          <div ref="lowerWrapper" class="wrapper wrapper-lower">
            <img ref="lowerImage" src="/images/ticket-lower.png" alt="Interactive Image" class="interactive-image" />
            <div ref="lowerGlare" class="glare"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Badge from "./Badge.vue";

const section = ref(null);

const upperWrapper = ref(null);
const upperImage = ref(null);
const upperGlare = ref(null);

const lowerWrapper = ref(null);
const lowerImage = ref(null);
const lowerGlare = ref(null);

const friction = 1 / 60;
const maxAngle = 15;
let x = 0, y = 0;
let targetX = 0, targetY = 0;

const updateAnimation = () => {
  x += (targetX - x) * friction;
  y += (targetY - y) * friction;

  // Анимация верхней картинки
  upperWrapper.value.style.transform = `
      perspective(600px)
      rotateY(${y * 0.8}deg)
      rotateX(${x * 0.5}deg)
    `;
  const upperGlareX = 50 + y * 1.1;
  const upperGlareY = 50 - x * 1.1;
  upperGlare.value.style.left = `${upperGlareX}%`;
  upperGlare.value.style.top = `${upperGlareY}%`;

  // Анимация нижней картинки
  lowerWrapper.value.style.transform = `
      perspective(600px)
      rotateY(${y * 0.2}deg)
      rotateX(${x * 0.2}deg)
      translateZ(150px) /* Смещаем назад */
    `;
  const lowerGlareX = 50 + y * 0.7;
  const lowerGlareY = 50 - x * 0.7;
  lowerGlare.value.style.left = `${lowerGlareX}%`;
  lowerGlare.value.style.top = `${lowerGlareY}%`;

  requestAnimationFrame(updateAnimation);
};

onMounted(() => {
  section.value.addEventListener('mousemove', (e) => {
    const followX = (window.innerWidth / 2 - e.clientX) / 20;
    const followY = (window.innerHeight / 2 - e.clientY) / 20;

    targetY = Math.max(-maxAngle, Math.min(maxAngle, -followX));
    targetX = Math.max(-maxAngle, Math.min(maxAngle, followY));
  });

  updateAnimation();
})
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

.body {
  margin: 0;
  padding: 0;
  height: 100%;
  /* overflow: hidden; */
  background-color: #0a0a0a;
  /* Базовый фон */
  position: relative;
  z-index: -11;
}

.black {
  z-index: -10;
  background-image: url('/screen-1-background/img/back.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  filter: blur(50px);
  position: relative;
  /* Для позиционирования псевдоэлемента */
}

.black::after {
  filter: blur(50px);
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 90%;
  height: 90%;
  background: radial-gradient(ellipse 80% 60% at center, #3BAFDA 30%, transparent 55%),
    radial-gradient(ellipse 60% 90% at bottom right, #FF40FF 35%, transparent 95%),
    radial-gradient(ellipse 70% 50% at 50% 30%, #300dad 40%, transparent 80%);
  /* Градиент */
  z-index: 1;
  /* Псевдоэлемент должен быть поверх фона */
  opacity: 0;
  /* Начальная прозрачность */
  animation: pulse 3s infinite alternate;
  /* Анимация изменения прозрачности */
}

/* Анимация прозрачности */
@keyframes pulse {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 0.6;
  }
}

.tickets {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.wrapper {
  position: absolute;
  display: inline-block;
  transform-style: preserve-3d;
  perspective: 600px;
  transition: transform 0.2s ease-out;
}

.wrapper-upper {
  z-index: 2;
  /* Верхняя картинка всегда сверху */
}

.wrapper-lower {
  z-index: 1;
  /* Нижняя картинка находится под верхней */
  right: -140px;
  transform: translateZ(300px);
}

.interactive-image {
  width: 300px;
  /* Размер обеих картинок одинаковый */
  height: auto;
  border-radius: 10px;
  object-fit: cover;
  pointer-events: none;
  overflow: hidden;
  position: relative;
  filter: brightness(77%);
}

.glare {
  position: absolute;
  width: 250px;
  /* Размер блика */
  height: 100px;
  /* Размер блика */
  background: radial-gradient(circle, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0));
  border-radius: 50%;
  pointer-events: none;
  filter: blur(30px);
  opacity: 0.4;
  /* Блик слегка видим */
  transform: translate(-50%, -50%) scale(1);
  transition: left 0.2s ease, top 0.2s ease, opacity 0.2s ease, transform 0.2s ease;
}
</style>
