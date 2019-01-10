<!----------------------------------------html------------------------------------------------------------------------------------------------------->
<template>
  <div class="add container">
    <!----------------------------------------Formulaire d'ajout restaurant-------------------------------------------->
    <Alert v-if="alert" v-bind:message="alert"></Alert>
    <router-link class="btn" style="border-color: #555; color: #555" to="/">Retour</router-link>
    <h1 class="title">Ajouter un restaurant</h1>
    <form v-on:submit="ajouterRestaurant">
      <br>
      <div class="">
        <div class="form-row">
          <div class="form-group ">
            <label>Classe </label>
            <input type="text" class="input form-control" style="width: 60px" v-model="grades.grade" placeholder="A - Z">
          </div>
          <div class="form-group ">
            <label>Nom </label>
            <input type="text" class="input form-control" style="width: 500px" v-model="nom" placeholder="Nom du restaurant" name="name">
          </div>
          <div class="form-group ">
            <label>Cuisine </label>
            <input type="text" class="input form-control" style="width: 500px" v-model="cuisine" placeholder="Type de cuisine" name="cuisine">
          </div>
        </div>
        <br>
        <hr>
        <div class="form-row">
          <div class="form-group ">
            <label>N° </label>
            <input type="text" style="width: 60px" class="input form-control" v-model="address.building" placeholder="123">
          </div>
          <div class="form-group ">
            <label for="inputAddress">Address</label>
            <input type="text" style="width: 1070px" class="input form-control" v-model="address.street" placeholder="Avenue, Boulevard, Rue...">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group ">
            <label>Ville</label>
            <input type="text" class="input form-control" v-model="borough" placeholder="Ville">
          </div>
          <div class="form-group ">
            <label>Code postal</label>
            <input type="text" class="input form-control" v-model="address.zipcode" placeholder="Code postal">
          </div>
        </div>
        <button  type="submit"   class="button">Ajouter</button>
      </div>
    </form>
  </div>
</template>

<!----------------------------------------Script-------------------------------------------------------------------------------------------------------->
<script>
  import Alert from './Alert'
  export default {
    name: 'add',
    data () {
      return {
        r: {
      },
        nom:'',
        cuisine: '',
        address:{
          building: '',
          street: '',
          zipcode: ''
        },
        grades: {
          date: '',
          grade: '',
          score: ''
        },
        borough: '',
        alert: ''
      }
    },
    methods: {
      // ----------------------------------Ajout d'un restaurant--------------------------------------------------
      ajouterRestaurant(event) {
        if(!this.nom || !this.cuisine){
          this.alert = "Veuillez remplir les champs obligatoires";
        } else {
          let newRestaurant = {
            nom: '',
            cuisine: '',
            grades: {
              date: '',
              grade: '',
              score: ''
            },
            address: {
              building: '',
              street: '',
              zipcode: ''
            },
            borough: ''
          }
          newRestaurant.nom =this.nom;
          newRestaurant.cuisine =this.cuisine;
          newRestaurant.grades.grade = this.grades.grade;
          newRestaurant.address.building = this.address.building;
          newRestaurant.address.street = this.address.street;
          newRestaurant.address.zipcode = this.address.zipcode;
          newRestaurant.borough = this.borough;

          this.$http.post('http://localhost:8080/api/restaurants', newRestaurant)
            .then(function (response) {
              this.$router.push({path: '/', query: { alert: 'Restaurant ajouté'}});
            });
          event.preventDefault();
        }
        event.preventDefault();
      }
    },
    components: {
      Alert
    }
  }
</script>

<!----------------------------------------Style--------------------------------------------------------------------------------------------------------->
<style scoped>
.form-group  {
  padding : 5px !important;
  marging: 5px;
}
</style>
