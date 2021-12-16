<template>
  <main class="relative">
    <img
      class="object-cover h-full w-full absolute filter grayscale"
      src="./images/fog2.jpg"
      alt="wallpaper"
    />
    <div class="absolute top-0 h-full w-full flex justify-between">
      <div class="flex flex-col justify-between w-full">
        <SearchBar @sendChange="setCity" />
        <Summary
          :city="city"
          :temp="temp"
          :description="description"
          :date="date"
          :icon="icon"
        />
      </div>
      <Details />
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
      unit: "metric",
      city: "Budapest",
      lat: "",
      lon: "",
      temp: "",
      description: "",
      date: "",
      options: {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      },
      icon: "",
    };
  },
  created() {
    this.getData();
  },
  methods: {
    setCity(event) {
      this.city = event;
      this.getData();
    },
    getData() {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.APIkey}`
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
