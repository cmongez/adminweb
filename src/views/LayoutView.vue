<template>
<div class="d-flex min-vh-100 flex-column align-items-stretch">
    <Navbar />
    <router-view class="flex-grow-1"/>
    <Footer />
</div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
export default {
    name:'LayoutView',
    components:{
        Navbar,Footer
    }

}
</script>

<style>

</style>