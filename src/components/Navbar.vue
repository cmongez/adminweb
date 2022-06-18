<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-primary">
    
  <div class="container-fluid">
    <router-link class="navbar-brand" to="/home" >Adweb online</router-link>
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
         <router-link class="nav-link active" to="/home"> Home</router-link>
         
        <router-link class="nav-link" to="/" replace >Cerrar sesión</router-link>
      </div>
    </div>
  </div>
  <p class="text-center mx-auto p-md-2">{{$store.state.login}}</p>
</nav>
</template>

<script>
export default {
  name:'Navbar',

}
</script>

<style lang="scss">


</style>