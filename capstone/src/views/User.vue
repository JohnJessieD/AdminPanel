<template>
    <v-container>
      <v-row>
        <v-col>
          <v-card>
            <v-card-title>
              <h2>User Management</h2>
            </v-card-title>
  
            <!-- User List -->
            <v-card-text v-if="users.length > 0">
              <h3>Users</h3>
              <v-list>
                <v-list-item v-for="user in users" :key="user.id">
                  <v-list-item-content>
                    <v-list-item-title>{{ user.name }} ({{ user.email }})</v-list-item-title>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-btn @click="editUser(user)">Edit</v-btn>
                  </v-list-item-action>
                  <v-list-item-action>
                    <v-btn @click="deleteUser(user.id)">Delete</v-btn>
                  </v-list-item-action>
                </v-list-item>
              </v-list>
            </v-card-text>
  
            <!-- Add or Edit User Form -->
            <v-card-text>
              <h3>{{ editingUser ? 'Edit User' : 'Add User' }}</h3>
              <v-form @submit.prevent="saveUser">
                <v-row>
                  <v-col>
                    <v-text-field v-model="userForm.name" label="Name" required></v-text-field>
                  </v-col>
                  <v-col>
                    <v-text-field v-model="userForm.email" label="Email" type="email" required></v-text-field>
                  </v-col>
                </v-row>
                <v-btn type="submit">{{ editingUser ? 'Update' : 'Add' }}</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        users: [
          { id: 1, name: 'John Doe', email: 'john@example.com' },
          { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
          // Add more sample users as needed
        ],
        userForm: {
          name: '',
          email: '',
        },
        editingUser: null,
      };
    },
    methods: {
      editUser(user) {
        this.editingUser = user;
        this.userForm = { ...user }; // Create a copy of the user to avoid modifying the original
      },
      saveUser() {
        if (this.editingUser) {
          // Update existing user
          const index = this.users.findIndex(user => user.id === this.editingUser.id);
          if (index !== -1) {
            this.users[index] = { ...this.userForm, id: this.editingUser.id };
          }
        } else {
          // Add new user
          const newUser = { ...this.userForm, id: this.users.length + 1 };
          this.users.push(newUser);
        }
  
        // Clear the form
        this.userForm = { name: '', email: '' };
        this.editingUser = null;
      },
      deleteUser(userId) {
        // Delete user
        this.users = this.users.filter(user => user.id !== userId);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add styles if needed */
  </style>
  