<template>
    <q-carousel>
      <q-carousel-slide
        v-for="(slide, index) in slides"
        :key="index"
        :img-src="slide.imgSrc"
        :img-alt="slide.imgAlt"
      >
        <q-banner>
          <div>{{ slide.title }}</div>
          <div>{{ slide.description }}</div>
        </q-banner>
      </q-carousel-slide>
    </q-carousel>
  </template>
  
  <script>
  export default {
    name: 'Carousel',
    props: {
      slides: {
        type: Array,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  /* Add custom styles for the carousel */
  </style>
  