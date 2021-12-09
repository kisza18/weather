<template>
  <div class="py-14 pl-20 pr-6 flex items-start justify-between">
    <div
      class="search_input bg-gray-100 w-80 flex items-center justify-start rounded-full py-2 px-5 shadow-lg h-10 hover:shadow-xl duration-300"
    >
      <i class="fal fa-search text-gray-400 pr-4"></i>
      <input
        class="rounded-full bg-transparent outline-none"
        type="text"
        placeholder="another location"
      />
    </div>
    <div class="menu">
      <button>
        <i
          class="fal fa-ellipsis-v text-white text-4xl hover:text-gray-400 duration-300 px-4"
        ></i>
      </button>
    </div>
  </div>
</template>
