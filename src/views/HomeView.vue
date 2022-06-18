<template>
  <div>
    <h1 class="text-center m-3">Cursos de Programación</h1>
    <Card />
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import { mapState } from "vuex";
export default {
  components: { Card },
  computed: {
    ...mapState(["courses"]),
  },

  created() {
    this.$store.dispatch("getCourses");
  },
};
</script>

<style>
</style>