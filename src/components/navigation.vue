<template>
    <nav><v-toolbar class="red" app>
        <v-toolbar-side-icon @click="drawer=!drawer"></v-toolbar-side-icon>
        <v-toolbar-title class="white--text" >C-Scheduler</v-toolbar-title>
        <v-spacer></v-spacer>

        <v-btn flat class="white black--text" else="logdis" @click="!logdis" router to="/login"><span>login</span><v-icon right>exit_to_app</v-icon></v-btn>
        </v-toolbar> 
         <v-navigation-drawer app v-model="drawer">
             <v-layout column>
                 <v-flex>
                     <Dialog-app/> <!--dialog component-->
                 </v-flex>
             </v-layout>
             <v-list>
                 <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
                     <v-list-tile-action>
                            <v-icon class="white" left>{{link.icon}}</v-icon>
                     </v-list-tile-action>

                     <v-list-tile-content>
                         <v-list-tile-title>{{link.text}}</v-list-tile-title>
                     </v-list-tile-content>
                 </v-list-tile>
             </v-list>
         </v-navigation-drawer>
        </nav>
    
</template>
<script>
   import Dialog  from './Dialog.vue';
export default {
    components:{'Dialog-app':Dialog},
               
   data(){
         return{
             drawer:false,
             links:[
                 {icon:'dashboard', text:'Dashboard', route:'/'},
                 {icon:'folder', text:'My Schedules', route:'/sheduls'},
                 {icon:'person', text:'Community', route:'/invitees'}
             ]
         }
    },
     

}
</script>
