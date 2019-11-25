<template>
   <div>
       <!-- Header -->
   <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand to="/home">API Place</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/home">Home</b-nav-item>
        <b-nav-item to="/place">Google Place API</b-nav-item>
        <b-nav-item href="#" >CV</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <!-- <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">TH</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot 
          <template v-slot:button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav> -->
    </b-collapse>
  </b-navbar>

  <!-- Main Content -->
  <b-container  class="w-100">
      <router-view :key="$route.name" class="pa-4" ></router-view>
  </b-container>
   
    <!-- Footer -->
  
        <div class="fluid-container footer">
    <p class="text-center">Copyright &copy 2018, A-Metal Studio. All Rights Reserved.</p>
  </div>
    
</div>
 
</template>

<script>
export default {
    name: 'App',
    data: () => ({
        color: "#191919",
        drawer: false,
        message:'App Page',
    }),
    computed: {
     
        
    },
    methods: {
     
    }
}
</script>

<style>
.fluid-container.footer{
  background: #17a2b8;
  
}
.fluid-container.footer > *:last-child {
    margin-bottom: 0px;
    color: #fff;
}
</style>