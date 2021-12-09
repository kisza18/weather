<template>
  <main class="relative">
    <img
      class="object-cover h-full w-full absolute filter grayscale"
      src="./images/fog2.jpg"
      alt="wallpaper"
    />
    <div class="absolute top-0 h-full w-full grid grid-cols-4 grid-rows-3">
      <SearchBar class="col-span-3 row-span-2" />
      <Details class="col-span-1 row-span-3" />
      <Summary class="col-span-3 row-span-1" />
    </div>
  </main>
</template>

<script>
import axios from "axios";
import SearchBar from "./components/SearchBar.vue";
import Summary from "./components/Summary.vue";
import Details from "./components/Details.vue";

export default {
  name: "App",
  components: {
    SearchBar,
    Summary,
    Details,
  },
  data() {
    return {
      APIkey: "dc3b292b143bc3e3c8daadcdb0ca8e7c",
      city: "Budapest",
    };
  },
  created() {
    this.getCurrentWeather();
  },
  methods: {
    getCurrentWeather() {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${this.APIkey}`
        )
        .then((res) => {
          console.log(res.data);
        });
    },
  },
};
</script>

<style>
#app {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Comfortaa", cursive;
}
main {
  height: 100vh;
  min-height: 600px;
}
</style>
