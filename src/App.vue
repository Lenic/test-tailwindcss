<template>
  <div id="app" class="p-24 bg-primary px-12! bg-opacity-30 w-full h-full text-left">
    <h1
      class="
        text-warning text-36
        bg-primary-light
        mb-12
        rounded-8
        leading-60
        hover:text-opacity-50 hover:scale-110
        transform
        transition-transform
        duration-100
        cursor-pointer
        p-10
        divide-x-0
      "
    >
      This is an about page
    </h1>
    <div class="btn-abc border p-10 text-main text-opacity-20 text-center text-20 leading-60 h-60">abc</div>
    <span
      class="text-success hover:text-danger font-normal bg-danger bg-opacity-10 border-danger px-10 py-4 rounded-full"
    >
      Test
    </span>
    <div
      class="
        text-warning
        hover:text-white hover:text-opacity-70
        bg-grey-e2
        hover:bg-grey-91
        border-primary
        rounded-4
        transition-all
        duration-1000
        mt-16
        transform
        hover:scale-y-150
      "
    >
      xyz
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const countRef = ref(0);

    return {
      count: countRef,
    },
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
