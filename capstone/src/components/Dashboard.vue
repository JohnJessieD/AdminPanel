<template>
    <div>
      <h1>Dashboard</h1>
      <div class="dashboard-content">
        <h2>Statistics</h2>
        <div>
          Total Sales: ${{ totalSales }}
        </div>
  
        <!-- New Section: Government Office Information -->
        <h2>Government Office Information</h2>
        <p>This section contains information about the government office.</p>
  
        <div>
          <h3>Contact Information</h3>
          <p>Email: govoffice@example.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
  
        <div>
          <h3>Office Hours</h3>
          <p>Monday-Friday: 9:00 AM - 5:00 PM</p>
        </div>
  
        <!-- Chart Section -->
        <h2>Chart Example</h2>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-card>
                <v-card-title>Example Chart</v-card-title>
                <v-card-text>
                  <!-- Enhanced Chart -->
                  <v-chart :options="chartOptions" />
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        totalSales: 50000, // Example data for total sales
        chartOptions: {
          chart: {
            type: 'bar',
            height: 350, // Set the height of the chart
            toolbar: {
              show: false, // Hide the chart toolbar
            },
          },
          series: [
            {
              name: 'Sales',
              data: [3000, 8000, 12000, 20000, 27000], // Example data for the chart
            },
          ],
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'], // Example categories for the chart
          },
          yaxis: {
            title: {
              text: 'Sales (in $)', // Y-axis title
            },
          },
          plotOptions: {
            bar: {
              horizontal: false, // Display bars vertically
              columnWidth: '55%', // Set the width of the bars
              endingShape: 'rounded', // Rounded corners for the bars
            },
          },
          dataLabels: {
            enabled: false, // Disable data labels
          },
          legend: {
            show: true, // Show the legend
            position: 'top', // Position the legend at the top
            horizontalAlign: 'right', // Align legend to the right
          },
        },
      };
    },
  };
  </script>
  
  <style scoped>
  .dashboard-content {
    margin-top: 20px;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    margin-bottom: 10px;
  }
  </style>
  