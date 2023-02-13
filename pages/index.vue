<template>
  <div>
    <HeroBanner />
    <Childhood :childhoodText="p" />
    <Tour :overlayText="overlayText" :tourText="text" />
    <!-- <Childhood :childhoodText="p" /> -->
  </div>
</template>

<script setup>
import { ref } from "vue";

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
</script>
<style scoped></style>
