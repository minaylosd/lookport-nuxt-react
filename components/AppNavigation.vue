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
      class="px-6 text-[1.05rem] font-normal leading-none tracking-tighter text-[#b6b6b6] pt-[1.4rem] pb-[1.0em] font-geometria">
      {{ item.name }}
    </NuxtLink>
  </nav>
</template>
