<template>
  <b-container>
    <b-row>
      <h3 class="mx-auto my-3">Find value X, Y, Z from X, 5, 9, 15, 23, Y, Z.</h3>
    </b-row>
    <b-row class="my-3">
      <b-table striped hover :items="items"></b-table>
    </b-row>
    <b-row sm="6">
       <b-button class="mx-auto" variant="outline-primary" @click=" clickCalculate">calculate</b-button>
    </b-row>
  </b-container>
</template>

<script>
import axios from "axios";

let api = `${'http://localhost:3000/'}${'scg/cal'}`

export default {
    name: 'Home',
    data: () => ({
       items:[ 
          { Variable: 'X',  Value: 0 },
          { Variable: 'Y',  Value: 0 },
          { Variable: 'Z',  Value: 0 },
       ],
       inputText : '',
      
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
      clickCalculate() {
        let param = { numData : ['X',5,9,15,23,'Y','Z']}
          axios.post(`${api}`,param ).then(res => {
          
          let list = res.data.list
          this.items[0].Value = list[param.numData.indexOf('X')]
          this.items[1].Value = list[param.numData.indexOf('Y')]
          this.items[2].Value = list[param.numData.indexOf('Z')]
  
        }).catch(error => {
           console.log('error : ',error)
        });
      
      },
    }
}
</script>

<style>

</style>