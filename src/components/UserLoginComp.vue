<template>
<div id="login" class="container h-100 p-4 my-5 gy-5">
<h2 class="fw-bold display-5 my-5 p-5">User Login </h2>
<div class="col-6 m-auto">
    <form class="container border border-black h-100">
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control my-2" id="exampleInputPassword1" name="userpassword">
  </div>
  <button type="submit" class="btn btn-primary my-5">Submit</button>
</form>
</div>
</div>
</template>

<script>
export default {
    name: 'UserLoginComponent'
}
</script>