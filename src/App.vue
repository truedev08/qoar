<template>
  <div id="app">
    <div class="h-screen w-screen overflow-auto bg-blue-102">
      <Header/>
      <div class="flex justify-center">
        <Body/>
      </div>

      <div class="">
        <Contact/>
      </div>

    </div>

  </div>
</template>

<script>
  import Header from '@/components/layouts/Header.vue'
  import Body from '@/components/layouts/Body.vue'
  import Contact from '@/components/layouts/Contact.vue'

  export default {
    components: {
      Header,
      Body,
      Contact,
    }
  }
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
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
