<template>
  <div class="w-full overflow-hidden max-h-[778px]">
    <section class="relative flex flex-col items-center justify-center w-full mx-auto max-h-[778px]">
      <video class="object-cover w-full h-auto py-10" src="/Sequence_02_3.mp4" autoplay muted loop></video>
      <svg>
        <mask id="mask">
          <rect fill="white" width="100%" height="110%"></rect>
          <text id="mask-heading" dominant-baseline="central" x="50%" y="40%" text-anchor="middle">3 100 000</text>
        </mask>
        <rect width="100%" height="110%" id="mask-bg"></rect>
      </svg>

      <div
        class="h-full absolute z-30 bottom-0 left-0 w-full bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,0.3)_40%,_rgba(10,10,10,0.9)_60%,_rgba(10,10,10,1)_100%)]">
      </div>

      <p
        class="font-ag w-fit uppercase absolute bottom-[90px] text-grad text-center text-[45px] sm:text-[60px] lg:text-[80px] xl:text-[110px] leading-none z-40">
        Tickets
        sold
      </p>
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
  height: 130%;
  width: 110%;
  z-index: 30;
}


#mask-heading {
  font-family: var(--font-ag);
  font-size: 120px;
  color: white;
  text-transform: uppercase;
}

#mask-paragraph {
  font-family: var(--font-ag);
  font-size: 30px;
  color: white;
  text-transform: uppercase;
  position: relative;
  z-index: 30;
}

#mask-bg {
  mask: url('#mask');
}

.text-grad {
  background-image: linear-gradient(165deg,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(255, 255, 255, 1) 50%,
      rgba(255, 255, 255, 0.4) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

@media (min-width:640px) {
  #mask-heading {
    font-size: 250px;
  }

  #mask-paragraph {
    font-size: 70px;
  }
}

@media (min-width:860px) {
  #mask-heading {
    font-size: 350px;
  }

  #mask-paragraph {
    font-size: 70px;
  }
}

@media (min-width:1280px) {
  #mask-heading {
    font-size: 450px;
  }

  #mask-paragraph {
    font-size: 70px;
  }
}

@media (min-width:1536px) {
  #mask-heading {
    font-size: 550px;
  }

  #mask-paragraph {
    font-size: 100px;
  }
}
</style>
