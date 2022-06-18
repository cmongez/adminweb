<template>
  <div class="container">
    <div class="row justify-content-around">
      <div
        v-for="(item, index) in getCategory"
        :key="index"
        class="p-1 col-11 col-sm-6 col-md-5 col-lg-3"
      >
        <div class="card shadow">
          <div class="card-header">{{ item.categoria }}</div>
          <div class="card-body d-flex flex-column align-items-center">
            <div>
              <img :src="item.img" class="card-img-top" height="80" alt="..." />
            </div>
            <a
              class="btn btn-primary"
              @click="renderCourses(item.categoria), shareData(item.categoria)"
              >Ver cursos</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";

export default {
  name: "Card",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getCategory"]),
    ...mapState(["courses", "categoryArray","course"]),
  },
  methods: {
    shareData(iruta) {
      this.$router.push({
        name: "admin",
        params: { datos: iruta, id: iruta },
      })
    },
     renderCourses(categorias){
      this.$store.dispatch("renderAdmin", categorias)
     }
  },
 

};
</script>

<style>
</style>