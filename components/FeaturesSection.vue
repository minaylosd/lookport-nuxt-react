<template>
  <div ref="stripeSection" class="relative flex items-center visible w-full mb-20 md:h-lvh md:max-h-max section">
    <div class="absolute inset-0 w-full h-full">
      <div class="body">
        <div ref='stripePulse' class="pulse-background"></div>
        <div class="gradient-overlay"></div>
      </div>
    </div>
    <section
      class="flex flex-col items-center justify-between w-full max-w-screen-lg gap-20 px-6 pt-10 mx-auto md:pt-40 md:pb-16 md:flex-row xl:max-w-screen-xl">
      <div class="relative flex flex-col order-2 basis-5/12 md:-order-none">

        <div class="relative z-10 flex flex-col items-center w-fit gap-7">
          <img class="anim-up absolute left-1/2 object-cover -translate-x-1/2 -bottom-1/3 max-w-[430px]"
            src="/images/stripe-glass.png" alt="" />
          <div
            class="anim-up w-[245px] flex items-center gap-3 p-2 rounded-xl border border-white/10 bg-[#333131]/100 backdrop-blur-3xl shadow-md">
            <img src="/images/icons/stripe-logo.svg" class="overflow-hidden w-11 h-11" />
            <div class="flex flex-col gap-1">
              <h5 class="text-xs font-medium text-white font-geometria">
                Find it one the
              </h5>
              <p class="text-sm font-bold text-white font-geometria whitespace-nowrap">
                Stripe App Marketplace
              </p>
            </div>
          </div>
          <div
            class="flex flex-col relative w-full max-w-[315px] pt-4 px-4 pb-[78px] rounded-[26px] border border-white/10 bg-[linear-gradient(to_bottom,_#10101000_0%,_#151515_25%,_#202020_75%,_#26262600_100%)] backdrop-blur-lg shadow-md">
            <div v-for="(item, index) in listItems" :key="index"
              :class="index != 0 ? 'pt-5 border-t border-white/10' : ''"
              class="flex items-center justify-between pb-5 anim-up">
              <div class="flex items-center gap-2">
                <img :src="item.img" class="overflow-hidden border rounded-full w-11 h-11 border-white/10"
                  :alt="item.name" />
                <div class="flex flex-col gap-1">
                  <h5 class="text-sm font-medium text-white font-geometria">
                    {{ item.name }}
                  </h5>
                  <p class="text-xs font-medium text-white/60 font-geometria">
                    {{ item.position }}
                  </p>
                </div>
              </div>
              <p class="text-sm font-medium text-white font-geometria">
                {{ item.summ }}
              </p>
            </div>
            <div
              class="anim-up absolute bottom-0 left-1/2 -translate-x-1/2 w-[350px] flex items-center justify-between p-[18px] rounded-[28px] border border-white/10 bg-[#333131]/100 backdrop-blur-2xl shadow-md">
              <div class="flex items-center gap-2">
                <img src="/images/icons/stripe-avatar.svg" class="w-12 h-12 overflow-hidden rounded-full" />
                <div class="flex flex-col gap-1">
                  <h5 class="text-base font-medium text-white font-geometria">
                    This week
                  </h5>
                  <p class="text-sm font-medium text-white/60 font-geometria">
                    417 tickets
                  </p>
                </div>
              </div>
              <p class="text-base font-medium text-white font-geometria">
                + $17 520.00
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex relative z-30 flex-col xl:gap-10 gap-6 pt-[18px] basis-7/12">
        <div
          class="md:text-8xl text-5xl flex flex-wrap items-center leading-none font-normal tracking-[-0.01em] text-white font-ag uppercase">
          <span class="inline-block anim-up">Instant access to your funds with
            <div class="inline-flex w-24 md:w-56">
              <StripeHeading />
            </div>
          </span>
        </div>
        <p
          class="anim-up relative z-10 md:text-2xl text-lg leading-[140%] font-normal tracking-[-0.04em] font-geometria text-[#bbbbbb]">
          Payments processed through Stripe ensure fast, direct access to your
          funds. Instantly receive your earnings after ticket sales, simplifying
          financial management and event planning
        </p>
      </div>
    </section>
  </div>

  <div
    class="relative z-[1] flex items-center w-full md:h-lvh md:max-h-max section visible bg-[radial-gradient(ellipse_20%_50%_at_center,_rgba(35,28,61,1)_0%,_rgba(10,10,10,1)_100%)] mb-20">
    <section
      class="flex flex-col items-center justify-between w-full max-w-screen-lg gap-20 px-6 py-10 mx-auto md:px-10 md:py-16 md:flex-row xl:max-w-screen-xl">
      <div class="flex flex-col xl:gap-10 gap-6 pt-[18px] basis-1/2">
        <h1
          class="anim-up md:text-8xl text-5xl leading-none font-normal tracking-[-0.01em] text-white font-ag uppercase xl:whitespace-nowrap">
          Transparent Pricing
        </h1>
        <p
          class="anim-up relative z-10 md:text-2xl text-lg leading-[140%] font-normal tracking-[-0.05em] font-geometria text-[#bbbbbb]">
          Straightforward: a 6% commission with no hidden fees. Real-time
          service charge calculations ensure direct fund distribution to your
          account
        </p>
        <div class="flex flex-col justify-between w-full gap-6 xl:flex-row">
          <ul class="flex flex-col gap-4">
            <li v-for="(item, index) in bullets" :key="index"
              class="anim-up flex items-center gap-4 text-lg leading-none font-normal tracking-[-0.04em] font-geometria text-[#dddddd]">
              {{ item }}
            </li>
          </ul>
          <div class="anim-up">
            <GetStartedBtn />
          </div>
        </div>
      </div>

      <div class="relative flex flex-col items-end gap-5 basis-1/2">
        <div class="relative w-full">
          <img src="/images/features-circle.png"
            class="anim-up w-[200%] absolute -top-1/2 -left-1/3 h-auto max-w-[1168px]" alt="" />
          <img
            class="anim-up object-cover relative w-8/12 max-w-[449px] left-24 bottom-0 md:-bottom-24 h-auto mix-blend-lighten"
            src="/images/percent.png" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import GetStartedBtn from "./GetStartedBtn.vue";
import StripeHeading from "./StripeHeading.vue";

const stripeSection = ref(null);
const stripePulse = ref(null);

const listItems = [
  {
    name: "Rachel Blue",
    position: "General admission x6",
    img: "/images/rachel.jpg",
    summ: "+ $240.00",
  },
  {
    name: "Dean Harddrive",
    position: "General admission x2",
    img: "/images/dean.jpg",
    summ: "+ $80.00",
  },
  {
    name: "Buffy Winters",
    position: "VIP package x1",
    img: "/images/buffy.jpg",
    summ: "+ $132.00",
  },
];

const bullets = [
  "Detailed financial reports",
  "Automatic processing",
  "Stripe fees apply separately",
];

const seatsBullets = [
  "Customizable seat maps",
  "Simple seat management",
  "Add new seat maps within one business day",
];

onMounted(() => {
  stripeSection.value.addEventListener('mousemove', (event) => {
    const { clientX, clientY } = event;

    // Получаем размеры элемента
    const rect = stripePulse.value.getBoundingClientRect();

    // Определяем координаты курсора относительно элемента
    const offsetX = ((clientX - rect.left) / rect.width - 0.1) * 5; // От -15 до 15 градусов
    const offsetY = ((clientY - rect.top) / rect.height - 0.1) * 2; // От -15 до 15 градусов

    // Применяем изменения к transform
    stripePulse.value.style.transform = `skew(${offsetX}deg, ${offsetY}deg)`;
  });
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
  overflow: hidden;
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
  z-index: 2;
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
  z-index: 3;
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
  height: 100%;
  cursor: pointer;
}

.pulse-background-pricing {
  position: absolute;
  left: 75%;
  width: 100vw;
  /* Ширина контейнера */
  height: 100%;
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
  height: 100%;
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
