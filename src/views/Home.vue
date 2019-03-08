<template>
<div class="home">
  <h1 class="subheading black--text">All Schedules</h1>
   <v-container class="my-5 gray black--text">
       <v-layout row class="mb-2">
            <v-tooltip top>
              <v-btn small flat class="red" @click="sortby('status')" slot="activator">
                <v-icon small>folder</v-icon>
                <span>Sort by status</span>
              </v-btn>
              <span>Sort by ststus</span>
            </v-tooltip>
            
            <v-tooltip top>
              <v-btn small flat class="red" @click="sortby('creator')" slot="activator">
                <v-icon small>person</v-icon>
                <span>Sort by creator</span>
         
              </v-btn>
              <span>Sort by creator </span>
            </v-tooltip>
         </v-layout>

              <v-card class="mb-1" flat v-for="schedule in schedules" :key="schedule.projectName">
                <v-layout row wrap :class="`pa-2 project ${schedule.status}`">

                  <v-flex xs12 sm6 md3 class="pa-3">
                      <div class="caption ">Project Name</div>
                      <div>{{schedule.projectName}}</div>
                  </v-flex>

                   <v-flex  xs12 sm6 md3  class="pa-3">
                      <div class="caption ">Creator</div>
                      <div>{{schedule.creator}}</div>
                  </v-flex>

                  <v-flex  xs12 sm6 md3  class="pa-3">
                      <div class="caption ">Due date</div>
                      <div>{{schedule.dueDate}}}</div>
                  </v-flex>

                  <v-flex  xs12 sm6 md3 class="pa-3">
                     <div class="right">
                      <v-chip :class="`gray--text ${schedule.status}`">{{schedule.status}}</v-chip>
                      </div>
                  </v-flex>
                </v-layout>
              </v-card>
           </v-container>
    </div>
</template>

<script>
    import fb_database from '@/Firebase';
  export default {
    data(){
      return{
        schedules:[
          //data from firebase goes here
          ]
      }
    },
    methods:{
      sortby(data){
        this.schedules.sort((x,y)=> x[data]< y[data]? -1:1)
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
<style scope>
  .Progress{
    border-right:3px solid yellow;
  }
   .Overdue{
    border-right:3px solid red;
  }
 .Compleated{
    border-right:3px solid green;
  }

   .v-chip.Progress{
      background:yelloW;
     
   }
   .v-chip.Compleated{
        background:green;
   }
    .v-chip.Overdue{
      background:red;
   }
  
</style>
