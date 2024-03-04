<!-- Featured Destinations: Below the hero section, continue to highlight featured destinations or tour packages,
 but now with more context provided by the carousel. Each destination can be represented by a card or
  tile within the carousel, allowing users to scroll through them horizontally. -->




<template>
    <div class="features">
      <h2>Our Services</h2>
      <div class="feature-list">
        <div v-for="(feature, index) in features" :key="index" class="feature">
          <q-icon :name="feature.icon" size="50px" class="feature-icon" />
          <h3 class="feature-title">{{ feature.title }}</h3>
          <p class="feature-description">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'AppFeatures',
    data() {
      return {
        features: [
          {
            icon: 'flight_takeoff',
            title: 'Worldwide Destinations',
            description: 'Explore destinations across the globe and plan your dream vacation.',
          },
          {
            icon: 'hotel',
            title: 'Accommodation',
            description: 'Discover a variety of accommodation options including hotels, resorts, and more.',
          },
          {
            icon: 'directions_car',
            title: 'Transportation',
            description: 'Find convenient transportation options for your travel needs.',
          },
          // Add more features as needed
        ],
      };
    },
  });
  </script>
  
  <style scoped>
  /* .features {
    margin-top: 50px;
  } */
  h2{
    text-align: center;
  }
  .feature-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .feature {
    width: calc(33.33% - 20px); /* Three features per row with margin */
    margin: 0 10px;
    margin-bottom: 30px; /* Spacing between features */
    text-align: center;
  }
  
  .feature-icon {
    margin-bottom: 10px;
  }
  
  .feature-title {
    font-size: 20px;
    margin-bottom: 10px;
  }
  
  .feature-description {
    font-size: 16px;
  }
  </style>
  