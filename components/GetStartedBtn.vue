<template>
  <button
    class="relative px-[31px] py-[15px] overflow-hidden rounded-full">
    <p class="relative z-10 text-lg font-normal leading-[13px] -tracking-[0.04em] text-white font-geometria">Get Started</p>
  </button>
</template>

<style scoped>
button::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 0;
  border-radius: inherit;
  padding: 2px;
  background: linear-gradient(
    111deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.39) 50%,
    rgba(255, 255, 255, 0.1) 100%
  );
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  mask-composite: exclude;
  -webkit-mask-composite: destination-out;
}
</style>
