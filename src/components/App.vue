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
        <b-nav-item href="/profile" >CV</b-nav-item>
      </b-navbar-nav>


    </b-collapse>
  </b-navbar>

  <!-- Main Content -->
  <b-container  class="content">
      <router-view :key="$route.name" class="pa-4" ></router-view>
  </b-container>
   
    <!-- Footer -->
    <div class="fluid-container footer">
    <p class="text-center">Copyright 	&amp; 2019, A-Metal Studio. All Rights Reserved.</p>
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
     
    },
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
.content {
  position: relative;;
  min-height: 600px;
}
html, body {
  height: 100%;
  margin: 0;
}
</style>