<template>
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
    this.getInstrumentos();
  }, 
  data() {
    return {
      instrumentosData: []
    };
  },
  methods: {
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
