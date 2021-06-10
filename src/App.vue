<template>
  <div
    id="app"
    class="text-12 bg-warning-light md:bg-danger-light hover:text-primary"
  >
    <h1 class="font-600 text-16">This is an about page</h1>
    <div
      class="text-warning-light hover:text-success bg-gradient-to-r from-primary-light to-warning text-36 font-bold cursor-pointer"
    >
      abc
    </div>
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
