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
    <b-modal ref="my-modal" hide-footer title="Error Message">
      <div class="d-block text-center">
        <h3>{{errorMessage}}</h3>
      </div>
      <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Close</b-button>
    </b-modal>
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
              if(res.status === 200 && res.data.status === 'OK') {
                res.data.results.find(item => {
                    this.items.push({Name:item.name, Address: item.formatted_address, Rating: item.rating})
                })
              }else{
                this.errorMessage = res.data.error_message
                this.showModal()
              }
          }).catch(error => {
            console.log('error : ',error)
          });
   },
  data(){
    return {
      items: [],
      errorMessage: '',
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
            variant: 'danger'
          }
        ]
    }
  },
methods: {
       showModal() {
        this.$refs['my-modal'].show()
      },
      hideModal() {
        this.$refs['my-modal'].hide()
      },
    }
}
</script>

<style>
</style>