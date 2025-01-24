<template>
  <div class="flex flex-col w-full h-full overflow-hidden bg-pagebg">
    <AppHeader />
    <main class="flex flex-col items-center w-full">
      <Hero ref="hero" />
      <AISection />
      <FeaturesSection />
      <PricingSection />
      <div class="w-full mb-20 h-svh max-h-[1000px] section three">
        <ClientOnly v-if="loaded">
          <div id="logo" class="w-full mb-20 flex flex-col h-full max-h-[1000px]">
            <ThreeLogoSection class="w-full" />
          </div>
        </ClientOnly>
      </div>
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
import PricingSection from './components/PricingSection.vue';
import { applyPureReactInVue, applyReactInVue } from "veaury";
import ThreeLogo from "./react_app/ThreeLogo.jsx";
import gsap from 'gsap';

useHead({
  script: [
    // Schema.org script
    {
      type: "application/ld+json",
      innerHTML: `{
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Lookport",
        "url": "https://ticketing.lookport.live/",
        "logo": "/Lookport_logo.png",
        "description": "Lookport is an AI-powered ticketing system designed for event promoters. Sell tickets efficiently with automation, analytics, and smart marketing tools."
        }`
    },
    // Meta Pixel script
    {
      innerHTML: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '644507741360143');
fbq('track', 'PageView');`
    }
  ],
  noscript: [
    {
      key: 'fb-noscript',
      innerHTML: `<img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=644507741360143&ev=PageView&noscript=1"
/>`
    }
  ]
})

const ThreeLogoSection = applyPureReactInVue(ThreeLogo);

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
          gsap.fromTo(elements, { opacity: 0, y: 100 }, {
            opacity: 1, y: 0, stagger: 0.05, ease: 'expo.out', force3D: false, onComplete: (() => {

              if (entry.target.classList.contains('hero')) {
                hero.value.registerAnimation();
              }

              if (loaded.value == false) {
                setTimeout(() => {
                  loaded.value = true;
                }, 500)
              }
            })
          })
        }

        observer.unobserve(entry.target);
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