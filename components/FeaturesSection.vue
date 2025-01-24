<template>
  <div id="features" class="relative flex items-center w-full mb-20 md:h-lvh md:max-h-max section">
    <div class="absolute inset-0 w-full h-full">
      <div class="body">
        <div class="pulse-background"></div>
      </div>
    </div>
    <section
      class="flex flex-col items-center justify-between w-full max-w-screen-lg gap-20 px-6 pt-10 mx-auto md:pt-40 md:pb-16 md:flex-row xl:max-w-screen-xl">
      <div class="relative flex flex-col order-2 basis-5/12 md:-order-none">

        <div class="relative z-10 flex flex-col items-center w-fit gap-7">
          <NuxtImg format="webp" class="anim-up absolute left-1/2 object-cover -translate-x-1/2 -bottom-1/3 max-w-[430px]"
            src="/images/stripe-glass.png" alt="Glass" />
          <div
            class="anim-up w-[245px] flex items-center gap-3 p-2 rounded-xl border border-white/10 bg-[#333131]/100 backdrop-blur-3xl shadow-md">
            <NuxtImg format="webp" src="/images/icons/stripe-logo.svg" class="overflow-hidden w-11 h-11" alt="Stripe logo" />
            <div class="flex flex-col gap-1">
              <p class="text-xs font-medium text-white font-geometria">
                Find it one the
              </p>
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
                <NuxtImg format="webp" :src="item.img" class="overflow-hidden border rounded-full w-11 h-11 border-white/10"
                  :alt="item.name" />
                <div class="flex flex-col gap-1">
                  <p class="text-sm font-medium text-white font-geometria">
                    {{ item.name }}
                  </p>
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
                <NuxtImg src="/images/icons/stripe-avatar.svg" class="w-12 h-12 overflow-hidden rounded-full" alt="Stripe logo" />
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
</template>

<script setup>
import StripeHeading from "./StripeHeading.vue";

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

.body {
  margin: 0;
  padding: 0;
  overflow: hidden;
  height: 100%;
}

.pulse-background {
  position: absolute;
  left: -30px;
  width: 100vw;
  height: 100%;
  background-image: url('/images/Neon.png');
  background-repeat: no-repeat;
  background-size: auto 100%;
  object-fit: cover;
  z-index: 2;
}

@media (min-width:640px) {
  .pulse-background {
    background-size: 30% 100%;
  }
}
</style>
