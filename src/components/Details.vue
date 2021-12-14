<template>
  <div class="details blur pl-10 pr-10 pt-5 overflow-auto">
    <!--header-->
    <div class="header flex items-center justify-between text-gray-300">
      <h1 class="font-bold">DAY DETAILS</h1>
      <div class="flex">
        <h4>FRIDAY</h4>
        <span class="px-1">-</span>
        <h4>12 JULY</h4>
      </div>
    </div>
    <!--content-->
    <div class="flex flex-col justify-between">
      <Card>
        <h1>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab minus
          laudantium similique optio explicabo expedita.
        </h1>
      </Card>
      <Card class="flex items-center">
        <i class="fal fa-sunrise pr-5 text-lg"></i>
        <h1 class="pr-2">SUNRISE</h1>
        <span>5:44 AM</span>
      </Card>
      <Card class="flex items-center">
        <i class="fal fa-sunset pr-5 text-lg"></i>
        <h1 class="pr-2">SUNSET</h1>
        <span>8:57 PM</span>
      </Card>
      <div>
        <Card class="flex items-center justify-around text-center py-6">
          <div>
            <h1>Humidity</h1>
            <i class="fal fa-humidity text-2xl py-2"></i>
            <h1>62 %</h1>
          </div>
          <div>
            <h1>Pressure</h1>
            <i class="fal fa-cloud-download text-2xl py-2"></i>
            <h1>1023 hPa</h1>
          </div>
          <div>
            <h1>Wind</h1>
            <i class="fal fa-wind text-2xl py-2"></i>
            <h1>10 km/h</h1>
          </div>
        </Card>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";
export default {
  components: {
    Card,
  },
};
</script>

<style scoped>
.blur {
  background: linear-gradient(
    to right top,
    rgba(0, 0, 0, 0.4),
    rgba(0, 0, 0, 0.2)
  );
}
</style>
