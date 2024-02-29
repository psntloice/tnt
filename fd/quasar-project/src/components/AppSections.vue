<template>
  <div class="app-sections">
    <!-- Section 1 -->
    <div class="section">
      <h2>S1</h2>
      <p>Welcome.</p>
    </div>

    <!-- Section 2 -->
    <div class="section">
      <h2>S2</h2>
      <p>View.</p>
    </div>

    <!-- Showcase tours using cards -->
    <div class="section">
      <h2>Tours</h2>
      <q-card-group>
        <q-card v-for="(tour, index) in tours" :key="index" class="tour-card">
          <q-card-section class="q-pa-md">
            <q-img :src="tour.imageSrc" :alt="tour.title" />
            <q-card-title>{{ tour.title }}</q-card-title>
            <q-card-main>{{ tour.description }}</q-card-main>
            <q-card-separator />
            <q-card-actions>
              <span class="text-accent">Price: {{ tour.price }}</span>
              <!-- Add more actions as needed -->
            </q-card-actions>
          </q-card-section>
        </q-card>
      </q-card-group>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface Tour {
  imageSrc: string;
  title: string;
  description: string;
  price: string;
}

export default defineComponent({
  name: 'AppSections',
  data() {
    return {
      tours: [
        { imageSrc: '/images/t1.jpg', title: 'Tour 1', description: 'Description of Tour 1', price: '$100' },
        { imageSrc: '/images/t2.jpg', title: 'Tour 2', description: 'Description of Tour 2', price: '$120' },
        // Add more tours as needed
      ] as Tour[]
    };
  }
});
</script>

<style scoped>
.app-sections {
  /* Styles for the entire component */
  background-image: url('/images/t3.jpg');
  /* Adjust background properties as needed */
  background-size: cover;
  background-position: center;
}

.section {
  /* Styles for each section */
  margin-bottom: 20px;
}

.tour-card {
  /* Styles for tour cards */
  max-width: 300px; /* Adjust card width as needed */
}
</style>
