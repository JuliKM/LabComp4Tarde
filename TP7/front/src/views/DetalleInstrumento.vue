<template>
  <div>
    <div class="container">
      <div class="row align-items-start">
        <div class="col">
          <img style="max-height:400px" :src="urlImage"/></div>
        <div class="col">
          <div class="row align-items-start">
            <div class="col"><h1>Cantidad vendida: {{ instrumentoEncontrado.cantidadVendida }}</h1></div>
          </div>
          <div class="row align-items-start">
            <div class="col"><h1>{{ instrumentoEncontrado.nombre }}</h1></div>
          </div>
          <div class="row align-items-start">
            <div class="col"><h2>$ {{ instrumentoEncontrado.precio }}</h2></div>
          </div>
          <div class="row align-items-start">
            <div class="col"><h2>{{ instrumentoEncontrado.marca }}</h2></div>
          </div>
          <div class="row align-items-start">
            <div class="col"><h2>{{ instrumentoEncontrado.modelo }}</h2></div>
          </div>
          <div class="row align-items-start">
            <div class="col"><h2>{{ instrumentoEncontrado.costoEnvio }}</h2></div>
          </div>
          <div class="row align-items-start">
            <div class="col"><h2>{{ instrumentoEncontrado.descripcion }}</h2></div>
          </div>
          <div class="row align-items-start">
            <div class="col"><a href="/" class="btn btn-success">VOLVER</a></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetalleInstrumento",
  components: {},
  mounted() {
    this.getInstrumentoXId();
  },
  updated(){
    if(String(this.instrumentoEncontrado.imagen).indexOf("http") >= 0){
      this.urlImage = this.instrumentoEncontrado.imagen;
    }else{
      this.urlImage = '/assets/images/' + this.instrumentoEncontrado.imagen;
    }
  },
  data() {
    return {
        urlImage: String,
        instrumentoEncontrado: []
    };
  },
  methods: {
    async getInstrumentoXId() {
      const parametroId = this.$route.params.id;
      const res = await fetch(
        "http://localhost:3001/api/instrumentos/" + parametroId
      );
      const resJson = await res.json();
      this.instrumentoEncontrado = resJson;
      console.log(this.instrumentoEncontrado);
    }
  }
};
</script>
