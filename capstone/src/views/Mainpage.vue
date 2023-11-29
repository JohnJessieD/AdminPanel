<template>
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" md="6">
          <v-card>
            <v-card-title class="headline">Welcome to Your App</v-card-title>
            <v-card-subtitle>Choose an option below</v-card-subtitle>
  
            <v-card-actions>
              <v-btn @click="goToLogin" color="primary">Login</v-btn>
              <v-btn @click="goToRegister" color="success">Register</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    methods: {
      goToLogin() {
        this.$router.push({ name: 'login' }); // Replace with your login route name
      },
      goToRegister() {
        this.$router.push({ name: 'register' }); // Replace with your register route name
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your styles here if needed */
  </style>
  