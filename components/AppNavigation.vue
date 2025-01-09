<script setup>
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
</script>

<template>
  <nav class="flex items-center">
    <NuxtLink
      v-for="(item, index) in menuItems"
      :key="index"
      :to="item.link"
      class="group relative px-6 text-[1.05rem] font-normal leading-none tracking-tighter text-[#b6b6b6] hover:text-white pt-[1.4rem] pb-[1.0em] font-geometria transition-colors duration-300 ease-in-out">
      <span>{{ item.name }}</span>
      <div class="absolute bottom-0 left-0 flex w-[0%] h-[1px] bg-white group-hover:w-full transition-all duration-300 ease-in-out"></div>
    </NuxtLink>
  </nav>
</template>
