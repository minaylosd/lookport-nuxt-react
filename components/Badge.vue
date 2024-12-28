<template>
  <div class="relative md:py-2.5 md:px-3 py-1 px-3 overflow-hidden rounded-full bg-grad w-fit">
    <span
      class="relative z-10 text-xs font-normal leading-tight tracking-tighter md:text-lg font-geometria text-grad">
      {{props.value}}
    </span>
  </div>
</template>

<style scoped>
.bg-grad {
  background: linear-gradient(
    15deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.29) 50%,
    rgba(255, 255, 255, 0) 100%
  );
}

.text-grad {
  background-image: linear-gradient(
    15deg,
    rgba(255, 255, 255, 0.3) 0%,
    rgba(255, 255, 255, 1) 50%,
    rgba(255, 255, 255, 0.3) 100%
  );
  background-position: 20% -50%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
</style>

<script setup>
const props = defineProps({
  value: String
})
</script>
