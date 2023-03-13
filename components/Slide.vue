<template>
  <div
    class="container-trigger w-screen h-full flex basis-1/3 flex-col lg:flex-row bg-stone-100"
  >
    <div class="img-trigger shrink-0">
      <nuxt-img class="h-screen md:w-auto" src="/dawn-g3cd70f7f9_1280.jpg" />
    </div>
    <div class="flex justify-center flex-col grow py-10">
      <div v-html="text" class="text-trigger w-9/12 m-auto"></div>
    </div>
  </div>
</template>

<script setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const { text } = defineProps(["text"]);

const scrollAnimation = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".container-trigger",
      start: "top 100%",
      end: "top",
      scrub: true,
    },
  });
  tl.from(".img-trigger", { xPercent: -100, duration: 7 });
  tl.from(".text-trigger", { xPercent: 100, duration: 7 }, "<");
  tl.to(".container-trigger", { yPercent: -30, duration: 3 });
};

onMounted(() => {
  scrollAnimation();
});
</script>

<style scoped>
.container-trigger {
  margin-bottom: -20%;
}
</style>
