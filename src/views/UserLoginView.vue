<template>
   <div id="form" class="container h-100">
   <h2></h2>
   </div>
   <SingleProductview/>
</template>

<script>
import UserLoginCompVue from "@/components/UserLoginComp.vue";

export default {
    components : { UserLoginCompVue }
}

</script>

<style scoped>
.form{
    background-color: azure;
}
</style>