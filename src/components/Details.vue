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
      <div class="flex items-center justify-between">
        <Card class="flex items-center">
          <h1 class="pr-2">SUNRISE</h1>
          <span>{{ sunrise }}</span>
        </Card>
        <Card class="flex items-center">
          <h1 class="pr-2">SUNSET</h1>
          <span>{{ sunset }}</span>
        </Card>
      </div>

      <div>
        <Card class="flex items-center justify-around text-center py-6">
          <div>
            <h1>Humidity</h1>
            <i class="fal fa-humidity text-2xl py-2"></i>
            <h1>{{ humidity }} %</h1>
          </div>
          <div>
            <h1>Pressure</h1>
            <i class="fal fa-cloud-download text-2xl py-2"></i>
            <h1>{{ pressure }} hPa</h1>
          </div>
          <div>
            <h1>Wind</h1>
            <i class="fal fa-wind text-2xl py-2"></i>
            <h1>{{ wind }} km/h</h1>
          </div>
        </Card>
      </div>
      <Card>
        <table class="table-auto w-full text-left">
          <tbody>
            <tr>
              <td class="py-1"><h1>Tue 21</h1></td>
              <td class="py-1 text-center">
                <i class="fal fa-thunderstorm"></i>
              </td>
              <td class="py-1 text-center"><h1>Thunderstorm</h1></td>
              <td class="py-1 text-right"><h1>29° / 32°</h1></td>
            </tr>
            <tr>
              <td class="py-1"><h1>Wed 22</h1></td>
              <td class="py-1 text-center"><i class="fal fa-sun-cloud"></i></td>
              <td class="py-1 text-center"><h1>Sun cloud</h1></td>
              <td class="py-1 text-right"><h1>30° / 33°</h1></td>
            </tr>
            <tr>
              <td class="py-1"><h1>Thu 23</h1></td>
              <td class="py-1 text-center"><i class="fal fa-fog"></i></td>
              <td class="py-1 text-center"><h1>Fog</h1></td>
              <td class="py-1 text-right"><h1>21° / 23°</h1></td>
            </tr>
            <tr>
              <td class="py-1"><h1>Fri 24</h1></td>
              <td class="py-1 text-center">
                <i class="fal fa-cloud-rain"></i>
              </td>
              <td class="py-1 text-center"><h1>Rain</h1></td>
              <td class="py-1 text-right"><h1>25° / 26°</h1></td>
            </tr>
            <tr>
              <td class="py-1"><h1>Sat 25</h1></td>
              <td class="py-1 text-center"><i class="fal fa-fog"></i></td>
              <td class="py-1 text-center"><h1>Fog</h1></td>
              <td class="py-1 text-right"><h1>18° / 19°</h1></td>
            </tr>
            <tr>
              <td class="py-1"><h1>Sun 26</h1></td>
              <td class="py-1 text-center"><i class="fal fa-sun-cloud"></i></td>
              <td class="py-1 text-center"><h1>Sun cloud</h1></td>
              <td class="py-1 text-right"><h1>31° / 33°</h1></td>
            </tr>
            <tr>
              <td class="py-1"><h1>Mon 27</h1></td>
              <td class="py-1 text-center"><i class="fal fa-sun"></i></td>
              <td class="py-1 text-center"><h1>Sun</h1></td>
              <td class="py-1 text-right"><h1>33° / 35°</h1></td>
            </tr>
          </tbody>
        </table>
      </Card>
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";
export default {
  props: ["sunrise", "sunset", "humidity", "pressure", "wind"],
  components: {
    Card,
  },
};
</script>

<style scoped>
.details {
  min-width: 400px;
  width: 500px;
}
.blur {
  background: rgba(0, 0, 0, 0.5);
}
</style>
