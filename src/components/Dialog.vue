<template>
    <v-dialog xs10 sm8 md6 lg4 v-model="dialog">
       <v-btn class="red white--text" flat slot="activator">Add a schedule</v-btn>
       <v-card>
           <v-card-title class="red white--text"><h1>Add a achedule</h1></v-card-title>
       
        <v-card-text>
            <v-form ref="form">
                <v-text-field label="Title" v-model="title" :rules="textrules"></v-text-field>
                <v-textarea label="Project name" v-model="projectName" :rules="textrules"></v-textarea>
                <v-menu >
                    <v-text-field :value="dueDate" slot="activator"  label="Due date" :rules="daterules"></v-text-field>
                    <v-date-picker color="red" v-model="dueDate" ></v-date-picker>
                </v-menu>
                
                <v-btn flat  class="green white--text mt-2 " @click="addschedule" :loading="loading">Add</v-btn>
            </v-form>
        </v-card-text>
         </v-card >
    </v-dialog>
</template>
<script>
import fb_database from '@/Firebase'
export default {
    data(){
        return{
            currentDate:new Date,
            title:'',
            projectName:'',
            dueDate:null,
            loading:false,
            dialog:false,
            daterules:[
                d=> d.strlen == null ||'Please enter a valid date'
            ],
           textrules:[
                d=> d.length >= 4 ||'Please enter at list 5 characters'
            ]
        }
    },

    methods:
    {
        addschedule(){
            if(this.dueDate<this.currentDate){
                alert('date issue')
            }
            if(this.projectName!='' & this.projectName.length>=4 & this.title!='' & this.title.length>=4 &this.dueDate!='' & this.dueDate.length>=4  ){
              this.loading=true
             const schedules= {
                   projectName: this.projectName,
                   dueDate:this.dueDate,
                   status:'Overdue',
                   creator:'Mohamed Kabia'
                   
               }
                 fb_database.collection("scheduls").add(schedules).then(()=>{
                     this.dialog=false //close dialog after submiting
                     alert('added')
             })
            }//end if
             else{
                  alert('errors')
             }
            
        }//end addschedule method
    }
}
</script>
<style scoped>
  
</style>


