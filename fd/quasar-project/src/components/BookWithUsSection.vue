<template>
  <div class="book-with-us-section q-pa-lg">
    <h2>Book with Us</h2>
      <q-btn class="book-now-btn q-mt-lg" color="primary" label="Book Now" @click="handleBookNowClick" />
  </div>
</template>

<script>
export default {
  name: 'BookWithUsSection',
  methods: {
    handleBookNowClick() {
      // Implement logic to navigate to the booking page or display a booking form
      console.log('Redirecting to booking page...');
    }
  }
};
</script>

<style scoped>
.book-with-us-section {
  max-width: 800px; /* Adjust maximum width as needed */
  margin: 0 auto;
  text-align: center;
}

.book-with-us-section h2 {
  font-size: 2.5rem; /* Adjust font size as needed */
  color: #333; /* Adjust color as needed */
}

.section-description {
  font-size: 1.2rem; /* Adjust font size as needed */
  line-height: 1.6; /* Adjust line height as needed */
}

.book-now-btn {
  font-size: 1.2rem; /* Adjust font size as needed */
}
</style>
