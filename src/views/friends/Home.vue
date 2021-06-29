<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <Slider />

    <hr class="my-3" />
    <router-link class="btn btn-warning" to="/createfriends"
      >Add Friends</router-link
    >


  <Cardfriends :friends="friends"/>
    
    <table class="table table-success table-stripe">
      <thead>
        <tr>
          <th scope="col">Nama</th>
          <th scope="col">No Telp</th>
          <th scope="col">Alamat</th>
          <th scope="col">Aksi</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(friend, index) in friends" :key="index">
          <td>{{ friend.nama }}</td>
          <td>{{ friend.no_telp }}</td>
          <td>{{ friend.alamat }}</td>
          <td>
            <router-link class="btn btn-light" :to="{name:'Editfriends', params:{id:friend.id}}"
              >Edit</router-link
            >
            <button @click.prevent="friendDelete(friend.id)" class="btn btn-secondary">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
// @ is an alias to /src
import Slider from "@/components/Slider.vue";
import Cardfriends from "@/components/Cardfriends.vue";
import { onMounted, ref } from "vue";

export default {
  name: "Home",
  components: {
    Slider,
    Cardfriends,
  },

  setup() {
    let friends = ref([])

    onMounted(() => {
      axios
        .get('http://127.0.0.1:8000/api/friends')
        .then(response => {
          friends.value = response.data.data
        })
        .catch(error => {
          console.log(error)
        })
    })

    function friendDelete(id){
      axios.delete(`http://127.0.0.1:8000/api/friends/${id}`)
      .then(()=>{
        let z = this.friend.map(friends => friends.id).indexOf(id);
        this.friends.splice(z, 1)
      }).catch(error => {
        console.log(error)
      })
    }

    return {
      friends,
      friendDelete
    }
  }
};
</script>
