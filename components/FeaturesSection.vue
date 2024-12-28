<template>
  <div class="w-full">
    <section
      class="flex flex-col items-center justify-between w-full max-w-screen-lg gap-20 px-10 pt-10 mx-auto md:pt-40 md:pb-16 md:flex-row xl:max-w-screen-xl">
      <div class="relative flex flex-col order-2 basis-5/12 md:-order-none">
        <img
          class="absolute left-1/2 object-cover -translate-y-1/2 -translate-x-1/2 top-1/2 max-w-[340px]"
          src="/images/redshift glass 16 1.png"
          alt="" />
        <div class="relative z-10 flex flex-col items-center w-fit gap-7">
          <div
            class="w-[245px] flex items-center gap-3 p-2 rounded-xl border border-white/10 bg-[#333131]/100 backdrop-blur-3xl shadow-md">
            <img
              src="/images/icons/stripe-logo.svg"
              class="overflow-hidden w-11 h-11" />
            <div class="flex flex-col gap-1">
              <h5 class="text-xs font-medium text-white font-geometria">
                Find it one the
              </h5>
              <p class="text-sm font-bold text-white font-geometria">
                Stripe App Marketplace
              </p>
            </div>
          </div>
          <div
            class="flex flex-col relative w-full max-w-[315px] pt-4 px-4 pb-[78px] rounded-[26px] border border-white/10 bg-[linear-gradient(to_bottom,_#10101000_0%,_#151515_25%,_#202020_75%,_#26262600_100%)] backdrop-blur-lg shadow-md">
            <div
              v-for="(item, index) in listItems"
              :key="index"
              :class="index != 0 ? 'pt-5 border-t border-white/10' : ''"
              class="flex items-center justify-between pb-5">
              <div class="flex items-center gap-2">
                <img
                  :src="item.img"
                  class="overflow-hidden border rounded-full w-11 h-11 border-white/10"
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
              class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[350px] flex items-center justify-between p-[18px] rounded-[28px] border border-white/10 bg-[#333131]/100 backdrop-blur-2xl shadow-md">
              <div class="flex items-center gap-2">
                <img
                  src="/images/icons/stripe-avatar.svg"
                  class="w-12 h-12 overflow-hidden rounded-full" />
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
      <div class="flex flex-col xl:gap-10 gap-6 pt-[18px] basis-7/12">
        <div
          class="md:text-8xl text-5xl flex flex-wrap items-center leading-none font-normal tracking-[-0.01em] text-white font-ag uppercase">
          <span class="inline-block"
            >Instant access to your funds with
            <div class="inline-flex w-56">
              <StripeHeading /></div
          ></span>
        </div>
        <p
          class="relative z-10 md:text-2xl text-lg leading-[140%] font-normal tracking-[-0.04em] font-geometria text-[#bbbbbb]">
          Payments processed through Stripe ensure fast, direct access to your
          funds. Instantly receive your earnings after ticket sales, simplifying
          financial management and event planning
        </p>
      </div>
    </section>
  </div>

  <div class="w-full">
    <section
      class="flex flex-col items-end justify-between w-full max-w-screen-lg gap-20 px-6 py-10 mx-auto md:px-10 md:py-16 md:flex-row xl:max-w-screen-xl">
      <div class="flex flex-col xl:gap-10 gap-6 pt-[18px] basis-1/2">
        <h1
          class="md:text-8xl text-5xl leading-none font-normal tracking-[-0.01em] text-white font-ag uppercase xl:whitespace-nowrap">
          Transparent Pricing
        </h1>
        <p
          class="relative z-10 md:text-2xl text-lg leading-[140%] font-normal tracking-[-0.05em] font-geometria text-[#bbbbbb]">
          Straightforward: a 6% commission with no hidden fees. Real-time
          service charge calculations ensure direct fund distribution to your
          account
        </p>
        <div class="flex flex-col justify-between w-full gap-6 xl:flex-row">
          <ul class="flex flex-col gap-4">
            <li
              v-for="(item, index) in bullets"
              :key="index"
              class="flex items-center gap-4 text-lg leading-none font-normal tracking-[-0.04em] font-geometria text-[#dddddd]">
              {{ item }}
            </li>
          </ul>
          <div>
            <GetStartedBtn />
          </div>
        </div>
      </div>

      <div class="relative flex flex-col items-end gap-5 basis-1/2">
        <div class="relative w-full">
          <img
            src="/images/features-glass.png"
            class="w-full h-auto max-w-[450px]"
            alt="" />
          <img
            class="object-cover absolute w-8/12 max-w-[449px] left-24 -bottom-24 h-auto mix-blend-lighten"
            src="/images/percent.png" />
        </div>
      </div>
    </section>
  </div>

  <div class="w-full">
    <section
      class="flex flex-col items-center justify-between w-full max-w-screen-lg gap-10 px-6 py-10 mx-auto md:px-10 md:py-16 md:flex-row xl:max-w-screen-xl xl:gap-20">
      <div
        class="relative flex flex-col items-center order-2 gap-5 basis-5/12 xl:basis-1/2 md:order-none">
        <img
          class="object-cover w-full h-auto max-w-screen-xl"
          src="/images/seats-nogradient.png" />
      </div>

      <div
        class="flex flex-col xl:gap-10 gap-6 pt-[18px] basis-7/12 xl:basis-1/2">
        <h1
          class="md:text-8xl text-5xl leading-[110%] font-normal tracking-[-0.01em] text-white font-ag uppercase xl:whitespace-nowrap">
          Seated or standing
        </h1>
        <p
          class="relative z-10 md:text-2xl text-lg leading-[140%] font-normal tracking-[-0.05em] font-geometria text-[#bbbbbb]">
          Flexible seat maps for all venues.<br />Easily customize and manage
          seating arrangements
        </p>

        <ul class="flex flex-col gap-4">
          <li
            v-for="(item, index) in seatsBullets"
            :key="index"
            class="flex items-center gap-4 text-lg leading-none font-normal tracking-[-0.04em] font-geometria text-[#dddddd]">
            {{ item }}
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script setup>
import GetStartedBtn from "./GetStartedBtn.vue";
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
</script>

<style scoped>
.text-grad {
  background-image: linear-gradient(
    105deg,
    rgba(255, 255, 255, 0.4) 0%,
    rgba(255, 255, 255, 1) 50%,
    rgba(255, 255, 255, 0.4) 100%
  );
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
</style>
