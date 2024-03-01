<template>
  <div>
    <AppHeader  />
    <AppCarousel />
    <AppFeatures />
    <LocalSections />
    <InterNSections />
    <AppSections />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader.vue'
import AppCarousel from '../components/AppCarousel.vue'
import LocalSections from '../components/LocalSections.vue'
import InterNSections from '../components/InterNSections.vue'
import AppFooter from '../components/AppFooter.vue'
import AppSections from '../components/AppSections.vue'
import AppFeatures from '../components/AppFeatures.vue'

export default {
  name: 'HomePage',
  components: {
 
    AppHeader,
    AppCarousel,
    AppFeatures,
    LocalSections ,
    InterNSections,
    AppSections,
    AppFooter
  },
  
}
</script>
