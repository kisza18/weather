<template>
  <div class="blur pl-20 pr-10 pb-10 pt-6">
    <!--header-->
    <div class="header flex items-end justify-between">
      <div class="flex items-end">
        <h1 class="text-gray-200 text-9xl">{{ temp }}°</h1>
        <h3 class="text-gray-200 text-3xl font-bold pb-2">{{ description }}</h3>
      </div>
      <div class="flex flex-col items-end">
        <div class="flex">
          <button class="text-gray-300">Celsius</button>
          <span class="text-gray-300 px-1">|</span>
          <button class="text-gray-300">Fahrenheit</button>
        </div>
        <img :src="icon" alt="icon" class="w-20" />
      </div>
    </div>
    <!--footer-->
    <div class="w-full border-t-2 border-gray-400 my-6"></div>
    <div class="flex items-center justify-between pt-6">
      <div class="flex text-gray-300">
        <h4 class="text-xl">{{ city }}</h4>
      </div>
      <div class="flex text-gray-300">
        <h1>{{ date }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["city", "temp", "description", "date", "icon"],
};
</script>

<style scoped>
.blur {
  background: rgba(0, 0, 0, 0.4);
}
</style>
