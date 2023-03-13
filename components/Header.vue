<template>
  <div ref="comp" class="header flex justify-center flex-row mb-80">
    <h1
      class="text-8xl w-full lg:w-3/4 p-40 font-serif tracking-wider mb-80 text-center"
    >
      <span v-for="(char, index) in header" :key="index" class="char">{{
        char
      }}</span>
    </h1>
  </div>
</template>
<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ref } from "vue";
gsap.registerPlugin(ScrollTrigger);

const { headerContent } = defineProps(["headerContent"]);
const header = ref(headerContent);
const comp = ref(null);
const appearAnimation = () => {
  let ctx = gsap.context(() => {
    gsap.fromTo(
      `.char`,
      {
        y: -40,
        opacity: 0,
        scale: 0,
        rotationZ: () => gsap.utils.random(-20, 20),
      },
      {
        ease: "power4",
        y: 0,
        scale: 1,
        rotation: 0,
        opacity: 1,
        stagger: 0.4,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".char",
          start: "top 85%",
          end: "top 30%",
          markers: true,
          scrub: true,
        },
      }
    );
  }, comp.value);
  return () => ctx.revert();
};

onMounted(() => {
  header.value.split(" ");
  appearAnimation();
});
</script>
<style scoped>
.char {
  white-space: pre-wrap;
  display: inline-block;
}
</style>
