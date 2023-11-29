<template>
    <v-container class="info-container">
      <v-row>
        <v-col>
          <h2>Information Data Management</h2>
  
          <!-- Information Data List -->
          <v-if informationList.length > 
            <h3>Information Data Items</h3>
            <v-list>
              <v-list-item v-for="infoData in informationList" :key="infoData.id" class="info-item">
                <v-list-item-content>
                  <v-list-item-title>{{ infoData.title }}</v-list-item-title>
                  <v-list-item-subtitle>{{ infoData.content }}</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn @click="editInformation(infoData)" class="info-btn">Edit</v-btn>
                  <v-btn @click="deleteInformation(infoData.id)" class="info-btn">Delete</v-btn>
                </v-list-item-action>
              </v-list-item>
            </v-list>
          </v-if>
  
          <!-- Add or Edit Information Data Form -->
          <div class="info-form">
            <h3>{{ editingInformation ? 'Edit Information Data' : 'Add Information Data' }}</h3>
            <v-form @submit.prevent="saveInformation">
              <v-text-field v-model="infoDataForm.title" label="Title" required></v-text-field>
              <v-textarea v-model="infoDataForm.content" label="Content" required></v-textarea>
              <v-btn type="submit" class="info-btn">{{ editingInformation ? 'Update' : 'Add' }}</v-btn>
            </v-form>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  
  <script>
  export default {
    data() {
      return {
        informationList: [
          { id: 1, title: 'Info Item 1', content: 'Content for Info Item 1' },
          { id: 2, title: 'Info Item 2', content: 'Content for Info Item 2' },
          // Add more sample information data items as needed
        ],
        infoDataForm: {
          title: '',
          content: '',
        },
        editingInformation: null,
      };
    },
    methods: {
      editInformation(infoData) {
        this.editingInformation = infoData;
        this.infoDataForm = { ...infoData }; // Create a copy of the information data item to avoid modifying the original
      },
      saveInformation() {
        if (this.editingInformation) {
          // Update existing information data item
          const index = this.informationList.findIndex(item => item.id === this.editingInformation.id);
          if (index !== -1) {
            this.informationList[index] = { ...this.infoDataForm, id: this.editingInformation.id };
          }
        } else {
          // Add new information data item
          const newInfoDataItem = { ...this.infoDataForm, id: this.informationList.length + 1 };
          this.informationList.push(newInfoDataItem);
        }
  
        // Clear the form
        this.infoDataForm = { title: '', content: '' };
        this.editingInformation = null;
      },
      deleteInformation(infoDataItemId) {
        // Delete information data item
        this.informationList = this.informationList.filter(item => item.id !== infoDataItemId);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Container styling */
  .info-container {
    margin-top: 20px;
  }

  /* Information Data List styling */
  .info-list {
    margin-top: 20px;
  }

  /* Information Data Item styling */
  .info-item {
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  /* Form styling */
  .info-form {
    margin-top: 20px;
  }

  /* Button styling */
  .info-btn {
    margin-left: 10px;
  }
</style>

  