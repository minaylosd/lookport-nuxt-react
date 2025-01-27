<template>
    <div ref="popup" class="fixed bottom-0 right-0 z-[60] w-full p-5 popup h-fit md: max-w-[500px]">
        <div
            class="anim-up flex flex-col gap-2 justify-center md:w-full pb-4 pt-4 px-6 md:pb-3 md:pt-6 md:px-6 rounded-2xl font-geometria font-normal tracking-tighter text-white text-sm outline-[1px] outline outline-white/5 bg-[linear-gradient(68deg,_rgba(49,_52,_64,_0.8)_0%,_rgba(255,_255,_255,_0)_100%)] backdrop-blur-sm">
            <p>
                We use cookies to improve your experience on our site. By continuing to use this website, you agree to
                our use of cookies. For more information, please read our
                <a class="underline" href="/PRIVACY_POLICY_Lookport_LTD.pdf" target="_blank">
                    Privacy Policy
                </a>.
            </p>
            <button @click="closeTween"
                class="relative px-[31px] py-[15px] w-fit overflow-hidden rounded-full btn-sm before:transition-colors before:duration-500 ease-in ml-auto mr-0">
                <p
                    class="relative z-10 text-sm font-normal leading-[13px] -tracking-[0.04em] text-white font-geometria transition-colors duration-500 ease-in">
                    Accept
                </p>
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

<style scoped>
.btn-sm::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 0;
    border-radius: inherit;
    padding: 2px;
    background: linear-gradient(111deg,
            rgba(255, 255, 255, 0.1) 0%,
            rgba(255, 255, 255, 0.39) 50%,
            rgba(255, 255, 255, 0.1) 100%);
    -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
    mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
    mask-composite: exclude;
    -webkit-mask-composite: destination-out;
}

.btn-sm:hover::before {
    background: linear-gradient(154deg,
            rgba(255, 255, 255, 0.4) 0%,
            rgba(255, 255, 255, 1) 50%,
            rgba(255, 255, 255, 0.4) 100%);
    -webkit-mask: none;
    mask: none;
}

.btn-sm:hover p {
    color: #373737;
}
</style>