<template>
  <div>
    <header
      :class="[
        'fixed z-[40] top-0 flex justify-center w-full transition-colors duration-500 py-2',
        isScrolled ? 'bg-[rgb(138_153_241_/_0.1)] backdrop-blur-lg' : '',
        isMenuOpened? 'bg-transparent backdrop-blur-none': ''
      ]">
      <div
        class="flex items-center justify-between w-full max-w-screen-lg px-6 md:px-10 xl:max-w-screen-xl">
        <div class="flex items-center gap-7">
          <div class="xl:w-[130px] w-[120px] h-full">
            <LogoLink />
          </div>

          <div class="hidden xl:block">
            <AppNavigation />
          </div>
        </div>
        <div class="items-center hidden md:flex">
          <button
            class="py-[15px] text-lg font-normal leading-none tracking-tighter text-[#eeeeee] px-[30px] font-geometria">
            Login
          </button>
          <GetStartedBtn />
        </div>
        <div class="block w-8 h-8 cursor-pointer md:hidden" @click="toggleMenu"><Burger /></div>
      </div>
    </header>
    <MobMenu v-if="isMenuOpened" :toggleMenu="toggleMenu" />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import LogoLink from "./LogoLink.vue";
import AppNavigation from "./AppNavigation.vue";
import GetStartedBtn from "./GetStartedBtn.vue";
import Burger from "./Burger.vue";
import MobMenu from "./MobMenu.vue";

const isScrolled = ref(false);
const isMenuOpened = ref(false);


const toggleMenu =()=> {
  const body = document.querySelector('body')
  if (isMenuOpened.value) {
    body.style.overflow= 'auto';
    isMenuOpened.value = false;
    return;
  } else {
    body.style.overflow= 'hidden';
    isMenuOpened.value = true;
  }
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 5;
};

onMounted(() => {
  handleScroll();
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
