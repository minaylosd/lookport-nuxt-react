<template>
  <div class="relative w-full">
    <img
      src="/images/notifications-glass.png"
      class="absolute -bottom-24 -left-[260px] z-10 w-full max-w-[500px] h-auto object-cover"
      alt="" />
    <section
      class="relative z-30 flex flex-col items-center justify-between w-full max-w-screen-lg gap-20 px-6 pt-10 pb-10 mx-auto md:px-10 md:pt-20 md:pb-32 md:flex-row xl:max-w-screen-xl">
      <div class="flex flex-col w-full gap-6 xl:basis-7/12 md:basis-1/2">
        <Badge value="Get Notified instantly via WhatsApp & Telegram" />
        <h1
          class="md:text-8xl text-5xl leading-none font-normal tracking-[-0.01em] text-white font-ag uppercase whitespace-nowrap">
          Real-Time Sales Alerts
        </h1>
        <p
          class="relative z-10 md:text-2xl text-lg leading-[140%] font-normal tracking-tighter font-geometria text-[#bbbbbb]">
          Get real-time notifications for every ticket sold and a daily summary
          with sales analytics directly in our chat bot in WhatsApp or Telegram
        </p>
        <div class="flex flex-col md:items-center md:flex-row xl:mt-6 gap-7">
          <div
            class="flex w-52 items-center gap-3.5 px-6 py-4 rounded-2xl border border-white/5 bg-[linear-gradient(70deg,_#313340cc_0%,_#31334000_100%)]">
            <img
              src="/images/icons/Whatsapp.svg"
              alt="WhatsApp icon"
              class="object-cover w-7 h-7 md:w-9 md:h-9" />
            <div>
              <p
                class="text-xs font-normal leading-none md:text-sm font geometria text-white/50">
                Available in
              </p>
              <p class="text-base font-medium text-white md:text-lg font geometria">
                WhatsApp
              </p>
            </div>
          </div>
          <div
            class="flex w-52 items-center gap-3.5 px-6 py-4 rounded-2xl border border-white/5 bg-[linear-gradient(70deg,_#313340cc_0%,_#31334000_100%)]">
            <img
              src="/images/icons/Telegram.svg"
              alt="Telegram icon"
              class="object-cover w-7 h-7 md:w-9 md:h-9" />
            <div>
              <p
                class="text-xs font-normal leading-none md:text-sm font geometria text-white/50">
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
        <img
          class="object-cover w-full max-w-[275px] h-auto"
          src="/images/app-screen.png" />
      </div>
    </section>
  </div>
</template>

<script setup>
import Badge from "./Badge.vue";
</script>
