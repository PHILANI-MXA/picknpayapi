<template>
 <div id="home" class="home h-100 container p-4 my-5">
   <div id="carouselExampleControlsNoTouching" class="carousel slide " data-bs-touch="false" data-bs-interval="false">
  <div class="carousel-inner ">
    <div class="carousel-item active ">
      <img src="https://i.postimg.cc/SQGrs2M8/carousel-pnp3.jpg" class="d-block w-100" alt="responsive carou">
    </div>
    <div class="carousel-item">
      <img src="https://i.postimg.cc/RZtJWyD8/carousel-pnp2.jpg" class="d-block w-100" alt="responsive carou">
    </div>
    <div class="carousel-item">
      <img src="https://i.postimg.cc/F1X755t3/carousel2.png" class="d-block w-100 " alt="responsive carou">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src

import HelloWorld from '@/components/HelloWorld.vue'

export default {
  // name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
#home{
  background-attachment: fixed;
}
.home{
  background-color :rgb(80,113,147);
  background-image: url(https://i.postimg.cc/HnrpLpDF/dollar-gill-n-Xk-V-d-Rf17-U-unsplash.jpg);
    background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.50;
  background-attachment: fixed;
  object-position: 0 0;
}


.carousel-item{
  background-attachment: fixed;
  height: 600px;
}


</style>
