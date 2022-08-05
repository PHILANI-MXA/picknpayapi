<template>
  <NavComponentVue/>
  <HomeView/>
  <Products/>
  <UserLoginCompVue/>
  <SignUpCompform/>
</template>

<script>
import NavComponentVue from './components/NavComponent.vue'
import HomeView from './views/HomeView.vue'
import Products from './components/Products.vue'
import UserLoginCompVue from '@/components/UserLoginComp.vue';
import SignUpCompform from './components/signUpCompform.vue';


export default {
  components: {
    NavComponentVue,
    HomeView,
    Products,
    UserLoginCompVue,
    SignUpCompform
}

}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #fffefe;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: white;
}


</style>
