<template>
    <div class="highlightr">
      <h2 class="highlight-heading">Highlight Tours</h2>
      <!-- <q-card-group class="q-mb-md" style="display: flex; flex-wrap: wrap;"> -->
        <q-card-group style="display: flex; flex-wrap: wrap;">

        <!-- Loop through your tour highlights -->
        <q-card
          v-for="(tour, index) in tourHighlights"
          :key="index"
          class="tour-card q-mb-md"
        >
          <!-- Tour image -->
          <q-img
            :src="tour.image"
            :alt="tour.title"
            class="tour-image"
          />
  
          <!-- Tour details -->
          <q-card-section>
            <q-card-title>{{ tour.title }}</q-card-title>
            <q-card-text>{{ tour.description }}</q-card-text>
          </q-card-section>
        </q-card>
      </q-card-group>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'HighlightTours',
    data() {
      return {
        tourHighlights: [
          {
            title: 'Safari Adventure',
            image: '/images/t1.jpg',
            description: 'Experience the thrill of a safari adventure in the heart of Africa.',
          },
          {
            title: 'Beach Paradise',
            image: '/images/t2.jpg',
            description: 'Relax and unwind on pristine beaches with crystal-clear waters.',
          },
          // Add more tour highlights as needed
        ],
      };
    },
  });
  </script>
  
  <style scoped>
  .highlightr{
    /* height: 30vh; */
    margin: auto;
  }
  .highlight-heading {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .tour-card {
    max-width: 300px;
    margin: 0 auto;
     /* height: 50%; */
  }
  
  .tour-image {
    height: 200px;
    object-fit: cover; /* Ensure the image covers the entire space */
  }
  
  /* Adjust styles as needed */
  </style>
  