<template>
  <div class="flex flex-col w-full h-full overflow-hidden bg-pagebg">
    <AppHeader />
    <main class="flex flex-col items-center w-full">
      <Hero />
      <ClientOnly>
        <div class="w-full h-svh">
          <ThreeLogoSection class="w-full h-svh" />
        </div>
      </ClientOnly>
      <AISection />
      <FeaturesSection />
      <NotificationSection />
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
import { ref, onMounted, nextTick } from 'vue';
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
import { applyPureReactInVue, applyReactInVue } from "veaury";
import ThreeLogo from "./react_app/ThreeLogo.jsx";
import gsap from 'gsap';

const ThreeLogoSection = applyPureReactInVue(ThreeLogo);

const sections = ref([]);

const registerObserver = () => {
  const observerOptions = {
    root: null,
    threshold: 0.5
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const elements = entry.target.querySelectorAll('.anim-up');

        gsap.fromTo(elements, {
          opacity: 0, y: 100
        }, {
          opacity: 1, y: 0, stagger: 0.05,
        });

        observer.unobserve(entry.target);
      }
    })
  }, observerOptions)

  nextTick(() => {
    if (sections.value.length > 0) {
      sections.value.forEach((section) => {
        if (section) {
          observer.observe(section);
        }
      })
    }

  })

};

onMounted(() => {
  sections.value = document.querySelectorAll('.section');
  console.log(sections.value);
  registerObserver();
})

</script>
