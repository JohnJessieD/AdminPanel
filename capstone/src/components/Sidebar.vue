<template>
    <v-app>
      <!-- Sidebar -->
      <v-navigation-drawer :mini-variant.sync="isCollapsed" app>
        <v-list dense>
          <v-list-item-group>
            
            <v-list-item v-for="link in links" :key="link.to" @click="navigate(link.to)" :class="{ 'link-active': isActive(link.to) }">
              <v-list-item-action>
                <v-icon>{{ link.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>{{ link.text }}</v-list-item-title>
                
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
          <v-btn icon @click="logout">
          <v-icon>mdi-logout</v-icon>
        </v-btn>
        </v-list>
      </v-navigation-drawer>
  
      <!-- App Bar -->
      <v-app-bar app>
        <v-app-bar-nav-icon @click.stop="toggleCollapse"></v-app-bar-nav-icon>
        <v-toolbar-title class="text-uppercase">MSWD</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-app-bar>
  
      <!-- Main Content -->
      <v-main>

      </v-main>
    </v-app>
  </template>
<script>
export default {
  data() {
    return {
      
      isCollapsed: false,
      links: [
        { to: '/Dashboard', icon: 'mdi-view-dashboard', text: 'Dashboard' },
        { to: '/Offices', icon: 'mdi-office-building', text: 'Offices' },
        { to: '/Data', icon: 'mdi-database', text: 'Data' },
        { to: '/User', icon: 'mdi-account', text: 'User' },
      ],
    };
  },
  methods: {
    toggleCollapse() {
      this.isCollapsed = !this.isCollapsed;
    },
    navigate(to) {
      this.$router.push(to);
    },
    isActive(route) {
      return this.$route.path === route;
    },
    logout() {
      // Perform any additional logout logic (clear session, etc.) here
      // For example, you can use localStorage to clear the user session
      localStorage.removeItem('userToken');this.$router.push('/')
      },
    },
  };
  </script>
  
  <style scoped>
  .link-active {
    background-color: #e0e0e0 !important; /* Highlight active link with a background color */
  }

  .v-navigation-drawer {
    transition: min-width 0.3s !important;
  }

  .v-navigation-drawer--open {
    min-width: 300px !important; /* Set the desired open width */
  }
</style>
