<template>
    <Header />
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  
  // Components
  import Header from '../components/Header.vue';
  
  export default defineComponent({
    name: 'HomeView',
  
    components: {
      Header,
    },
  });
  </script>
  