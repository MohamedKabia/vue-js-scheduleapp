<template>
 <div class="sheduls">
      <h1 class="subheading gray--text">My tasks</h1>
       <v-container class="my-5 gray black--text">
        <v-expansion-panel>
          <v-expansion-panel-content v-for="myproject in myschedules" :key="myproject.creator">
              <div slot="header" class="font-weight-bold">{{ myproject.projectName }}</div>
              <v-card > 
                <v-card-text>
                  <div class="bgffg">  {{ myproject.dueDate }}</div>
                  <div>Status:{{ myproject.status }}</div>
                  </v-card-text>
              </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
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
        schedules:[
          ]
      }
    },
    computed:{
         myschedules(){
                   return this.schedules.filter(myproject=>{
                     return myproject.creator==='Mohamed Kabia'
                   })
         }
      },
       created(){
        fb_database.collection("scheduls").onSnapshot(response=>{
          const changes =response.docChanges();

          changes.forEach(change => {
              if(change.type==='added'){
                this.schedules.push({
                  ...change.doc.data(),
                  id:change.doc.id
                })
              }
          });
          })
    }
    }
  
</script>
