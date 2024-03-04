<template>
    <div class="intro-section q-pa-lg">
      <h2>Welcome to Instincts of Kenya</h2>
      <q-paragraph class="q-mt-md">
        At Instincts of Kenya, we are passionate about showcasing the breathtaking beauty and rich cultural heritage of Kenya.
        With our carefully curated tours and personalized travel experiences, we aim to provide you with unforgettable adventures
        that immerse you in the heart and soul of this enchanting destination.
      </q-paragraph>
      <q-paragraph class="q-mt-md">
        Whether you're seeking thrilling wildlife safaris, serene beach getaways, or authentic cultural encounters,
        our team of expert guides and travel specialists are dedicated to ensuring that every aspect of your journey
        exceeds your expectations.
      </q-paragraph>
      <q-paragraph class="q-mt-md">
        Join us on an extraordinary voyage of discovery and let Instincts of Kenya be your trusted companion
        as you embark on a once-in-a-lifetime exploration of the wonders that Kenya has to offer.
      </q-paragraph>
    </div>
  </template>
  
  <script>
  export default {
    name: 'IntroSection',
  };
  </script>
  
  <style scoped>
  .intro-section {
    max-width: 800px; /* Adjust maximum width as needed */
    margin: 0 auto;
    text-align: center;
    height: 65vh;
  }
  .q-mt-md{
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif
  }
  
  .intro-section h2 {
    font-size: 2.5rem; /* Adjust font size as needed */
    color: #333; /* Adjust color as needed */
  }
  
  .q-paragraph {
    font-size: 1.2rem; /* Adjust font size as needed */
    line-height: 1.6; /* Adjust line height as needed */
  }
  </style>
  