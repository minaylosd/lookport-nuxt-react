<!-- <template>
  <div class="w-full">
    <section
      class="flex flex-col items-center justify-center w-full max-w-screen-lg px-6 py-48 mx-auto md:px-10 xl:max-w-screen-xl">
      <h1
        class="flex flex-col md:px-20 w-full xl:text-[134px] md:text-8xl text-5xl leading-none font-normal tracking-[-0.01em] text-white text-center font-ag uppercase mb-7 text-grad">
        <span class="self-start">800+ Events</span>
        <span class="self-end">1000000+ Tickets Sold</span>
      </h1>
    </section>
  </div>
</template> -->
<template>
  <div class="w-full overflow-hidden">
    <section class="relative flex flex-col items-center justify-center w-full mx-auto">
      <video src="/Sequence_02_3.mp4" autoplay muted loop>

      </video>
      <svg>
        <mask id="mask">
          <rect fill="white" width="100%" height="100%"></rect>
          <text id="mask-heading" dominant-baseline="central" x="50%" y="50%" text-anchor="middle">3 100 000</text>

        </mask>

        <rect width="100%" height="110%" id="mask-bg"></rect>

      </svg>
      <p class="font-ag absolute bottom-[250px] text-white text-center w-full text-[110px] leading-none z-30">Tickets
        sold</p>
    </section>
  </div>
</template>

<style scoped>
video {
  margin: 0 auto;
  overflow: hidden;
  width: 100%;
  height: 100vh;
  background-color: #0a0a0a;
}

svg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 110vh;
  width: 110%;
}


#mask-heading {
  font-family: var(--font-ag);
  font-size: 550px;
  color: white;
  text-transform: uppercase;
}

#mask-paragraph {
  font-family: var(--font-ag);
  font-size: 110px;
  color: white;
  text-transform: uppercase;
  position: relative;
  z-index: 30;
}



#mask-bg {
  mask: url('#mask');
}
</style>
