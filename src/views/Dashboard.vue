<template>
  <div class="warna">
    <vs-button class="logout" @click="logout">Log Out</vs-button>
    <vs-popup classContent="popup-example"  title="Input Data" :active.sync="popupActivo3">
      <form @submit.prevent="submitAdd">
      <vs-col class="password" vs-type="flex" vs-justify="left" vs-align="flex-start" vs-lg="2" vs-sm="12" vs-xs="12">
        Tugas :    
      </vs-col>

      <vs-col class="inputPassword" vs-type="flex" vs-justify="left" vs-align="flex-start" vs-lg="10" vs-sm="12" vs-xs="12">
          <vs-input class="inputx" placeholder="Tugas" v-model="tugas"/>
      </vs-col>

      <vs-col class="password" vs-type="flex" vs-justify="left" vs-align="flex-start" vs-lg="2" vs-sm="12" vs-xs="12">
        Tanggal :    
      </vs-col>

      <vs-col class="inputPassword" vs-type="flex" vs-justify="left" vs-align="flex-start" vs-lg="10" vs-sm="12" vs-xs="12">
          <vs-input class="inputx" placeholder="Tanggal" v-model="tanggal"/>
      </vs-col>

      <vs-col class="Login" vs-type="flex" vs-justify="left" vs-align="flex-start" vs-lg="12" vs-sm="12" vs-xs="12">
          <vs-button color="primary" type="filled" button="submit">Submit</vs-button>
      </vs-col>
      </form>
    </vs-popup>
    <vs-table :data="todo" class="mar">
      <template slot="header">
        <h3 class="header">
          TO DO LIST
        </h3>
        <vs-button @click="tambahdata">Tambah Data</vs-button>
      </template>

      <template slot="thead">
        <vs-th class="tabel nomor">
          Nomor
        </vs-th>
        <vs-th class="tabel">
          Tugas
        </vs-th>
        <vs-th class="tabel">
          Tanggal
        </vs-th>
        <vs-th class="tabel">
          Cek List
        </vs-th>
        <vs-th class="tabel">
          Action
        </vs-th>
      </template>

      <template slot-scope="{data}">
        <vs-tr :key="indextr" v-for="(tr, indextr) in data">
          <vs-td :data="data[indextr].nomor" class="tabel">
            {{data[indextr].nomor}}
          </vs-td>

          <vs-td :data="data[indextr].tugas" class="tabel">
            {{data[indextr].tugas}}
          </vs-td>

          <vs-td :data="data[indextr].tanggal" class="tabel">
            {{data[indextr].tanggal}}
          </vs-td>

          <vs-td :data="data[indextr].ceklist" class="tabel">
            {{data[indextr].ceklist}}
          </vs-td>

          <vs-td :data="data[indextr].nomor" class="tabel">
            <vs-button color="warning" @click="editTodoItem(data[indextr].nomor)">Edit</vs-button>
            <vs-button color="danger" @click="deleteTodoItem(data[indextr].nomor)">Delete</vs-button>
          </vs-td>
        </vs-tr>
      </template>
    </vs-table>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data:()=>({
    nomor:'',
    tugas:'',
    tanggal:'',
    ceklist:'',
    editTodo:{
      nomor:'',
      tugas:'',
      tanggal:'',
      ceklist:'',
    },
    popupActivo3: false,
    todo:[],
    edit: false
  }),
  watch: {
    todo: {
      handler() {
        localStorage.setItem('todos', JSON.stringify(this.todo))
      },
      deep: true
    },
    editTodo: {
      handler() {
        this.tugas = this.editTodo.tugas;
        this.tanggal = this.editTodo.tanggal;
        this.nomor = this.editTodo.nomor;
        this.edit = true;
      },
      deep: true
    },
    tugas:{
      handler(){
         if(this.tugas === '' || this.tanggal === ''){
            this.edit = false;
         }
      }
    }
  },
  mounted() {
    if (localStorage.getItem("todos")){
      this.todo = JSON.parse(localStorage.getItem("todos"))
    }
  },
  methods:{
    logout(){
       localStorage.removeItem('token');
       this.$router.push('/');
    },
    tambahdata(){
      this.popupActivo3 = true;
    },
    submitAdd(){ 
       if(this.edit === false){

                    const newTodo = {
                        nomor: Math.floor(Math.random() * 100),
                        tugas: this.tugas,
                        tanggal: this.tanggal,
                        ceklist: "belum"
                    }
                                  
                    this.todo = [...this.todo, newTodo]

                    this.tugas = '';
                    this.tanggal = '';
      }else{ 
                    const todoItem = {
                        nomor: this.nomor,
                        tugas: this.tugas,
                        tanggal: this.tanggal,
                        ceklist: this.ceklist
                    };

                    console.log(todoItem);

                    let objIndex = this.todo.findIndex(obj => obj.nomor === todoItem.nomor);
                    console.log(objIndex);

                    this.todo[objIndex].tugas = todoItem.tugas;
                    this.todo[objIndex].tanggal = todoItem.tanggal;
                    
                    this.tugas = '';
                    this.tanggal = '';
                    this.ceklist = 'belum';
                    this.edit = false;
                }
    },
    deleteTodoItem(nomor){
       this.todo = this.todo.filter(todo => todo.nomor !== nomor);
    },
    editTodoItem(nomor){
      var objIndex = this.todo.findIndex(obj=> obj.nomor === nomor);
      this.editTodo.tugas = this.todo[objIndex].tugas;
      this.editTodo.tanggal = this.todo[objIndex].tanggal;
      this.editTodo.nomor = nomor;
      this.tambahdata();
    },
  }
}
</script>
<style scoped>
.header{
  margin: 10px 20px;
}
.tabel{
  border: 1px solid grey;
}

.mar{
  margin:auto;
  width: 90%;
}
.nomor{
  width: 50px;
}

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