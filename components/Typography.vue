<template>
  <div class="appear flex justify-center flex-row">
    <p
      class="text-5xl w-full lg:w-3/4 p-40 font-serif tracking-wider mb-80 text-stone-700"
    >
      <span v-for="(word, index) in para" :key="index" class="word">{{
        word
      }}</span>
    </p>
  </div>
</template>
<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ref } from "vue";
gsap.registerPlugin(ScrollTrigger);

const { content } = defineProps(["content"]);
const para = ref(content);

const scrollAnimation = () => {
  gsap.fromTo(
    `.word`,
    {
      opacity: 0.1,
    },
    {
      opacity: 1,
      stagger: {
        from: "start",
        amount: 1,
      },
      scrollTrigger: {
        trigger: ".appear",
        start: "top 35%",
        end: "top 0%",
        scrub: true,
        markers: false,
      },
    }
  );
};

onMounted(() => {
  para.value.split("  ");
  scrollAnimation();
});
</script>
<style lang=""></style>
