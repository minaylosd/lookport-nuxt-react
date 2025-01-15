<template>
  <div class="flex flex-col w-full h-full overflow-hidden bg-pagebg">
    <AppHeader />
    <main class="flex flex-col items-center w-full">
      <!-- <div v-if="!loaded" ref="loader" class="fixed w-full h-lvh inset-0 z-[110] bg-black flex items-center justify-center">
      <div class="bg-white h-0.5 w-0 growA"></div>
    </div> -->
      <Hero ref="hero" />
      <AISection />
      <FeaturesSection />
      <ClientOnly>
        <div id="logo" class="w-full mb-20">
          <ThreeLogoSection class="w-full" />
        </div>
      </ClientOnly>
      <Seats />
      <NotificationSection ref="alerts" />
      <BroadcastSection />
      <PriceOptions />
      <Domains />
      <Events />
      <Contact />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { onNuxtReady } from '#app';
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import Hero from "./components/Hero.vue";
import AISection from "./components/AISection.vue";
import FeaturesSection from "./components/FeaturesSection.vue";
import NotificationSection from "./components/NotificationSection.vue";
import BroadcastSection from "./components/BroadcastSection.vue";
import PriceOptions from "./components/PriceOptions.vue";
import Domains from "./components/Domains.vue";
import Events from "./components/Events.vue";
import Contact from "./components/Contact.vue";
import Seats from './components/Seats.vue';
import { applyPureReactInVue, applyReactInVue } from "veaury";
import ThreeLogo from "./react_app/ThreeLogo.jsx";
import gsap from 'gsap';

const ThreeLogoSection = applyPureReactInVue(ThreeLogo);

const sections = ref([]);

const hero = ref(null);
const alerts = ref(null);
const loaded = ref(false);
const loader = ref(null);

const registerObserver = () => {
  const observerOptions = {
    root: null,
    threshold: 0.5
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // entry.target.classList.add('visible');
        if (!entry.target.classList.contains('animated')) {
          const elements = entry.target.querySelectorAll('.anim-up');

          if (elements.length > 0) {
            gsap.fromTo(elements, {
              opacity: 0, y: 100
            }, {
              opacity: 1, y: 0, stagger: 0.05, onComplete: (() => {
                if (entry.target.classList.contains('hero')) {
                  hero.value.registerAnimation();
                } else if (entry.target.classList.contains('alerts')) {
                  alerts.value.animate();
                }
              })
            });
          }

          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      } else {
        // entry.target.classList.remove('visible');
      }
    })
  }, observerOptions);

  // const observerGrad = new IntersectionObserver((entries) => {
  //   entries.forEach((entry) => {
  //     if (entry.isIntersecting) {
  //       entry.target.classList.add('visible');

  //     } else if (!entry.target.isIntersecting && entry.target.classList.contains('visible')) {
  //       entry.target.classList.remove('visible');
  //     }
  //   })
  // }, { threshold: 0 });

  if (sections.value.length > 0) {
    sections.value.forEach((section) => {
      if (section) {
        observer.observe(section);
        // observerGrad.observe(section);
      }
    })
  }

};

onMounted(() => {
  sections.value = document.querySelectorAll('.section');
  onNuxtReady(() => {
  // gsap.to(loader.value, {
  // opacity: 0, onComplete: (() => {
  // loaded.value = true;
  registerObserver();
  // })
  // })
  });
});

</script>

<style scoped>
.growA {
  animation: grow 3s ease-in;
}

@keyframes grow {
  0% {
    width: 0%;
    /* Начальный размер фона */
  }

  100% {
    width: 80%;
    /* Конечный размер фона */
  }
}
</style>