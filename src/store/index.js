import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
import Axios from "axios";
export default new Vuex.Store({
  state: {
    course: {
      codigo: null,
      categoria: null,
      nombre: "",
      estado: null,
      precio: null,
      duracion: null,
      descripcion: null,
      cupos: null,
      inscritos: null,
      img: null,
      
    },
    courses: [],
    categoryGroup: [],
    categoryArray: [],
    peticion: false,
    login: ""
  },
  getters: {
    //Selecciona solo un objeto por categoria para pintar las cards de el home
    getCategory(state) {
      state.courses.forEach((element) => {
        let validarCategoria = state.categoryGroup.some(
          (item) => item.categoria == element.categoria
        );
        if (!validarCategoria) {
          state.categoryGroup.push(element);
        }
      });
      return state.categoryGroup;
    },
    getCategoryArray(state) {
      return state.categoryArray;
    },
    getCodigo(state) {
      return state.courses.length + 1;
    },
  },
  mutations: {
    GET_COURSES(state, datosAxios) {
      state.courses = datosAxios;
    },
    RENDER_ADMIN(state, nuevoArray) {
      state.categoryArray = nuevoArray;
      state.peticion = true;
    },
    DELETE_COURSE(state, deleteArray) {
      state.courses = deleteArray;
    },
    ADD_COURSE(state, curso) {
      state.courses.push(curso);
    },
    EDIT_COURSE(state, datos) {
      state.courses[datos.id] = datos.curso;

    },
    RENDER_LOGIN(state, usuario){
      state.login = usuario
    }
  },
  actions: {
    async getCourses({ commit, state }) {
      if (!state.peticion) {
        const response = await Axios.get("json/cursos.json");
        commit("GET_COURSES", response.data);
      }
    },
    renderLogin({commit}, usuario){
      commit("RENDER_LOGIN", usuario)
    },
    renderAdmin({ commit, state }, categoria) {
      let nuevoArray = [];
      state.courses.forEach((item) => {
        item.categoria == categoria ? nuevoArray.push(item) : null;
        commit("RENDER_ADMIN", nuevoArray);
      });
    },
    deleteCourse({ commit, state }, codigo) {
      let deleteArray = state.courses.filter((item) => item.codigo != codigo);
      commit("DELETE_COURSE", deleteArray);
    },
    addCourse({ commit, state }, curso) {
      commit("ADD_COURSE", curso);
    },
    editCourse({ commit, state }, cursoEdit) {
      let indexCurso;
      state.courses.forEach((item) => {
        
        if ((item.codigo == cursoEdit.codigo)) {
          indexCurso = state.courses.indexOf(item);

          
        }
      });
      let datos = {
        curso: cursoEdit,
        id: indexCurso
      }
      commit("EDIT_COURSE", datos);
    },
  },

  modules: {},
});
