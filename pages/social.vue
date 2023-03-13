<template>
  <div class="page bg-orange-50 h-screen" data-flip-id="page">
    <div class="p-3 flex items-center justify-between border-b border--white">
      <NuxtLink to="/">Back</NuxtLink>

      <h1>SOCIAL</h1>
    </div>
  </div>
</template>

<script setup>
import { gsap } from "gsap";
import { onBeforeMount, onMounted } from "vue";
import { Flip } from "gsap/Flip";

let prevPageState;
gsap.registerPlugin(Flip);

//transition away from social
onBeforeMount(() => {
  const elemToFlip = document.querySelector("[data-flip-id=page]");
  if (elemToFlip) {
    prevPageState = Flip.getState(elemToFlip, { props: "backgroundColor" });
  }
});

//social page mounted
onMounted(() => {
  const elemToFlip = document.querySelector("[data-flip-id=page]");
  if (elemToFlip && prevPageState) {
    Flip.from(prevPageState, {
      targets: elemToFlip,
      duration: 0.8,
      absolute: true,
      absoluteOnLeave: true,
    });
  }
  prevPageState = null;
});
</script>
