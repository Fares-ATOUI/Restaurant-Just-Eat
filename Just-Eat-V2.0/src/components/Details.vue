<!----------------------------------------html--------------------------------------------------------------------------------------------------------->
<template>
  <div class="details container">
    <!----------------------------------------Affichage détails restaurant--------------------------------------------->
    <router-link class="btn" style="border-color: #555; color: #555" to="/">Retour</router-link>
    <h1 class="title">
      {{name}} <br/>
      <span class="pull-right">
        <button class="button">
                <router-link class="btn btn-primary" v-bind:to="'/restaurants/'+_id+'/menu'">Show Menu</router-link>
        </button>
        <button class="button">
        <router-link class="btn" v-bind:to="'/edit/'+_id">Modifier</router-link>
        </button>
        <button class="button">
        <span class="btn" v-on:click="supprimerRestaurant(r._id)">Supprimer</span>
        </button>
      </span>
    </h1>
    <ul class="list-group">
      <li class="list-group-item"><span class="glyphicon glyphicon-qrcode" aria-hidden="true"></span> <b>ID:</b> {{_id}}</li>
      <li class="list-group-item"><span class="glyphicon glyphicon-star-empty" aria-hidden="true"></span> <b>Classe:</b> {{grades.grade}}</li>
      <li class="list-group-item"><span class="glyphicon glyphicon-glass" aria-hidden="true"></span> <b>Cuisine:</b> {{cuisine}}</li>
    </ul>

    <hr>

    <ul class="list-group">
      <li class="list-group-item"><span class="glyphicon glyphicon-home" aria-hidden="true"></span>
        <b>Adresse:</b> {{address.building}} {{address.street}}
        {{address.zipcode}}, {{borough}}
      </li>
    </ul>

    <h3>  <span class="glyphicon glyphicon-star"></span> Grades </h3>
    <table class="table">
    <th>grade</th> <th>score</th> <th>date</th>
      <tr v-for="g in grades">
                    <td>{{g.grade}}</td>
                    <td>{{g.score}}</td>
                    <td>{{g.date}}</td>
      </tr>
    </table>

    <h3>  <span class="glyphicon glyphicon-database"></span> Database  </h3>
    <pre>
    {{r}}
    </pre>
  </div>
</template>

<!----------------------------------------Script--------------------------------------------------------------------------------------------------------->
<script>
  export default {
    name: 'Details',
    data () {
      return {
        r: {

        },
        _id: 'Indéfini',
        name: 'Indéfini',
        cuisine: 'Indéfini',
        grades: {
          date: 'Indéfini',
          grade: 'Indéfini',
          score: ''
        },
        address: {
          building: 'Indéfini',
          street: '',
          zipcode: ''
        },
        borough: ''
      }
    },
    methods: {
      // ----------------------------------Récupération d'un restaurants avec son id depuis le serveur------------------
      fetchRestaurant(id) {
        this.$http.get('http://localhost:8080/api/restaurants/'+id)
          .then(function(response) {
            this.r = JSON.parse(JSON.stringify(response.body.restaurant));
            console.log(this.r);
            this.data =this.r;
            this.name = this.r.name;
            this._id = this.r._id;
            this.cuisine = this.r.cuisine;
            this.grades = this.r.grades;
            this.address.building = this.r.address.building;
            this.address.street = this.r.address.street;
            this.address.zipcode = this.r.address.zipcode;
            this.address.coord = this.r.address.coord;
            this.borough = this.r.borough;
          });
        },
      // ----------------------------------Suppression d'un restaurant--------------------------------------------------
      supprimerRestaurant(id) {
        this.$http.delete('http://localhost:8080/api/restaurants/'+id)
          .then(function (response) {
            this.$router.push({path: '/', query: {alert: 'Restaurant supprimé'}})
          })
      }
    },
    created: function () {
      this.fetchRestaurant(this.$route.params.id);
    }
  }
</script>

<!----------------------------------------Style--------------------------------------------------------------------------------------------------------->
<style scoped>
</style>
