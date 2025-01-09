<template>
  <button v-if="props.big" class="relative px-[49px] py-[25.5px] overflow-hidden rounded-full btn-xl transition-colors duration-300 delay-100 ease-in-out">
    <p class="relative z-10 text-[26px] font-normal leading-[18px] -tracking-[0.04em] text-white font-geometria transition-colors duration-300 delay-100 ease-in-out">Get
      Started</p>
  </button>
  <button v-else class="relative px-[31px] py-[15px] overflow-hidden rounded-full btn-sm">
    <p class="relative z-10 text-lg font-normal leading-[13px] -tracking-[0.04em] text-white font-geometria">Get Started
    </p>
  </button>

</template>

<style scoped>
.btn-xl::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 0;
  border-radius: inherit;
  padding: 2px;
  background: linear-gradient(154deg,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(255, 255, 255, 1) 50%,
      rgba(255, 255, 255, 0.4) 100%);
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  mask-composite: exclude;
  -webkit-mask-composite: destination-out;
}

.btn-xl:hover::before {
  -webkit-mask: none;
  mask: none;
}

.btn-xl:hover p {
  color: #373737;
}

.btn-sm::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 0;
  border-radius: inherit;
  padding: 2px;
  background: linear-gradient(111deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0.39) 50%,
      rgba(255, 255, 255, 0.1) 100%);
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  mask-composite: exclude;
  -webkit-mask-composite: destination-out;
}
</style>

<script setup>
const props = defineProps({
  big: Boolean
})
</script>
