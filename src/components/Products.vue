<template>
<div id="products" class="container h-100 overflow-auto p-4 my-5 gy-5">

<h2 class="fw-bold display-5 my-5 p-5">Products</h2>
<h4 class="dispaly"></h4>
<div class="row  justify-content-between">
<div v-for="card in products" class="col-md-2 card d-flex">
<div>
  <div class="card-header">
  <h5 class="card-title">{{card.productname}}</h5>
  </div>
  <div class="card-body">
  <img class="img-fluid" :src="card.productimg" alt="project image">
    <p class="card-text">{{card.productprice}}</p>
    <p class="card-text">{{card.ratings}}</p>
  </div>
</div>
</div>
</div>
</div>
</template>

<script>
export default {
    computed: {
        products() {
            return this.$store.state.products;
       }
    }
}

</script>

<style scoped>

.card{
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
flex-wrap: wrap;
color:white;
font-family: San-Francisco;
background-color: #17141D;
border-radius: 10px;
box-shadow: -1rem 0 3rem #000;
transition: 0.4s ease-out;
margin-bottom: 10px;
width: 30%;
}
.card:hover {
  box-shadow: rgba(0, 0, 0, 0.22) 0px 19px 43px;
  transform: translate3d(0px, -1px, 0px);
}
.btn{
  justify-content: space-between;
  align-content: space-around;
}
</style>