<template>
  <div
    class="fixed inset-0 z-[110] bg-[linear-gradient(to_bottom,_#10101000_0%,_#151515_25%,_#202020_75%,_#26262600_100%)] backdrop-blur-2xl">
    <div class="relative flex flex-col gap-5 px-6 pt-3 mx-auto">
      <div @click="toggleMenu()" class="self-end w-8 h-8">
        <CloseCross />
      </div>
      <div class="flex flex-col gap-4">
        <a
          v-for="(item, index) in menuItems"
          :key="index"
          @click="toggleMenu()"
          :href="item.link"
          ><div class="text-2xl font-normal text-white font-geometria">
            {{ item.name }}
          </div></a
        >
      </div>
    </div>
  </div>
</template>
<script setup>
import CloseCross from "./CloseCross.vue";
const menuItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Our Features",
    link: "/features",
  },
  {
    name: "Broadcasting",
    link: "/broadcasting",
  },
  {
    name: "Previous Acts",
    link: "/previous-acts",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];
const props = defineProps({toggleMenu: Function})
</script>
