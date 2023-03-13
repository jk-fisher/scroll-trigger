<template>
  <div class="bg-orange-50">
    <div class="absolute bottom-0 right-0 m-0 p-4">
      <NuxtLink
        data-flip-id="page"
        class="page block w-12 h-12 bg-yellow-600 full"
        to="/social"
      >
        <div class="container">
          <svg class="fill-transparent stroke-white" viewBox="0 0 100 100">
            <polygon points="50 15, 100 100, 0 100" />
          </svg>
        </div>
      </NuxtLink>
    </div>
    <HeroBanner />
    <Slide :text="p" />
    <LeftSlide :overlayText="overlayText" :tourText="text" />
    <Songs :songs="songs" />
    <Typography :content="content" />
    <Header :headerContent="header" />
    <HeaderPullUp :headerContent="header" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import HeaderPullUp from "../components/HeaderPullUp.vue";

gsap.registerPlugin(Flip);

let prevPageState;
const route = useRoute();
const header = ref("The Experience");
const p = ref(`<p>
          it’s hard to believe that rihanna is only 34 years old. yet within the
          10 years since the start of her musical career, she’s become the
          youngest solo artist to score 14 no. 1 singles on the billboard hot
          100—the fastest to do so—she’s sold more than 54 million albums and
          210 million tracks worldwide. </p><br />
          <br /><p>
          rihanna is the “best selling digital artist of all time… with more
          than 100 million [riaa] gold & platinum song certifications” and an
          eight-time grammy award winner who also counts 14 billboard music
          awards among other countless music accolades. <br />
          <br /></p><p>
          aside from her musical achievements, rihanna is bona fide business
          woman with multiple entrepreneurial ventures. however, most
          importantly, her undeniable cultural influence has forever imprinted
          her in history as a global icon despite her young age.
        </p>`);
const overlayText = ref(
  `rihanna recently kicked off the anti world tour in on march 12 in jacksonville, fl with nearly 40 shows lined up in new york city, los angeles, toronto, chicago, vancouver, washington dc & more. the european leg of the tour will then follow in summer 2016.`
);
const text = ref(
  `with over 81 million facebook fans, 57 million twitter & 35 million instagram followers, rihanna is putting her influence to good use via philanthropic efforts. chief among these is her own clara lionel foundation. established in 2012 and named after rihanna’s beloved grandparents clara & lionel braithwaite, the foundation works to improve the quality of life for communities globally in the areas of health, education, arts & culture. in december, rihanna held the 2nd annual diamond ball to benefit the clf.`
);
const songs = ref([
  {
    song: "talk that talk",
    year: 2014,
  },
  {
    song: "unapologetic",
    year: 2015,
  },
  {
    song: "fourifveseconds",
    year: 2016,
  },
  {
    song: "sledgehammer",
    year: 2017,
  },
  {
    song: "lift me up",
    year: 2018,
  },
]);
const content = ref(
  "As human beings, we often find ourselves feeling out of place in the world around us. We sense that something is not quite right, that the reality we experience is not necessarily the truth. "
);

//page Transition
//transition away from home
onBeforeMount(() => {
  const elemToFlip = document.querySelector("[data-flip-id=page]");
  if (elemToFlip) {
    prevPageState = Flip.getState(elemToFlip, { props: "backgroundColor" });
  }
});
//home page mounted
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
<style scoped>
.container {
  width: 40px;
  height: 40px;
  text-align: center;
  margin: auto;
}
.container svg {
  stroke-width: 3px;
}
</style>
