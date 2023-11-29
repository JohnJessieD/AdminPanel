<template>
    <v-card>
      <v-card-title>Office Details</v-card-title>
      <v-card-subtitle>MSWD Offices</v-card-subtitle>
  
      <v-card-text>
        <v-row>
          <v-col v-for="(office, index) in offices" :key="index" cols="12" md="6" lg="4">
            <v-card class="mb-3">
              <v-card-title>{{ office.category }}</v-card-title>
              <v-card-subtitle>{{ office.subtitle }}</v-card-subtitle>
  
              <v-card-text>
                <!-- Display additional details or features for the office category -->
                <v-list>
                  <v-list-item-group v-if="office.features.length > 0">
                    <v-list-item v-for="(feature, i) in office.features" :key="i">
                      <v-list-item-icon>
                        <v-icon>mdi-checkbox-marked</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>{{ feature }}</v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-card-text>
  
              <!-- You can add buttons or actions related to the office category here -->
  
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </template>
  
  <script>
  export default {
    data() {
      return {
        offices: [
          {
            category: "Child",
            subtitle: "Office for Children",
            features: ["Feature 1", "Feature 2", "Feature 3"],
          },
          {
            category: "Youth",
            subtitle: "Youth Empowerment Office",
            features: ["Feature A", "Feature B", "Feature C"],
          },
          {
            category: "Women",
            subtitle: "Women Empowerment Office",
            features: ["Feature X", "Feature Y", "Feature Z"],
          },
          {
            category: "Distressed/Displaced Individuals/Families",
            subtitle: "Relief and Support Office",
            features: ["Relocation Assistance", "Crisis Counseling", "Emergency Aid"],
          },
          {
            category: "Disabled",
            subtitle: "Office for Persons with Disabilities",
            features: ["Accessibility Services", "Inclusive Programs", "Assistive Technologies"],
          },
          {
            category: "Older Persons",
            subtitle: "Senior Citizens Office",
            features: ["Elderly Care Programs", "Social Activities", "Health Services"],
          },
          {
            category: "Disaster Victims",
            subtitle: "Disaster Recovery Office",
            features: ["Rehabilitation Programs", "Emergency Shelter", "Reconstruction Aid"],
          },
          {
            category: "4Ps Beneficiaries",
            subtitle: "Pantawid Pamilyang Pilipino Program",
            features: ["Cash Grants", "Health and Education Assistance", "Livelihood Support"],
          },
          // Add more office categories with their details
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add custom styling for your component here */
  </style>
  