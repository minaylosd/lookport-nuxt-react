<template>
  <div
    class="relative font-normal leading-5 cursor-pointer font-geometria group">
    <p class="text-base text-white">Ru</p>
    <div
      class="w-full h-[1px] bg-[linear-gradient(to_right,_#8000ff_0%,_#005eff_100%)]"></div>
    <div class="absolute top-full left-1/2 -translate-x-1/2 translate-y-1.5 opacity-0 group-hover:opacity-100 transition-all">
      <div class="relative h-16 w-28">
        <img
          src="/images/icons/Tooltip.png"
          class="object-cover w-full h-full"
          alt="" />
        <div class="absolute inset-0 flex flex-col items-center justify-center w-full h-full gap-1/5">
          <div class="text-base text-white">En</div>
          <div class="text-base text-white">中文</div>
        </div>
      </div>
    </div>
  </div>
</template>
