<template>
  <div class="sheduls">
      <h1 class="subheading gray--text">Community</h1>
       <v-container class="my-5 gray black--text">
          <v-layout row wrap>
            <v-flex xs12 sm6 md4 lg3 v-for="person in members" :key="person.name">
              <v-card flat class="text-xs-center ma-3 gray--text">
                <v-responsive>
                 <v-avatar size="100" class="gray lighten-to-2"><img :src="person.image"></v-avatar>
                </v-responsive>
                <v-card-text>
                  <div class="">{{person.name}}</div>
                   <div class="">{{person.role}}</div>
                </v-card-text>
                <v-card-actions>
                  
                  <v-btn flat @click="message">
                     <v-icon small>message</v-icon>
                     <span>message</span>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
       </v-container>
 </div>
</template>

<script>
    import fb_database from '@/Firebase';  
  export default {
    components: {

},
  data(){
      return{
        members:[
          {name:'MOHAMED',role:'Web developer',image:'/bunni.jpeg'},
          {name:'MEDVIK',role:' Designer',image:'/bird2.jpeg'},
          {name:'MUSTAFA',role:'Electronic engineer',image:'/birds1.jpeg'},
          {name:'JOHN',role:'Communication analist',image:'/bunni.jpeg'},
          {name:'ABDUL',role:'Photographer',image:'/birds1.jpeg'}
        ]
      }
    }
  }
</script>
