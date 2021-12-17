<template>
  <main class="relative">
    <img
      class="object-cover h-full w-full absolute filter"
      src="./images/drizzle.jpg"
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
      <Details
        :sunrise="sunrise"
        :sunset="sunset"
        :humidity="humidity"
        :pressure="pressure"
        :wind="wind"
      />
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
      },
      timestamp: {
        hour: "2-digit",
        minute: "2-digit",
      },
      icon: "",
      sunrise: "",
      sunset: "",
      humidity: "",
      pressure: "",
      wind: "",
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
          `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${this.APIkey}`
        )
        .then((res) => {
          this.city = res.data.name;
          this.temp = Math.round(res.data.main.temp);
          this.description = res.data.weather[0].main;
          this.date = new Date(res.data.dt * 1000).toLocaleDateString(
            "en-US",
            this.options
          );
          this.icon =
            "http://openweathermap.org/img/w/" +
            res.data.weather[0].icon +
            ".png";
          this.sunrise = new Date(
            res.data.sys.sunrise * 1000
          ).toLocaleTimeString("en-US", this.timestamp);
          this.sunset = new Date(res.data.sys.sunset * 1000).toLocaleTimeString(
            "en-US",
            this.timestamp
          );
          this.humidity = res.data.main.humidity;
          this.pressure = res.data.main.pressure;
          this.wind = res.data.wind.speed;
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
