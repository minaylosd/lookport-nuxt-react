<template>
  <div class="relative flex items-center visible w-full mb-20 md:h-lvh md:max-h-max section alerts">
    <div class="absolute inset-0 z-20">
      <div class="body">
        <div class="pulse-background">
        </div>
      </div>
    </div>

    <img src="/images/notifications-glass.png"
      class="anim-up absolute -bottom-24 -left-[260px] z-50 w-full max-w-[500px] h-auto object-cover" alt="" />

    <section
      class="relative z-[60] flex flex-col items-center justify-between w-full max-w-screen-lg gap-20 px-6 pt-10 pb-10 mx-auto md:px-10 md:pt-20 md:pb-32 md:flex-row xl:max-w-screen-xl">
      <div class="flex flex-col w-full gap-6 xl:basis-7/12 md:basis-1/2">
        <Badge class="anim-up" value="Get Notified instantly via WhatsApp & Telegram" />
        <h1
          class="anim-up md:text-8xl text-5xl leading-none font-normal tracking-[-0.01em] text-white font-ag uppercase whitespace-nowrap">
          Real-Time Sales Alerts
        </h1>
        <p
          class="anim-up relative z-10 md:text-2xl text-lg leading-[140%] font-normal tracking-tighter font-geometria text-[#bbbbbb]">
          Get real-time notifications for every ticket sold and a daily summary
          with sales analytics directly in our chat bot in WhatsApp or Telegram
        </p>
        <div class="flex flex-col md:items-center md:flex-row xl:mt-6 gap-7">
          <div
            class="anim-up flex w-52 items-center gap-3.5 px-6 py-4 rounded-2xl outline-[1px] outline outline-white/5 bg-[linear-gradient(65deg,_#313340cc_0%,_#31334000_100%)] backdrop-blur-md">
            <img src="/images/icons/Whatsapp.svg" alt="WhatsApp icon" class="object-cover w-7 h-7 md:w-9 md:h-9" />
            <div>
              <p class="text-xs font-normal leading-none md:text-sm font geometria text-white/50">
                Available in
              </p>
              <p class="text-base font-medium text-white md:text-lg font geometria">
                WhatsApp
              </p>
            </div>
          </div>
          <div
            class="anim-up flex w-52 items-center gap-3.5 px-6 py-4 rounded-2xl outline-[1px] outline outline-white/5 bg-[linear-gradient(65deg,_#313340cc_0%,_#31334000_100%)] backdrop-blur-md">
            <img src="/images/icons/Telegram.svg" alt="Telegram icon" class="object-cover w-7 h-7 md:w-9 md:h-9" />
            <div>
              <p class="text-xs font-normal leading-none md:text-sm font geometria text-white/50">
                Available in
              </p>
              <p class="text-base font-medium text-white md:text-lg font geometria">
                Telegram
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-center w-full">
        <div class="relative w-[275px]">
          <img src="/images/iphone-frame.png" class="object-cover w-full h-auto anim-up" alt="">
          <div class="anim-up absolute inset-0 w-full h-full z-20 flex flex-col pt-[60px] px-7">
            <h5 class="anim-up font-geometria font-bold text-white text-lg leading-none mb-[18px]">Lookport Bot</h5>
            <div class="flex items-end mb-2 anim-up">
              <div class="w-[18px] h-[18px] mr-2">
                <AvatarIcon />
              </div>

              <div class="w-[165px] backdrop-blur-lg bg-[#24212f]/70 rounded-[5px] p-2 mr-1">
                <p class="font-geometria font-medium text-[9px] text-white">✅ +2 tickets, $85</p>
                <p class="font-geometria font-normal text-[9px] text-white/80 mb-2">General Admission x2<br />Show in
                  Berlin - 421 / 750</p>
                <p class="font-geometria font-normal text-[9px] text-white/80">Source: Instagram Ads (UTM:
                  inst)<br />Isabelle Black, test@example.com</p>
              </div>

              <p class="font-geometria font-normal text-[7px] text-[#828282]">12:00</p>
            </div>

            <div class="flex items-end mb-2 anim-up">
              <div class="w-[18px] h-[18px] mr-2">
                <AvatarIcon />
              </div>

              <div
                class="w-[165px] backdrop-blur-lg bg-[linear-gradient(137deg,_rgba(23,_38,_86,_1)_0%,_rgba(112,_90,_191,_1)_100%)] rounded-[5px] p-2 mr-1">
                <p class="font-geometria font-medium text-[9px] text-white">✅ +2 tickets, $380</p>
                <p class="font-geometria font-normal text-[9px] text-white/80 mb-2">Gold circle x2<br />Show in London -
                  526 / 810</p>
                <p class="font-geometria font-normal text-[9px] text-white/80">Source: Instagram Ads (UTM: Fb)<br />John
                  White, test@example.com</p>
              </div>

              <p class="font-geometria font-normal text-[7px] text-[#828282]">12:16</p>
            </div>

            <div class="flex items-end justify-end w-full gap-1 mb-2 anim-up">
              <p class="font-geometria font-normal text-[7px] text-[#828282]">12:25</p>

              <div class="backdrop-blur-lg bg-[#24212f]/70 rounded-[5px] p-2 mr-1">
                <p class="font-geometria font-normal text-[9px] text-white/80">/summary</p>
              </div>
            </div>

            <div class="anim-up flex items-end mb-2.5">
              <div class="w-[18px] h-[18px] mr-2">
                <AvatarIcon />
              </div>

              <div class="w-[165px] backdrop-blur-lg bg-[#24212f]/70 rounded-[5px] p-2 mr-1">
                <p class="font-geometria font-medium text-[9px] text-white mb-2">Tour summary</p>
                <p class="font-geometria font-normal text-[9px] text-white/80 mb-2">Berlin - 421 / 750<br />London - 526
                  / 810<br />New York - 348 / 520<br />Amsterdam - 317 / 480</p>
                <p class="font-geometria font-normal text-[9px] text-white/80">Total: 2 025 / 3 182 (63%)</p>
                <p class="font-geometria font-medium text-[9px] text-white mb-2">Total revenue: $91 125</p>
                <p class="font-geometria font-normal text-[9px] text-white/80">Sold today: 115 tickets</p>
              </div>

              <p class="font-geometria font-normal text-[7px] text-[#828282]">12:25</p>
            </div>

            <div
              class="flex w-full rounded-full items-center h-7 justify-between pl-2.5 backdrop-blur-lg bg-[rgba(255,255,255,_0.1)]">
              <p class="font-geometria font-normal text-[9px] text-white/60">Write</p>
              <div class="h-7 w-7">
                <MsgIcon />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Badge from "./Badge.vue";
import gsap from "gsap";

const blur = ref(null);
const header = ref(null);
const msgOne = ref(null);
const msgTwo = ref(null);
const msgThree = ref(null);
const msgFour = ref(null);
const type = ref(null);
const input = ref(null);

let tl;
let timeout;

// const animate = () => {
//   tl = gsap.timeline({ repeat: -1, repeatDelay: 5 });
//   tl.to('.appear', { opacity: 1, delay: 1 });
//   tl.to(msgThree.value, { display: 'flex', opacity: 1, delay: 0.2 })
//   tl.to(msgFour.value, { display: 'flex', opacity: 1, delay: 0.2 })
// };
// defineExpose({ animate });
</script>

<style scoped>
.body {
  margin: 0;
  padding: 0;
  overflow: hidden;
  height: 100%;
  width: 100%;
  cursor: pointer;
}

/* Стили для контейнера с фоном */
.pulse-background {
  position: absolute;
  /* left: 45%; */
  top: 12%;
  width: 100vw;
  /* Ширина контейнера */
  height: 100%;
  /* Высота контейнера */
  background-image: url('/images/phone.png');
  /* Устанавливаем картинку как фон */
  background-repeat: no-repeat;
  /* Отключаем повторение фона */
  background-size: 80% 160%;
  /* Начальный размер фона */

}

.visible .pulse-background {
  animation: skewAnimationMob 5s cubic-bezier(0.42, 0, 0.58, 1) infinite alternate;
}

/* Анимация искажения правого края */
@keyframes skewAnimation {
  0% {
    background-size: 35% 70%;
    /* Начальный размер фона */
  }

  50% {
    background-size: 40% 60%;
    /* Конечный размер фона */
  }

  100% {
    background-size: 35% 75%;
    /* Конечный размер фона */
  }
}

@keyframes skewAnimationMob {
  0% {
    background-size: 90% 90%;
    /* Начальный размер фона */
  }

  50% {
    background-size: 100% 80%;
    /* Конечный размер фона */
  }

  100% {
    background-size: 90% 100%;
    /* Конечный размер фона */
  }
}

@media (min-width: 640px) {
  .pulse-background {
    position: absolute;
    left: 45%;
    top: 15%;
    width: 100vw;
    /* Ширина контейнера */
    height: 100%;
    /* Высота контейнера */
    background-image: url('/images/phone.png');
    /* Устанавливаем картинку как фон */
    background-repeat: no-repeat;
    /* Отключаем повторение фона */
    background-size: 35% 70%;
    /* Начальный размер фона */

  }

  .visible .pulse-background {
    animation: skewAnimation 5s cubic-bezier(0.42, 0, 0.58, 1) infinite alternate;
  }
}
</style>
