<template>
    <div>
      <AppHeader />
      <!-- Add content for booking page -->
      <AppFooter />
    </div>
  </template>
  
  <script>
  import AppHeader from 'src/components/Header.vue'
  import AppFooter from 'src/components/Footer.vue'
  
  export default {
    name: 'BookingPage',
    components: {
      AppHeader,
      AppFooter
    }
  }
  </script>
  
  <style>
  /* Add custom styles for the booking page */
  </style>