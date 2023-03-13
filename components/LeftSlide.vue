<template>
  <div class="trigger w-screen py-96 bg-amber-50 z-10 relative">
    <p class="slide-l w-6/12 ml-10 text-2xl">
      {{ overlayText }}
    </p>
  </div>

  <div class="w-screen h-full flex flex-row z-0">
    <div class="drop w-6/12 shrink grow">
      <nuxt-img
        class="h-full max-w-full object-cover"
        src="/rene-muller-c-YKqs76ot8-unsplash (1).jpg"
      />
    </div>

    <div class="slide flex justify-center flex-col w-6/12 grow">
      <p v-html="tourText" class="slide-up w-9/12 m-auto text-xl"></p>
    </div>
  </div>
</template>
<script setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const { overlayText, tourText } = defineProps(["overlayText", "tourText"]);

const scrollAnimation = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".trigger",
      start: "top 80%",
      end: "bottom 20%",
      scrub: true,
    },
  });
  tl.from(".slide-l", { xPercent: -100 });
  tl.to(".slide-l", { xPercent: 0 });
  tl.to(".slide-l", { xPercent: -100 });
};
const revealAnimation = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".trigger",
      end: "bottom",
      start: "top 5%",
      scrub: true,
    },
  });

  tl.to(".drop", {
    scrollTrigger: { pin: ".drop", start: "top", end: "top" },
  });
  tl.from(".drop", { yPercent: -100, duration: 10 });
  tl.fromTo(".slide-up", { yPercent: -10, duration: 3 }, { yPercent: 0 });
};
onMounted(() => {
  scrollAnimation();
  revealAnimation();
});
</script>
<style scoped>
.trigger,
.drop {
  min-height: 560px;
  max-height: 560px;
}
</style>
