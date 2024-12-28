<template>
  <section class="relative w-full">
    <img src="/images/ai-form.png" class="absolute max-w-[730px] w-full h-auto object-cover top-1/2 -left-[290px] -translate-y-1/2" alt="">
    <div
      class="flex flex-col items-center justify-between w-full max-w-screen-lg gap-6 px-10 py-10 mx-auto md:py-40 md:flex-row xl:items-start xl:gap-20 xl:max-w-screen-xl">
      <div class="relative flex flex-col gap-6 pt-[18px] basis-1/2">
        <h1
          class="md:text-8xl text-5xl leading-none font-normal tracking-[-0.01em] text-[#eeeeee] font-ag uppercase">
          Feel the full potential of AI
        </h1>
        <p
          class="relative z-10 md:text-2xl text-lg leading-[130%] font-normal tracking-[-0.04em] font-geometria text-white">
          Harness the power of AI to maximize event revenue, streamline
          analytics, and enhance marketing campaigns. Your ultimate ticket sales
          assistant, always focused on your profits!
        </p>
        <ul class="flex flex-col gap-4 xl:pt-4">
          <li
            v-for="(item, index) in listItems"
            :key="index"
            class="flex items-center gap-4 md:text-lg text-base leading-none font-normal tracking-[-0.04em] font-geometria text-[#dddddd]">
            {{ item }}
          </li>
        </ul>
      </div>

      <div class="flex flex-col items-end gap-5 basis-1/2">
        <img
          class="xl:max-w-[330px] max-w-72 h-auto object-cover"
          src="/images/icons/OpenAI.svg"
          alt="" />
        <img
          class="object-cover xl:w-[110%] w-full max-w-[732px] h-auto xl:-mr-[172px] -mr-20 mix-blend-lighten"
          src="/images/crystall.png" />
      </div>
    </div>
  </section>
</template>

<script setup>
const listItems = [
  "Demand forecasting",
  "User behaviour analysis",
  "User behaviour analysis",
  "Marketing analysis",
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
