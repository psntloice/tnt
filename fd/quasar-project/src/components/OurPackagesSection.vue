<template>
    <div class="our-offers-section q-pa-lg">
      <h2>Our Offers</h2>
      <q-card-group class="q-mb-md" style="display: flex; flex-wrap: wrap;">
        <q-card v-for="(offer, index) in offers" :key="index" class="offer-card q-mb-md">
          <q-card-section>
            <q-card-title>{{ offer.title }}</q-card-title>
            <q-card-text>{{ offer.description }}</q-card-text>
          </q-card-section>
          <q-card-actions>
            <q-btn color="primary" label="View Offer" @click="handleViewOfferClick(offer)" />
          </q-card-actions>
        </q-card>
    </q-card-group>
    </div>
  </template>
  
  <script>
  export default {
    name: 'OurOffersSection',
    data() {
      return {
        offers: [
          {
            title: 'Offer 1',
            description: 'Description of offer 1.',
            // Add more offer objects as needed
          },
          {
            title: 'Offer 2',
            description: 'Description of offer 2.',
          },
        ],
      };
    },
    methods: {
      handleViewOfferClick(offer) {
        // Implement logic to navigate to the details page or display details for the selected offer
        console.log('Viewing offer:', offer.title);
      }
    }
  };
  </script>
  
  <style scoped>
  .our-offers-section {
    max-width: 800px; /* Adjust maximum width as needed */
    margin: 0 auto;
    text-align: center;
  }
  
  .our-offers-section h2 {
    font-size: 2.5rem; /* Adjust font size as needed */
    color: #333; /* Adjust color as needed */
  }
  
  .offer-card {
    max-width: 400px; /* Adjust maximum width of cards as needed */
    margin: 10px auto;
  }
  
  .offer-card q-card-text {
    font-size: 1.2rem; /* Adjust font size as needed */
    line-height: 1.6; /* Adjust line height as needed */
  }
  
  .offer-card q-btn {
    font-size: 1.2rem; /* Adjust font size of buttons as needed */
  }
  </style>
  