<template>
  <b-container>
    <h1>Find X,Y,Z Value</h1>
    <b-row>
      <b-form-input v-model="text" placeholder="Enter your name"></b-form-input>
    </b-row>
    {{message}}
      <b-button variant="outline-primary" @click="clickPlace">Button</b-button>
  </b-container>

</template>

<script>
import axios from "axios";

let api = `${'http://localhost:3000/'}${'scg/cal'}`

export default {
    name: 'Home',
    data: () => ({
       message:"Home Message.",
      
         drawerItems: [
            // TODO Could be directly set from the router with metas to filter
            {
                name: 'Home',
                icon: 'mdi-home',
                route: 'home',
            },
            {
                name: 'Place',
                icon: 'mdi-format-textbox',
                route: 'place',
            }
        ] 
    }),
    computed: {    
      
    },
    methods: {
      clickPlace() {
        console.log('api : ',api)
        let param = { numData : [0,5,9,15,23,0,0]}
          axios.post(`${api}`,param ).then(res => {
          {
            console.log("returnData : ", res);

           

            }

           
        }).catch(error => {
           // this.openDialog(this.const_dialog_error, 'Error', error, '');
        });
      
      },
    }
}
</script>

<style>

</style>