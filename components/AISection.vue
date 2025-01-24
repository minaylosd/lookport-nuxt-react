<template>
  <section id="ai" class="relative w-full mb-20 section">
    <div class="absolute inset-0 w-full h-full">
      <div class="hidden md:block body">
        <div class="pulse-background"></div>
      </div>
    </div>

    <div
      class="relative flex flex-col items-center justify-between w-full max-w-screen-lg gap-6 px-6 py-10 mx-auto md:py-40 md:flex-row xl:items-start xl:gap-20 xl:max-w-screen-xl">
      <div class="circle"></div>
      <div class="relative z-30 flex flex-col gap-6 pt-[18px] basis-1/2">
        <h1
          class="anim-up md:text-8xl text-5xl leading-none font-normal tracking-[-0.01em] text-[#eeeeee] font-ag uppercase">
          Feel the full<br />potential of AI
        </h1>
        <p
          class="anim-up relative z-10 md:text-2xl text-lg leading-[130%] font-normal tracking-[-0.04em] font-geometria text-white">
          Harness the power of AI to maximize event revenue, streamline
          analytics, and enhance marketing campaigns. Your ultimate ticket sales
          assistant, always focused on your profits!
        </p>
        <ul class="flex flex-col gap-4 xl:pt-4">
          <li v-for="(item, index) in listItems" :key="index"
            class="anim-up flex items-center gap-4 text-lg leading-none font-normal tracking-[-0.04em] font-geometria text-[#dddddd]">
            {{ item }}
          </li>
        </ul>
      </div>

      <div class="flex flex-col items-end gap-5 basis-1/2">
        <img class="relative z-30 anim-up xl:max-w-[330px] max-w-72 h-auto object-cover" src="/images/icons/OpenAI.svg"
          alt="" />
        <img
          class="relative z-30 anim-up object-cover xl:w-[110%] w-full max-w-[732px] h-auto xl:-mr-[172px] -mr-20 mix-blend-lighten"
          src="/images/crystall.png" />
      </div>
    </div>
  </section>
</template>

<script setup>
const listItems = [
  "Demand forecasting",
  "User behaviour analysis",
  "Dynamic pricing",
  "Marketing analysis",
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
  height: 100%;
  cursor: pointer;
}

.pulse-background {
  position: absolute;
  left: -10%;
  width: 50vw;
  height: 100%;
  background-image: url('/images/object.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 50% 50%;
  z-index: 1;
  filter: blur(125px);
  clip-path: inset(50 0 10 30);
}

.circle {
  position: absolute;
  top: 7vh;
  left: -10vw;
  width: 650px;
  height: 650px;
  border-radius: 50%;
  background: linear-gradient(117.5deg, rgba(49, 51, 64, 0.4) 0.16%, rgba(49, 51, 64, 0) 100%);
  backdrop-filter: blur(70px);
  z-index: 3;
  pointer-events: none;
}

@media (min-width:768px) {
  .circle {
    left: -10vw;
    width: 700px;
    height: 700px;
  }
}

@media (min-width:1280px) {
  .circle {
    left: -10vw;
    width: 800px;
    height: 800px;
  }
}
</style>
