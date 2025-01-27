<template>
    <div ref="popup" class="fixed bottom-0 right-0 z-[60] w-full p-5 popup h-fit md: max-w-[500px]">
        <div
            class="anim-up flex flex-col gap-2 justify-center md:w-full pb-4 pt-4 px-6 md:pb-3 md:pt-6 md:px-6 rounded-2xl font-geometria font-normal tracking-tighter text-white md:text-lg text-base outline-[1px] outline outline-white/5 bg-[linear-gradient(68deg,_rgba(49,_52,_64,_0.8)_0%,_rgba(255,_255,_255,_0)_100%)] backdrop-blur-lg">
            <p>This website uses cookies to ensure you get the best experience on our site. By
                continuing to use our
                website, you consent to the use of cookies.</p>
            <button @click="closeTween"
                class="text-base w-fit mr-0 ml-auto font-normal leading-none tracking-tighter text-[#b6b6b6] hover:text-white transition-colors duration-500 ease-out px-4 py-2 font-geometria">
                Okay, Got It
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';

const popup = ref(null);
const props = defineProps({
    closeCookieMsg: Function,
});

const closeTween = () => {
    gsap.to(popup.value, { y: 100, opacity: 0, ease: 'expo.out', force3D: false });
    setTimeout(() => {
        props.closeCookieMsg();
    }, 500)
};

onMounted(() => {
    const elements = popup.value.querySelectorAll('.anim-up');
    gsap.fromTo(elements, { opacity: 0, y: 100 }, { opacity: 1, y: 0, stagger: 0.05, ease: 'expo.out', force3D: false });
})
</script>
