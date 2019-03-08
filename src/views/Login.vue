<template>
  <div class="login">
    <v-container>
      <v-layout column>
       <v-flex>
        <v-card color="rgba(0,0,0,0.5)">
           <v-card-title class="header">Login</v-card-title>
            <v-card-text>
              <v-form >
                <v-text-field label="Email" v-model="email" required></v-text-field>
                <v-text-field label="Password" v-model="Password" required></v-text-field>
                <v-card-actions>
                    <v-btn  flat class="teal white--text" @click="Login">Login</v-btn>
                    <div>Don't Have an account<v-btn flat class="teal white--text"  router to="/signup">Signup</v-btn></div>
                </v-card-actions>
                  
              
              </v-form>
            </v-card-text>
        </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
  data(){
    return{ 
    Email:'',
    Password:'',
    ConfirmPassword:''
  }},
  methods:{
      Login(){

      }
  
  },
  computed:{
  confirmpassword(){
    return this.Password!==this.ConfirmPassword? 'Password do not match':''
  }
  }

}
</script>
<style scoped>
  
</style>

