<template>
  <div class="flex flex-col w-full h-full overflow-hidden bg-pagebg">
    <AppHeader />
    <main class="flex flex-col items-center w-full">
      <Hero ref="hero" />
      <AISection />
      <FeaturesSection />
      <!-- <div class="w-full mb-20 h-svh max-h-[1000px] section three">
        <ClientOnly v-if="loaded">
        <div id="logo" class="w-full mb-20 flex flex-col h-full max-h-[1000px]">
          <ThreeLogoSection class="w-full" />
        </div>
      </ClientOnly>
      </div> -->
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
// import { applyPureReactInVue, applyReactInVue } from "veaury";
import ThreeLogo from "./react_app/ThreeLogo.jsx";
import gsap from 'gsap';

// const ThreeLogoSection = applyPureReactInVue(ThreeLogo);

const sections = ref([]);

const hero = ref(null);
const alerts = ref(null);
const loaded = ref(false);

const registerObserver = () => {
  const observerOptions = {
    root: null,
    threshold: 0.5
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains('three') && loaded.value == false) {
          loaded.value = true;
          return;
        }
          const elements = entry.target.querySelectorAll('.anim-up');

          if (elements.length > 0) {
            gsap.fromTo(elements, {
              opacity: 0, y: 100
            }, {
              opacity: 1, y: 0, stagger: 0.05, force3D: false, onComplete: (() => {
                if (loaded.value == false) {
                  loaded.value = true;
                }
                if (entry.target.classList.contains('hero')) {
                  hero.value.registerAnimation();
                }
              })
            });
          observer.unobserve(entry.target);
        }
      }
    })
  }, observerOptions);

  if (sections.value.length > 0) {
    sections.value.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    })
  }
};

onMounted(() => {
  sections.value = document.querySelectorAll('.section');
  registerObserver();
});
</script>