<template>
    <div>
      <h2>{{ title }}</h2>
      <q-card v-for="section in sections" :key="section.id">
        <q-card-section>
          <!-- Your section content goes here -->
          <p>{{ section.content }}</p>
        </q-card-section>
      </q-card>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'AppSections',
    props: {
      title: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        sections: [
          { id: 1, content: 'Section 1 content' },
          { id: 2, content: 'Section 2 content' },
          // Add more sections as needed
        ],
      };
    },
  });
  </script>
  