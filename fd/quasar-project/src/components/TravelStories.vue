<template>
    <div class="travel-stories">
        <h1>Travel Stories</h1>
      <q-card v-for="(story, index) in stories" :key="index" class="story-card">
        <q-card-section>
          <q-img :src="story.image" :alt="story.title" class="story-image" />
        </q-card-section>
        <q-card-section>
          <q-card-title>{{ story.title }}</q-card-title>
          <q-card-text>{{ story.description }}</q-card-text>
          <q-btn label="Read More" @click="readMore(story)" />
        </q-card-section>
      </q-card>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TravelStories',
    data() {
      return {
        stories: [
          {
            title: 'Adventure in the Amazon Rainforest',
            image: '/images/amazon.jpg',
            description: 'Embark on a journey deep into the heart of the Amazon Rainforest...',
          },
          {
            title: 'Exploring Ancient Ruins in Machu Picchu',
            image: '/images/machu-picchu.jpg',
            description: 'Discover the mysteries of the ancient Inca civilization amidst the breathtaking ruins of Machu Picchu...',
          },
          // Add more stories as needed
        ],
      };
    },
    methods: {
      readMore(story) {
        // Implement navigation or modal display for reading the full story
        console.log('Read more about:', story.title);
      },
    },
  };
  </script>
  
  <style scoped>
  .travel-stories {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .story-card {
    width: 300px; /* Adjust card width as needed */
    margin: 10px;
  }
  
  .story-image {
    height: 200px; /* Adjust image height as needed */
  }
  </style>
  