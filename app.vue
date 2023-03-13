<template>
  <div>
    <nav>
      <div
        class="nav w-screen flex flex-row justify-center gap-10 h-12 items-center"
      >
        <div class="nav-item relative">
          <NuxtLink to="/"> Home </NuxtLink>
          <div
            data-flip-id="line"
            v-if="route.path === '/'"
            class="line absolute mt-1 left-0 bg-yellow-600 rounded-md w-full h-0.5"
          ></div>
        </div>
        <div class="nav-item relative">
          <NuxtLink to="/about"> About </NuxtLink>
          <div
            data-flip-id="line"
            v-if="route.path === '/about'"
            class="line absolute mt-1 left-0 bg-yellow-600 rounded-md w-full h-0.5"
          ></div>
        </div>
        <div class="nav-item relative">
          <NuxtLink to="/environmental"> Environmental </NuxtLink>
          <div
            data-flip-id="line"
            v-if="route.path === '/environmental'"
            class="line absolute mt-1 left-0 bg-yellow-600 rounded-md w-full h-0.5"
          ></div>
        </div>
      </div>
    </nav>

    <NuxtPage />
  </div>
</template>
<script setup>
import { gsap } from "gsap";
import { onBeforeUpdate, onUpdated } from "vue";
import { Flip } from "gsap/Flip";
gsap.registerPlugin(Flip);

let prevLineState;
//before route change get prevLineState
onBeforeUpdate(() => {
  const elemToFlip = document.querySelector("[data-flip-id=line]");
  if (elemToFlip) {
    prevLineState = Flip.getState(elemToFlip);
  }
});

// animate to new position of the element after route change
onUpdated(() => {
  const elemToFlip = document.querySelector("[data-flip-id=line]");
  if (elemToFlip && prevLineState) {
    Flip.from(prevLineState, {
      // paused: true,
      targets: elemToFlip,
      duration: 0.8,
      absolute: true,
      absoluteOnLeave: true,
    });
  }
  prevLineState = null;
});

const route = useRoute();
</script>
<style scoped>
.router-link-active {
  color: rgb(194, 124, 90);
}
.none {
  display: none;
}
/* @import "./index.css"; */
</style>
