<template>
  <div>
    <div
      class="modal fade"
      id="exampleModalLabel"
      tamodelex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >

      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 v-if="!editMood" class="modal-title" id="exampleModalLabel">
              Editar Curso
            </h5>
            <h5 v-else class="modal-title" id="exampleModalLabel">
              Agregar Curso
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Codigo:</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                v-model="codigo"
                readonly
              />
              <div id="emailHelp" class="form-text">
                Ingrese el codigo del curso
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label"
                >Categoria</label
              >
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
                readonly
                v-model="categoria"
              />
              <div id="emailHelp" class="form-text">
                Ingrese la Categoria del curso
              </div>
            </div>
            <div class="mb-3">
              <label class="form-label">Nombre:</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
                v-model="nombre"
              />
              <div id="emailHelp" class="form-text">
                Ingrese el nombre del curso
              </div>
            </div>
            <div class="mb-3">
              <label class="form-label">¿El curso esta activo?</label> <br />
              <input type="checkbox" id="checkbox" v-model="estado" /> activar
              curso
            </div>
            <div class="mb-3">
              <label class="form-label">Precio:</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
                v-model="precio"
              />
              <div id="emailHelp" class="form-text">
                Ingrese el precio del curso
              </div>
            </div>
            <div class="mb-3">
              <label class="form-label">Duracion:</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
                v-model="duracion"
              />
              <div id="emailHelp" class="form-text">
                Ingrese la duracion del curso
              </div>
            </div>
            <div class="mb-3">
              <label class="form-label">Descripcion:</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
                v-model="descripcion"
              />
              <div id="emailHelp" class="form-text">
                Ingrese una descripcion del curso
              </div>
            </div>
            <div class="mb-3">
              <label class="form-label">Cupos:</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
                v-model="cupos"
              />
              <div id="emailHelp" class="form-text">
                Ingrese la cantidad de cupos.
              </div>
            </div>
            <div class="mb-3">
              <label class="form-label">Inscritos:</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
                v-model="inscritos"
              />
              <div id="emailHelp" class="form-text">
                Ingrese la cantidad de inscritos.
              </div>
            </div>
            <div class="mb-3">
              <label class="form-label">URL de imagen:</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="https://..."
                v-model="img"
              />
              <div id="emailHelp" class="form-text">
                Ingrese la URL de la imagen
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              v-if="editMood"
              type="button"
              class="btn btn-success"
              data-bs-dismiss="modal"
              @click="confirmEdit"
            >
              Editar Curso
            </button>
            <button
            v-else
              type="button"
              class="btn btn-success"
              data-bs-dismiss="modal"
              @click="confirmAdd()"
            >
              Agregar Curso
            </button>
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>

    <div>
      <h1 class="text-center m-3">Cursos {{ $route.params.datos }}</h1>
      <div class="container mb-2 d-flex justify-content-between">
        <button class="btn btn-info" @click="volver()">volver</button>
        <button
          type="button"
          class="btn btn-success"
          data-bs-toggle="modal"
          data-bs-target="#exampleModalLabel"
          @click="agregarCurso()"
        >
          Agregar curso
        </button>
      </div>

      <div class="container-fluid">
        <table class="table table-primary table-striped">
          <thead class="table-success table-hover">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Categ</th>
              <th scope="col">Descripció</th>
              <th scope="col">Cu</th>
              <th scope="col">Durac</th>
              <th scope="col">Ins</th>
              <th scope="col"></th>
            </tr>
          </thead>

          <tbody v-for="(item, index) in getCategoryArray" :key="index">
            <tr>
              <th scope="row">{{ item.codigo }}</th>
              <td>{{ item.nombre }}</td>
              <td>{{ item.categoria }}</td>
              <td>{{ item.descripcion }}</td>
              <td>{{ item.cupos }}</td>
              <td>{{ item.duracion }}</td>
              <td>{{ item.inscritos }}</td>

              <td>
                <button
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModalLabel"
                  @click="editModal(item)"
                >
                  Editar
                </button>
                <button
                  type="button"
                  class="btn btn-danger"
                  @click="confirmDelete(item.codigo)"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import Agregar from "@/components/Agregar.vue";
export default {
  name: "Admin",
  data() {
    return {
      editMood: null,
      codigo: this.$store.getters.getCodigo,
      categoria: this.$route.params.datos,
      nombre: "",
      estado: "",
      precio: "",
      duracion: "",
      descripcion: "",
      cupos: "",
      inscritos: "",
      img: "",
      curso: {},
      contador: 0,
    };
  },
  components: {
    Agregar,
  },
  computed: {
    ...mapState(["categoryArray", "courses", "course"]),
    ...mapGetters(["getCategoryArray", "getCodigo"]),
  },
  methods: {
    agregarCurso() {
      this.editMood = false
      this.codigo = this.getCodigo;
      this.categoria = this.$route.params.datos;
      this.nombre = "";
      this.estado = "";
      this.precio = "";
      this.duracion = "";
      this.descripcion = "";
      this.cupos = "";
      this.inscritos = "";
      this.img = "";
    },
    editModal(item) {
      
      this.editMood = true
      this.curso = item;
      this.codigo = item.codigo;
      this.categoria = item.categoria;
      this.nombre = item.nombre;
      this.estado = item.estado;
      this.precio = item.precio;
      this.duracion = item.duracion;
      this.descripcion = item.descripcion;
      this.cupos = item.cupos;
      this.inscritos = item.inscritos;
      this.img = item.img;
    },
    setearInfoModal() {
      this.curso = {
        codigo: this.codigo,
        categoria: this.categoria,
        nombre: this.nombre,
        estado: this.estado,
        precio: this.precio,
        duracion: this.duracion,
        descripcion: this.descripcion,
        cupos: this.cupos,
        inscritos: this.inscritos,
        img: this.img,
      };
    },
    confirmEdit() {
      if (window.confirm("¿Agregar curso?")) {
        this.editarCursoModal();
        alert("Curso editado exitosamente.")
      }
    },
    confirmAdd() {
      if (window.confirm("¿Aceptas los cambios al curso?")) {
        this.addCourseModal(this.categoria);
        alert("Curso agregado exitosamente.")
      }
    },
    addCourseModal(categor) {
      this.setearInfoModal();
      this.$store.dispatch("addCourse", this.curso);
      this.$store.dispatch("renderAdmin", this.categoria);
      
    },
    editarCursoModal() {
      this.setearInfoModal();
      this.$store.dispatch("editCourse", this.curso);
      
      this.$store.dispatch("renderAdmin", this.categoria);
      
      this.curso = {};
    },
    volver() {
      this.$router.go(-1);
    },
    confirmDelete(codigo){
      
      if (window.confirm("¿Deseas borrar el curso?")) {
        
        this.deleteCourseAdmin(codigo)
        alert("Curso borrado exitosamente.")
      }
    },
    deleteCourseAdmin(codigo) {
      this.$store.dispatch("deleteCourse", codigo);
      this.$store.dispatch("renderAdmin", this.$route.params.datos);
    },
  },
  created() {},
};
</script>

<style>
</style>
