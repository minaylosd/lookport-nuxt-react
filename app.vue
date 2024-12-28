<template>
  <div class="flex flex-col w-full h-full overflow-hidden bg-pagebg">
    <AppHeader />
    <main class="flex flex-col items-center w-full">
      <Hero />
      <div class="w-full h-svh"><ThreeLogoSection class="w-full h-svh" /></div>
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

const ThreeLogoSection = applyPureReactInVue(ThreeLogo);
</script>
