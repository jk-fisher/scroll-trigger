<template>
  <div
    ref="comp"
    class="header bg-orange-300 flex justify-center flex-row mb-80"
  >
    <h1
      class="text-8xl w-full lg:w-3/4 p-40 font-serif tracking-wider mb-80 text-stone-100 text-center"
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
        y: 200,
        scaleX: 0.6,
        scaleY: 2.5,
        opacity: 0,
      },
      {
        ease: "back.inOut(2)",
        y: 0,
        scaleY: 1,
        scaleX: 1,
        opacity: 1,
        stagger: 0.1,
        duration: 2.8,
        scrollTrigger: {
          trigger: ".char",
          start: "top 95%",
          end: "top 15%",
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
