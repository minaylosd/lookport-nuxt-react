<template>
  <section ref="section" class="relative flex items-center visible w-full section hero md:mb-20 md:h-screen">
    <div class="absolute inset-0 z-30 w-full h-full">
      <div class="body">
        <div class="black"></div>
      </div>
    </div>

    <div
      class="relative z-30 flex flex-col items-center justify-between w-full max-w-screen-lg gap-4 px-6 pt-20 pb-10 mx-auto md:px-10 md:pt-40 md:pb-40 md:gap-20 md:flex-row xl:max-w-screen-xl">
      <div class="flex flex-col">
        <Badge class="mb-3 anim-up" value="Unlock the power of AI" />
        <h1
          class="anim-up mb-3 text-5xl font-normal leading-none text-white uppercase md:text-8xl 3xl:text-[134px] font-ag">
          <span class="whitespace-nowrap">AI-driven Event</span><br />ticketing platform
        </h1>
        <p
          class="anim-up md:mb-[70px] mb-6 relative z-10 md:text-2xl 3xl:text-[32px] text-lg 3xl:leading-[140%] font-normal tracking-tighter font-geometria text-grad">
          Empowering promoters with Artificial Intelligence
        </p>
        <div class="flex items-center gap-4 md:flex-row">
          <GetStartedBtn :big="true" />
          <div ref="link"
            class="anim-up whitespace-nowrap cursor-pointer text-lg font-normal leading-[13px] px-[15px] py-3 text-[#eeeeee] font-geometria text-arrow">
            Learn More</div>
        </div>
      </div>

      <div class="relative h-full w-full 3xl:max-w-[371px] max-w-[340px]">
        <div class="min-h-[500px] tickets">
          <!-- Верхняя картинка -->
          <div ref="upperWrapper"
            class="anim-up wrapper wrapper-upper [transform:perspective(600px)_rotateY(0deg)_rotateX(0deg)]">
            <img src="/images/ticket-upper.png" alt="Interactive Image" class="interactive-image" />
            <div ref="upperGlare" class="glare"></div>
          </div>
          <!-- Нижняя картинка -->
          <div ref="lowerWrapper" class="anim-up wrapper wrapper-lower">
            <img src="/images/ticket-lower.png" alt="Interactive Image" class="interactive-image" />
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
import GetStartedBtn from './GetStartedBtn.vue';

const section = ref(null);

const upperWrapper = ref(null);
const upperGlare = ref(null);

const lowerWrapper = ref(null);
const lowerGlare = ref(null);

const link = ref(null);

const friction = 1 / 60;
const maxAngle = 15;
let x = 0, y = 0;
let targetX = 0, targetY = 0;

const applyTransforms = (wrapper, glare, xFactor, yFactor, rotateFactorX, rotateFactorY, translateZ = 0) => {
  wrapper.style.transform = `
      perspective(600px)
      rotateY(${y * yFactor}deg)
      rotateX(${x * xFactor}deg)
      translateZ(${translateZ}px)
    `;

  wrapper.style.webkitTransform = `
      perspective(600px)
      rotateY(${y * yFactor}deg)
      rotateX(${x * xFactor}deg)
      translateZ(${translateZ}px)
    `;

  glare.style.left = `${50 + y * rotateFactorY}%`;
  glare.style.top = `${50 - x * rotateFactorX}%`;
}

const updateAnimation = () => {
  x += (targetX - x) * friction;
  y += (targetY - y) * friction;

  applyTransforms(upperWrapper.value, upperGlare.value, 0.5, 0.8, 1.1, 1.1);
  applyTransforms(lowerWrapper.value, lowerGlare.value, 0.2, 0.2, 0.7, 0.7, 150);

  requestAnimationFrame(updateAnimation);
};

const onPointerMove = (e) => {
  const followX = (window.innerWidth / 2 - e.clientX) / 70;
  const followY = (window.innerHeight / 2 - e.clientY) / 30;

  targetY = Math.max(-maxAngle, Math.min(maxAngle, -followX));
  targetX = Math.max(-maxAngle, Math.min(maxAngle, followY));
};

const registerAnimation = () => {
  section.value.addEventListener('pointermove', onPointerMove);

  updateAnimation();
}

defineExpose({ registerAnimation });

onMounted(() => {
  const scroll = () => {
    const ai = document.getElementById('ai');
    ai.scrollIntoView({ behavior: "smooth", block: 'nearest', inline: 'center' })
  }

  link.value.addEventListener('click', scroll)
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
  position: relative;
  z-index: -11;
}

.black {
  z-index: -10;
  background-image: url('/screen-1-background/img/back.png');
  background-position: center;
  object-fit: cover;
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

  /* Анимация изменения прозрачности */
}

.visible .black::after {
  animation: pulse 3s infinite alternate;
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
  -webkit-transform-style: preserve-3d;
  perspective: 600px;
  -webkit-perspective: 600px;
  transition: transform 0.2s ease-out;
  -webkit-transition: -webkit-transform 0.2s ease-out;
}

.wrapper-upper {
  z-index: 2;
  left: 6px;
  /* Верхняя картинка всегда сверху */
}

.wrapper-lower {
  z-index: 1;
  /* Нижняя картинка находится под верхней */
  right: 6px;
  /* transform: translateZ(150px); */
  transform: perspective(600px) rotateY(0deg) rotateX(0deg) translateZ(150px);
  -webkit-transform: perspective(600px) rotateY(0deg) rotateX(0deg) translateZ(150px);
}

.interactive-image {
  min-width: 180px;
  width: 180px;
  /* Размер обеих картинок одинаковый */
  height: auto;
  border-radius: 10px;
  object-fit: cover;
  pointer-events: none;
  overflow: hidden;
  position: relative;
  filter: brightness(97%);
  -webkit-filter: brightness(97%);
}

.glare {
  position: absolute;
  width: 140px;
  /* Размер блика */
  height: 100px;
  /* Размер блика */
  background: radial-gradient(circle, rgba(255, 255, 255, 0.93), rgba(255, 255, 255, 0.3));
  border-radius: 50%;
  pointer-events: none;
  filter: blur(20px);
  -webkit-filter: blur(20px);
  opacity: 0.6;
  /* Блик слегка видим */
  transform: translate(-50%, -50%) scale(1);
  -webkit-transform: translate(-50%, -50%) scale(1);
  top: 50%;
  left: 50%;
  transition: left 0.2s ease, top 0.2s ease, opacity 0.2s ease, transform 0.2s ease;
  -webkit-transition: left 0.2s ease, top 0.2s ease, opacity 0.2s ease, transform 0.2s ease;
}

@media (min-width: 1680px) {
  .wrapper-upper {
    left: -15px;
  }

  .wrapper-lower {
    z-index: 1;
    /* Нижняя картинка находится под верхней */
    right: -140px;
    /* transform: translateZ(300px); */
    transform: perspective(600px) rotateY(0deg) rotateX(0deg) translateZ(150px);
    -webkit-transform: perspective(600px) rotateY(0deg) rotateX(0deg) translateZ(150px);
  }

  .interactive-image {
    min-width: 300px;
    width: 300px;
    /* Размер обеих картинок одинаковый */
    height: auto;
    border-radius: 10px;
    object-fit: cover;
    pointer-events: none;
    overflow: hidden;
    position: relative;
    filter: brightness(97%);
    -webkit-filter: brightness(97%);
  }

}
</style>
