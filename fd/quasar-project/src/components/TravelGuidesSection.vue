<template>
  <div class="travel-guides-section q-pa-lg">
    <h2>Travel Guides</h2>
    <q-card-group class="q-mb-md" style="display: flex; flex-wrap: wrap;">
      <q-card v-for="(guide, index) in guides" :key="index" class="guide-card q-mb-md">
        <q-card-section>
          <q-card-title>{{ guide.title }}</q-card-title>
          <q-card-text>{{ guide.description }}</q-card-text>
        </q-card-section>
        <q-card-actions>
          <q-btn color="primary" label="Read Guide" @click="handleReadGuideClick(guide)" />
        </q-card-actions>
      </q-card>
    </q-card-group>
  </div>
</template>

<script>
export default {
  name: 'TravelGuidesSection',
  data() {
    return {
      guides: [
        {
          title: 'Guide 1',
          description: 'Description of guide 1.',
          // Add more guide objects as needed
        },
        {
          title: 'Guide 2',
          description: 'Description of guide 2.',
        },
      ],
    };
  },
  methods: {
    handleReadGuideClick(guide) {
      // Implement logic to navigate to the details page or display details for the selected guide
      console.log('Reading guide:', guide.title);
    }
  }
};
</script>

<style scoped>
.travel-guides-section {
  max-width: 800px; /* Adjust maximum width as needed */
  margin: 0 auto;
  text-align: center;
}

.travel-guides-section h2 {
  font-size: 2.5rem; /* Adjust font size as needed */
  color: #333; /* Adjust color as needed */
}

.guide-card {
  max-width: 400px; /* Adjust maximum width of cards as needed */
  margin: 0 auto;
}

.guide-card q-card-text {
  font-size: 1.2rem; /* Adjust font size as needed */
  line-height: 1.6; /* Adjust line height as needed */
}

.guide-card q-btn {
  font-size: 1.2rem; /* Adjust font size of buttons as needed */
}
</style>
