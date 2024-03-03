<!-- Hero Section with Carousel: Instead of a static hero image, you can use the carousel to
 display a rotating selection of high-quality images featuring various travel destinations,
  tour packages, or adventure activities. This dynamic element can capture users' attention 
  and create an immersive experience right from the homepage. -->

<template>
  <div class="qpa">
    <q-carousel
    class="hcarous"
      swipeable
      animated
      v-model="slide"
      thumbnails
      infinite
    >
      <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
      <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
      <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
      <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
    </q-carousel>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      slide: ref(2)
    }
  }
}
</script>

<style scoped>
.qpa {
  /* Add custom styles for the header */
  width: 100%; /* Full width */
  height: 95vh; /* 70% of viewport height */  
}
.hcarous{
  height:100%;
}
</style>