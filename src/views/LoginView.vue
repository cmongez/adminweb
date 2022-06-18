<template>


  <div class="container-fluid h-custom">
    <p class="h2 text-center mt-5">Email: admin@admin.cl <br> contraseña: admin</p>
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          class="img-fluid" alt="Sample image">
      </div>
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form>
          <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
            </div>

          <div class="divider d-flex align-items-center my-4">
            
          </div>

          <!-- Email input -->
          <div class="form-outline mb-4">
            <input type="email" id="form3Example3" class="form-control form-control-lg"
              placeholder="Ingresar Email" v-model="userInput"  />
            <label class="form-label"   for="form3Example3">Email</label>
          </div>

          <!-- Password input -->
          <div class="form-outline mb-3">
            <input type="password" id="form3Example4" class="form-control form-control-lg"
              placeholder="Ingresa contraseña" v-model="passInput" />
            <label class="form-label" for="form3Example4">Contraseña</label>
          </div>

          <div class="d-flex justify-content-between align-items-center">
           </div>
          <div class="text-center text-lg-start mt-4 pt-2">
            <button type="button" class="btn btn-primary btn-lg"
              style="padding-left: 2.5rem; padding-right: 2.5rem;" @click="validar()" > Login</button>
           
          </div>

        </form>
      </div>
    </div>

  </div>
 
 

</template>

<script>
import Axios from "axios"
export default {
  name: "LoginView",
  data(){
    return{ 
      userInput:"",
      passInput:"",
     result : null

  }
  },

  created(){
 Axios.get("json/validar.json")
  .then(validacion=>{this.result = validacion.data 
  })
  
  },
 
methods:{
validar(){
  
  if(this.result.user === this.userInput && this.result.pass === this.passInput ){
    this.$store.dispatch("renderLogin",this.userInput)
    this.$router.replace({ path: '/home' })
  }
  else{
    alert("Datos erroneos")
  }
  }
  
}
  }
  

</script>

<style>

</style>