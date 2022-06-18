<template>
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
          <h5 class="modal-title" id="exampleModalLabel">Agregar Curso</h5>
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
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "Agregar",
  props: {
    categoriaModal: {
      type: String,
      required: true,
    },
    cursoAEditar: {
      type: Object,
      required: true,
    },
    editMood: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      codigo: this.$store.getters.getCodigo,
      categoria: this.categoriaModal,
      nombre: "",
      estado: "",
      precio: "",
      duracion: "",
      descripcion: "",
      cupos: "",
      inscritos: "",
      img: "",
      curso: {},
    };
  },
  computed: {
    ...mapState(["courses"]),
    ...mapGetters(["getCodigo"]),
  },
  watch: {
    editMood() {
      if (!this.editMood) {
        this.codigo = this.getCodigo;
        this.categoria = this.categoriaModal;
        (this.nombre = ""),
          (this.estado = ""),
          (this.precio = ""),
          (this.duracion = ""),
          (this.descripcion = ""),
          (this.cupos = ""),
          (this.inscritos = ""),
          (this.img = "");
      }
    },
  },
  methods: {
    emitEditMood() {
      this.$emit("emitEdit", !this.editModal);
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
    editarCursoModal() {
      this.setearInfoModal();
      this.$store.dispatch("editCourse", this.curso);

      this.$store.dispatch("renderAdmin", this.categoriaModal);

      this.curso = {};
    },
    addCourseModal(categor) {
      this.setearInfoModal();

      this.$store.dispatch("addCourse", this.curso);
      this.$store.dispatch("renderAdmin", this.categoria);
    },
    editModal() {
      this.codigo = this.cursoAEditar.codigo;
      this.categoria = this.cursoAEditar.categoria;
      this.nombre = this.cursoAEditar.nombre;
      this.estado = this.cursoAEditar.estado;
      this.precio = this.cursoAEditar.precio;
      this.duracion = this.cursoAEditar.duracion;
      this.descripcion = this.cursoAEditar.descripcion;
      (this.cupos = this.cursoAEditar.cupos),
        (this.inscritos = this.cursoAEditar.inscritos);
      this.img = this.cursoAEditar.img;
    },
    confirmAdd() {
      if (window.confirm("¿Aceptas los cambios al curso?")) {
        this.addCourseModal(this.categoria);
      }
    },
  },
};
</script>


<style>
</style>