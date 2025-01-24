<template>
  <div class="fixed inset-0 z-[110] backdrop-blur-2xl mob-menu-wrapper">
    <div class="relative flex flex-col gap-5 px-6 pt-3 mx-auto">
      <div @click="toggleMenu()" class="self-end w-8 h-8">
        <CloseCross />
      </div>
      <div class="flex flex-col gap-4">
        <a v-for="(item, index) in menuItems" :key="index" @click="toggleMenu()" :href="item.link">
          <div class="text-2xl font-normal text-white font-geometria mob-menu-link">
            {{ item.name }}
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted } from 'vue';
import CloseCross from "./CloseCross.vue";
import gsap from 'gsap';
const menuItems = [
  {
    name: "Home",
    link: "#hero",
  },
  {
    name: "Our Features",
    link: "#features",
  },
  {
    name: "Broadcasting",
    link: "#broadcasting",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];
const props = defineProps({ toggleMenu: Function })
// let tl;

onMounted(() => {
  // tl = gsap.timeline();
  gsap.fromTo('.mob-menu-wrapper', { background: "linear-gradient(180deg, transparent 0%, #10101000 1%, transparent 2%)" },
    {
      background: "linear-gradient(180deg, #10101000 0%, #151515 25%, #202020 75%, #26262600 100%)",
      ease: "expo.inOut",
      duration: 0.25,
     }
  );
  gsap.to('.mob-menu-link', { opacity: 1, y: 0, stagger: 0.025, delay: 0.1, ease: "expo.inOut"})
})
</script>

<style scoped>
.mob-menu-link {
  opacity: 0;
  transform: translateY(-50px);
}
</style>
