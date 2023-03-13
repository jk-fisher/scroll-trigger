<template>
  <div class="flex justify-center items-center flex-col p-20 bg-stone-700">
    <input
      type="text"
      v-model="newSong"
      @keypress.enter="addSong"
      class="input"
      placeholder="Add a new song..."
    />
    <select class="input" v-model="selectedYear">
      <option disabled value="">Select Year</option>
      <option value="all">all</option>
      <option value="2023">2023</option>
      <option value="2018">2018</option>
      <option value="2017">2017</option>
      <option value="2016">2016</option>
      <option value="2015">2015</option>
      <option value="2014">2014</option>
    </select>
    <ul class="p-10">
      <li
        v-for="song in filtered"
        :key="song.year"
        class="p-6"
        @click="deleteSong(song.song)"
      >
        <h4 class="song card text-slate-600 flex flex-row justify-between">
          {{ song.song }}<span>{{ song.year }}</span>
        </h4>
      </li>
    </ul>
  </div>
</template>

<script setup>
const { songs } = defineProps(["songs"]);
const songsRef = ref(songs);
const filteredSongs = ref("");
const newSong = ref("");
const selectedYear = ref("");

const addSong = () => {
  if (newSong.value) {
    const date = new Date().getFullYear();
    songsRef.value = [{ song: newSong.value, year: date }, ...songsRef.value];
    newSong.value = "";
  }
  return { addSong, newSong, songsRef };
};
const deleteSong = (songName) => {
  songsRef.value = songsRef.value.filter((song) => song.song != songName);
  filteredSongs.value = filteredSongs.value.filter(
    (song) => song.song != songName
  );
  return { songsRef, filteredSongs };
};
const filterYears = (selectedYear) => {
  console.log(selectedYear);
  if (selectedYear !== "all") {
    filteredSongs.value = songsRef.value.filter(
      (song) => song.year == selectedYear
    );
  } else {
    filteredSongs.value = songsRef.value;
  }
  return { filteredSongs };
};

const filtered = computed(() => {
  return selectedYear.value ? filteredSongs.value : songsRef.value;
});

watch(selectedYear, (newYear) => {
  filterYears(selectedYear.value);
});
</script>

<style scoped>
/* @import "@/styles/main.css"; */
.song {
  font-family: "Marcellus", serif;
  font-size: 26px;
  width: 700px;
  color: beige;
}
.input {
  margin: 20px auto;
  text-align: center;
  border: solid 3px grey;
  width: 20vw;
  height: 60px;
}
</style>
