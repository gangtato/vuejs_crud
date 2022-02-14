<template lang="html">
  <div class="centerx">
    
    <vs-popup classContent="popup-example"  title="Login" :active.sync="popupActivo2">
    <form @submit.prevent="login"> 
    <vs-col class="username" vs-type="flex" vs-justify="left" vs-align="flex-start" vs-lg="2" vs-sm="12" vs-xs="12" >
    Username :
    </vs-col>

    <vs-col class="inputUsername" vs-type="flex" vs-justify="left" vs-align="flex-start" vs-lg="10" vs-sm="12" vs-xs="12">
        <vs-input class="inputx" placeholder="Username" v-model="username"/>
    </vs-col>

    <vs-col class="password" vs-type="flex" vs-justify="left" vs-align="flex-start" vs-lg="2" vs-sm="12" vs-xs="12">
    Password :    
    </vs-col>

    <vs-col class="inputPassword" vs-type="flex" vs-justify="left" vs-align="flex-start" vs-lg="10" vs-sm="12" vs-xs="12">
        <vs-input class="inputx" placeholder="Password" v-model="password" type="password"/>
    </vs-col>

    <vs-col class="Login" vs-type="flex" vs-justify="left" vs-align="flex-start" vs-lg="12" vs-sm="12" vs-xs="12">
        <vs-button color="primary" type="filled" button="submit">Login</vs-button>
    </vs-col>
    </form>
    </vs-popup>
    <Navbar @clicked="testing"/>
  </div>
</template>

<script>
import Navbar from "./navbar.vue";
export default {
    name: "Header",
    components:{
       Navbar
    },
    data(){
        return {
        username:'',
        password:'',
        select1:3,
        options1:[
            {text:'IT',value:0},
            {text:'Blade Runner',value:2},
            {text:'Thor Ragnarok',value:3},
        ],
        value1:'',
        value2:'',
        popupActivo2:false,
        popupActivo3:false,
        correct_username:"admin",
        correct_password:"Admin@321"
        }
    },
    methods:{
        testing(){
           this.popupActivo2 = true; 
        },
        login(){
          if(this.username === this.correct_username && this.password === this.correct_password){
            localStorage.setItem('token',"abcdefghijklmnopqrstuvwxyz");   
            this.$router.push('dashboard');
            this.$vs.notify({
              position: 'top-right',
              title:'Sukses Login',
              text:'Berhasil Login',
              color:'success'
            })
          }else{
            this.$vs.notify({
              position: 'top-right',
              title:'Gagal Login',
              text:'Username atau Password anda invalid',
              color:'danger'
            })
          }
          
        }
    }
}
</script>

<style scoped>
  .popup-example
  .vs-input{
    float: left;
    width: 100%;
    margin: 10px;
    margin-top: 5px;
  } 
  .con-select{
    margin-left: 10px;
    width: 100%;
    margin-bottom: 10px;
  }   
</style>