<template>
    <div class="upcoming-events">
        <h2>Up Coming Events</h2>
      <q-card v-for="(event, index) in events" :key="index" class="event-card">
        <q-card-section>
          <q-img :src="event.image" :alt="event.title" class="event-image" />
        </q-card-section>
        <q-card-section>
          <q-card-title>{{ event.title }}</q-card-title>
          <q-card-text>{{ event.description }}</q-card-text>
          <q-card-text class="event-date">{{ event.date }}</q-card-text>
          <q-btn label="Register Now" @click="register(event)" />
        </q-card-section>
      </q-card>
    </div>
  </template>
  
  <script>
  export default {
    name: 'UpComingEvents',
    data() {
      return {
        events: [
          {
            title: 'Adventure Trek in the Himalayas',
            image: '/images/himalayas.jpg',
            description: 'Join us for an exciting trekking adventure in the majestic Himalayan mountains...',
            date: 'Date: April 15, 2024',
          },
          {
            title: 'Cultural Festival in Tokyo',
            image: '/images/tokyo-festival.jpg',
            description: 'Experience the vibrant culture and traditions of Japan at the annual Tokyo Cultural Festival...',
            date: 'Date: May 20, 2024',
          },
          // Add more events as needed
        ],
      };
    },
    methods: {
      register(event) {
        // Implement registration logic for the selected event
        console.log('Registering for event:', event.title);
      },
    },
  };
  </script>
  
  <style scoped>
  .upcoming-events {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .event-card {
    width: 300px; /* Adjust card width as needed */
    margin: 10px;
  }
  
  .event-image {
    height: 200px; /* Adjust image height as needed */
  }
  
  .event-date {
    font-style: italic;
  }
  </style>
  