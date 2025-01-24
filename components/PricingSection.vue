<template>
	<div
	    class="relative z-[1] flex items-center w-full md:h-lvh md:max-h-max section bg-[radial-gradient(ellipse_20%_50%_at_center,_rgba(35,28,61,1)_0%,_rgba(10,10,10,1)_100%)] mb-20">
	    <section
	      class="flex flex-col items-center justify-between w-full max-w-screen-lg gap-20 px-6 py-10 mx-auto md:px-10 md:py-16 md:flex-row xl:max-w-screen-xl">
	      <div class="relative z-30 flex flex-col xl:gap-10 gap-6 pt-[18px] basis-1/2">
	        <h1
	          class="anim-up md:text-8xl text-5xl leading-none font-normal tracking-[-0.01em] text-white font-ag uppercase xl:whitespace-nowrap">
	          Transparent Pricing
	        </h1>
	        <p
	          class="anim-up relative z-10 md:text-2xl text-lg leading-[140%] font-normal tracking-[-0.05em] font-geometria text-[#bbbbbb]">
	          Straightforward: a <span class="text-white">6% commission</span> with no hidden fees. Real-time
	          service charge calculations ensure direct fund distribution to your
	          account
	        </p>
	        <div class="flex flex-col justify-between w-full gap-6 xl:flex-row">
	          <ul class="flex flex-col gap-4">
	            <li v-for="(item, index) in bullets" :key="index"
	              class="anim-up flex items-center gap-4 text-lg leading-none font-normal tracking-[-0.04em] font-geometria text-[#dddddd]">
	              {{ item }}
	            </li>
	          </ul>
	          <div>
	            <GetStartedBtn class="anim-up" />
	          </div>
	        </div>
	      </div>
	
	      <div class="relative flex flex-col items-end gap-5 basis-1/2">
	        <div class="relative w-full">
					<NuxtImg format="webp" src="/images/features-circle.png"
						class="anim-up w-[200%] absolute -top-1/2 -left-1/3 h-auto max-w-[1168px]" alt="Circle" />
					<NuxtImg format="webp"
	            class="anim-up object-cover relative w-8/12 max-w-[449px] left-24 bottom-0 md:-bottom-24 h-auto mix-blend-lighten"
						src="/images/percent.png" alt="Percent image" />
	        </div>
	      </div>
	    </section>
	  </div>
</template>

<script setup>
import GetStartedBtn from "./GetStartedBtn.vue";

const bullets = [
  "Detailed financial reports",
  "Automatic processing",
  "Stripe fees apply separately",
];
</script>

<style scoped>
li::before {
  content: "";
  background-image: url("~/assets/images/icons/list-disk.svg");
  background-repeat: no-repeat;
  display: inline-block;
  width: 18px;
  height: 18px;
  min-width: 18px;
  min-height: 18px;
}
</style>
