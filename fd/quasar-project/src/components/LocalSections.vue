<template>
  <div>
    <h2>Local Destinations</h2>
    <q-card-group class="q-mb-md" style="display: flex; flex-wrap: wrap;">
      <q-card v-for="(destination, index) in localDestinations" :key="index" class="destination-card">
        <q-img :src="`/images/${destination.image}`" :alt="destination.alt" />
        <q-card-section>
          <q-card-title>{{ destination.title }}</q-card-title>
          <q-card-text>{{ destination.description }}</q-card-text>
        </q-card-section>
      </q-card>
    </q-card-group>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import { QCard, QCardSection, QCardTitle, QCardText, QImg, QCardGroup } from 'quasar';

export default defineComponent({
  name: 'LocalDestinations',
  data() {
    return {
      localDestinations: [
        {
          title: 'Destination 1',
          image: 't1.jpg',
          alt: 'Destination 1',
          description: 'Description of destination 1.',
        },
        {
          title: 'Destination 2',
          image: 't2.jpg',
          alt: 'Destination 2',
          description: 'Description of destination 2.',
        },
        {
          title: 'Destination 3',
          image: 't3.jpg',
          alt: 'Destination 3',
          description: 'Description of destination 3.',
        },
        // Add more destinations as needed
      ],
    };
  },
});
</script>

<style scoped>
.destination-card {
  width: calc(33.33% - 10px); /* Three destinations per row with margin */
  margin: 0 5px;
  margin-bottom: 20px; /* Spacing between destinations */
}
h2{
    text-align: center;
  }
</style>
