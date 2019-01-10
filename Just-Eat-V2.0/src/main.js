// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
import Restaurants from './components/Restaurants'
import About from './components/About'
import Add from './components/Add'
import Edit from './components/Edit'
import Details from './components/Details'
import Menu from './components/Menu'


Vue.use(vueResource)
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/', component: Restaurants},
    {path: '/about', component: About},
    {path: '/add', component: Add},
    {path: '/edit/:id', component: Edit},
    {path: '/restaurants/:id', component: Details},
    {path: '/restaurants/:id/menu', component: Menu}
  ]
})

/* eslint-disable no-new */
new Vue({
  router,
  template: `
    <!--------------------------Nav entête--------------------------------------------------------------------------------------------->
    <div id="app">


    <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item">
        <router-link class="nav-link" to="/">Restaurants</router-link>
      </a>
  
    </div>
  
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item">
            <router-link class="nav-link" to="/add">Ajouter un restaurant</router-link>
        </a>
  
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            Plus
          </a>
  
          <div class="navbar-dropdown">
            <a class="navbar-item">
                <router-link class="nav-link" style="color: #555" to="/about">
                <span data-feather="file"></span>
                A propos
                </router-link>                
            </a>
            <a class="navbar-item">
                <router-link class="nav-link active" style="color: #555" to="/">
                    <span data-feather="home"></span>
                    Accueil <span class="sr-only">(current)</span>
                </router-link>            
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
          <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">  
          <router-view></router-view>
          </div>
        </main>
    </div>
  `
}).$mount('#app')
