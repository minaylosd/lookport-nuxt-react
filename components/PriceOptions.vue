<template>
  <div class="relative w-full section">
    <section
      class="flex flex-col items-center justify-between w-full max-w-screen-lg gap-20 px-6 py-10 mx-auto md:px-10 md:py-40 md:flex-row xl:max-w-screen-xl">
      <div class="flex flex-col gap-6 basis-5/12">
        <h1
          class="anim-up md:text-8xl text-5xl leading-none font-semibold tracking-[-0.01em] text-white font-ag uppercase">
          Dynamic Prices and Donations
        </h1>
        <p
          class="anim-up relative z-10 md:text-2xl text-lg leading-[130%] font-normal tracking-tighter font-geometria text-white">
          Flexible pricing options to maximize revenue up to 30%
        </p>
      </div>

      <div class="w-full md:basis-5/12">
        <div class="relative flex flex-col justify-center gap-6 max-w-96">
          <div class="anim-up absolute z-10 -bottom-[140px] -right-56 w-full max-w-[450px] h-auto ">
             <img
            src="/images/prices-glass.png"
            class="w-full max-w-[450px] h-auto object-cover"
            alt="" />
          </div>

          <div
            class="anim-up flex flex-col justify-center md:w-full md:h-32 h-28 p-9 rounded-2xl font-geometria font-normal tracking-tighter text-white md:text-2xl text-lg border border-white/5 bg-[linear-gradient(68deg,_rgba(49,_52,_64,_0.8)_0%,_rgba(255,_255,_255,_0)_100%)] backdrop-blur-lg">
            Open price tickets
          </div>
          <div
            class="relative flex flex-col justify-center overflow-hidden border anim-up max-w-96 md:h-32 h-28 md:w-full p-9 rounded-2xl border-white/5">
            <img
              class="absolute inset-0 object-cover w-full h-full"
              src="/images/icons/ang-gradient.png"
              alt="" />
            <p
              class="relative z-30 text-lg font-normal tracking-tighter text-black md:text-2xl font-geometria">
              Donation<br />options
            </p>
          </div>
          <div
            class="anim-up relative z-30 flex max-w-96 flex-col justify-center md:w-full md:h-32 h-28 p-9 rounded-2xl font-geometria font-normal tracking-tighter text-white md:text-2xl text-lg border border-white/5 bg-[linear-gradient(68deg,_rgba(49,_52,_64,_0.8)_0%,_rgba(255,_255,_255,_0)_100%)] backdrop-blur-lg">
            Price adjustments<br />based on demand
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
