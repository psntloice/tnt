<template>
  <div>
    <AppHeader  />
    <AppCarousel />
    <AppSections />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader.vue'
import AppCarousel from '../components/AppCarousel.vue'
import AppSections from '../components/AppSections.vue'
import AppFooter from '../components/AppFooter.vue'

export default {
  name: 'HomePage',
  components: {
    AppHeader,
    AppCarousel,
    AppSections,
    AppFooter
  },
  
}
</script>
