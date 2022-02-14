<template>
  <div class="centerx">
    <vs-navbar v-model="activeItem" class="nabarx">
      <div slot="title">
        <vs-navbar-title>
          APLIKASI TODO SEDERHANA
        </vs-navbar-title>
      </div>
      <vs-navbar-item index="0">
        <a href="#">Home</a>
      </vs-navbar-item>
      <vs-navbar-item index="1">
        <a href="#">News</a>
      </vs-navbar-item>
      <vs-navbar-item index="2">
        <a href="#" @click="clicked">Login</a>
      </vs-navbar-item>
      <vs-input icon="search" v-model="search"/>
    </vs-navbar>
  </div>
</template>

<script>
export default {
  data: ()=>({
    colorx:'primary',
    indexActive: 0,
    activeItem: 0,
    search: ''
  }),
  props:{
      popupActivo2: Boolean
  },
  methods:{
      clicked() {
        this.$emit("clicked");
      }
  }
}
</script>

<style>
  .input-color{
    margin-bottom: 10px;
    position: relative;
    display: block;
  }

  .mr5{
      margin-right: 30px;
  }
  
  .myNavbar{
    color: rgb(255,255,255);
  }
 
</style>