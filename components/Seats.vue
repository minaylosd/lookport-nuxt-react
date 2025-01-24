<template>
  <div class="relative flex items-center w-full mb-20 md:h-lvh max-h-max section">
    <div class="absolute inset-0 w-full h-full">
      <div class="body-pricing">
        <div class="pulse-background-pricing"></div>
      </div>
    </div>
    <section
      class="flex flex-col items-center justify-between w-full max-w-screen-lg gap-10 px-6 py-10 mx-auto md:px-10 md:py-16 md:flex-row xl:max-w-screen-xl xl:gap-20">
      <div class="relative flex flex-col items-center order-2 gap-5 anim-up basis-5/12 xl:basis-1/2 md:order-none">
        <NuxtImg format="webp"
          class="absolute top-1/2 left-1/2 -translate-x-[47%] -translate-y-[45%] min-w-[200%] object-cover"
          src="/images/seats-gradient.png" alt="Background gradient" />
        <NuxtImg format="webp" class="relative z-10 block object-cover w-full max-w-[520px] h-auto"
          src="/images/seats-nogradient.png" alt="Seating selector" />
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

.body-pricing {
  margin: 0;
  padding: 0;
  height: 100%;
}

.pulse-background-pricing {
  position: absolute;
  left: 75%;
  width: 100vw;
  height: 100%;
  background-image: url('/images/Neonright.png');
  background-repeat: no-repeat;
  background-size: 35% 100%;
  object-fit: cover;
}

@media (min-width:640px) {
  .pulse-background-pricing {
    background-size: 30% 100%;
  }
}
</style>