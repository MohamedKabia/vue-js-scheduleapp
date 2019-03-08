<template>
  <div class="signup">
    <v-container>
      <v-layout column>
       <v-flex>
        <v-card color="rgba(0,0,0,0.5)">
           <v-card-title class="header">SIGNUP</v-card-title>
            <v-card-text>
              <v-form >
                <v-text-field label="Email" v-model="email" required></v-text-field>
                <v-text-field label="Password" v-model="Password" required></v-text-field>
                <v-text-field label="Confirm password" v-model="ConfirmPassword" :rules="[confirmpassword]" required></v-text-field>
                <v-card-actions>
                    <v-btn left flat class="teal white--text" @click="SignUp">SIGNUP</v-btn>
                </v-card-actions>
                  <div>Have an account<v-btn left flat class="teal white--text" router to="/login">Login</v-btn></div>
              
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
    SignUp(){

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

