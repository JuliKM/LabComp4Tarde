<template>
<div>
  Buscar entre precios 
  <input type="number" v-model="valor1" placeholder="valor1">
  <input type="number" v-model="valor2" placeholder="valor2">

  <button type="button" @click="getInstrumentosEntreValores(
    valor1,
    valor2
  )" class="btn btn-primary mb-3">Buscar</button>
</div>
    <div class="card-group">
        <div
          v-for="instrumento in instrumentosData"
          :key="instrumento.id"
          style="margin:15px"
        >
          <instrumento-item v-bind:instrumentoParam="instrumento"></instrumento-item>
        </div>
    </div>
</template> 
<script>
// @ is an alias to /src
import InstrumentoItemVue from '@/components/InstrumentoItem.vue';

export default {
  name: "HomeView",
  components: {
    "instrumento-item": InstrumentoItemVue
  },
  mounted() {
    /*
      this.getInstrumentosEntreValores(this.valor1, this.valor2);
    }else{*/
      this.getInstrumentos();
    //}
  }, 
  data() {
    return {
      instrumentosData: []
    };
  },
  methods: {
    async getInstrumentosEntreValores(valor1, valor2) {
      console.log(valor1);
      const res = await fetch(
        "http://localhost:3001/api/instrumentos/precios/query?min="+valor1+"&max="+valor2
      );
      const resJson = await res.json();
      console.log(resJson);
      this.instrumentosData = resJson;
    },
    async getInstrumentos() {
      const res = await fetch(
        "http://localhost:3001/api/instrumentos/"
      );
      const resJson = await res.json();
      console.log(resJson);
      this.instrumentosData = resJson;
    }
  }
};
</script>
