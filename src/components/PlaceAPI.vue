<template>
  <b-container>
    </br>
    <b-row>
      <h1>List Restaurants In Bangsue </h1>
    </b-row>
    </br>
    <b-row>
      <b-table striped hover :items="items" :fields="fields"></b-table>
    </b-row>
  </b-container>
</template>

<script>
import axios from "axios";
let api = `${'http://localhost:3000/'}${'scg/getMap'}`
export default {
  name: 'PlaceAPI',
  mounted() { 
       //init when enter to this page
       axios.post(`${api}`, '').then(res => {
              console.log("returnData : ", res);
              if(res.status === 200) {
                // this.items = res.data.results
                res.data.results.find(item => {
                    this.items.push({Name:item.name, Address: item.formatted_address, Rating: item.rating})
                })
              }else{
                console.log('error')
              }
          }).catch(error => {
           // this.openDialog(this.const_dialog_error, 'Error', error, '');
          });
   },
  data(){
    return {
      email: 'email',
      web: 'web',
      items: [],
      fields: [
          {
            key: 'Name',
            sortable: false
          },
          {
            key: 'Address',
            sortable: false
          },
          {
            key: 'Rating',
            sortable: true,
            // Variant applies to the whole column, including the header and footer
            variant: 'danger'
          }
        ]
    }
  },
methods: {
      
    }
}
</script>

<style>
</style>