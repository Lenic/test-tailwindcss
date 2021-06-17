<template>
  <div id="app" class="p-24 bg-primary px-12! bg-opacity-30 w-full h-full">
    <h1
      class="
        text-warning text-36
        bg-primary-light
        mb-12
        rounded-8
        leading-60
        hover:text-opacity-50
        hover:scale-110
        transform
        transition-transform
        duration-100
        cursor-pointer
      "
    >
      This is an about page
    </h1>
    <div class="btn-abc border">abc</div>
  </div>
</template>

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
