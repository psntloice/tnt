<template>
    <div class="hot-deals-section q-pa-lg">
      <h2>Hot Deals</h2>
      <q-card-group class="cardsec q-mb-md" style="display: flex; flex-wrap: wrap;">
        <q-card v-for="(deal, index) in hotDeals" :key="index" class="hot-deal-card q-mb-md">
          <q-card-section>
            <q-card-title>{{ deal.title }}</q-card-title>
            <q-card-text>{{ deal.description }}</q-card-text>
          </q-card-section>
          <q-card-actions>
            <q-btn color="primary" label="View Deal" @click="handleViewDealClick(deal)" />
          </q-card-actions>
        </q-card>
    </q-card-group>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HotDealsSection',
    data() {
      return {
        hotDeals: [
          {
            title: 'Deal 1',
            description: 'Description of deal 1.',
            // Add more deal objects as needed
          },
          {
            title: 'Deal 2',
            description: 'Description of deal 2.',
          },
        ],
      };
    },
    methods: {
      handleViewDealClick(deal) {
        // Implement logic to navigate to the details page or display details for the selected deal
        console.log('Viewing deal:', deal.title);
      }
    }
  };
  </script>
  
  <style scoped>
  .hot-deals-section {
    max-width: 800px; /* Adjust maximum width as needed */
    margin: 0 auto;
    text-align: center;
    /* height: 30vh; */
  }
  .cardsec{
    justify-content: space-between;
    justify-items:flex-end

  }
  .hot-deals-section h2 {
    font-size: 2.5rem; /* Adjust font size as needed */
    color: #333; /* Adjust color as needed */
  }
  
  .hot-deal-card {
    max-width: 400px; /* Adjust maximum width of cards as needed */
    margin: 0 auto;
  }
  
  .hot-deal-card q-card-text {
    font-size: 1.2rem; /* Adjust font size as needed */
    line-height: 1.6; /* Adjust line height as needed */
  }
  
  .hot-deal-card q-btn {
    font-size: 1.2rem; /* Adjust font size of buttons as needed */
  }
  </style>
  