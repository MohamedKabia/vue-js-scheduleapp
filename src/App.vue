<template>
  <v-app>
     <navbar/>
    <v-content class="ml-2 mb-4">
     <router-view></router-view>
    </v-content>
  </v-app>
</template>
  
<script>
import navigation from '@/components/navigation.vue'
export default {
  name: 'App',
  components:{
      'navbar':navigation
    },
  data () {
    return {
      //
    }
  }
}
</script>
