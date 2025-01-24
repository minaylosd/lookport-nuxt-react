<template>
  <a href="https://scheduler.zoom.us/alex-wolf-nwmy6d/lookport" target="_blank">
    <button ref="button" v-if="props.big"
      class="relative px-7 py-5 md:px-[49px] md:py-[25.5px] overflow-hidden rounded-full btn-xl before:transition-colors before:duration-500 ease-in">
      <p
        class="relative whitespace-nowrap z-10 md:text-[26px] text-xl font-normal leading-[18px] -tracking-[0.04em] text-white font-geometria transition-colors duration-500 ease-in">
        Get
        Started</p>
    </button>
    <button v-else
      class="relative px-[31px] py-[15px] overflow-hidden rounded-full btn-sm before:transition-colors before:duration-500 ease-in">
      <p
        class="relative z-10 text-lg font-normal leading-[13px] -tracking-[0.04em] text-white font-geometria transition-colors duration-500 ease-in">
        Get Started
      </p>
    </button>
  </a>
</template>

<style scoped>
.btn-xl::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 0;
  border-radius: inherit;
  padding: 2px;
  opacity: 0;
}

.btn-xl.active:before {
  background: linear-gradient(154deg,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(255, 255, 255, 1) 50%,
      rgba(255, 255, 255, 0.4) 100%);
  opacity: 1;
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

.btn-sm:hover::before {
  background: linear-gradient(154deg,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(255, 255, 255, 1) 50%,
      rgba(255, 255, 255, 0.4) 100%);
  -webkit-mask: none;
  mask: none;
}

.btn-sm:hover p {
  color: #373737;
}
</style>

<script setup>
import { ref, onMounted } from 'vue';

const button = ref(null);
const props = defineProps({
  big: Boolean
});

onMounted(() => {
  if (props.big) {
    setTimeout(() => {
      button.value.classList.add('active');
    }, 1000)

  }
});
</script>
