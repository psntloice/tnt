<template>
  <q-page class="home-page" id="app">
    <AppCarousel />
    <div class="content">
    <HighlightTours />
    <HotDealsSection />
    <IntroSection />
    <AppFeatures />
    <LocalSections />
    <InterNSections />
    <TravelStories />
<UpComingEvents />
<OurPackagesSection />
<TravelGuidesSection />
<BookWithUsSection />
</div>
</q-page>
</template>

<script>
import AppCarousel from '../components/AppCarousel.vue'
import LocalSections from '../components/LocalSections.vue'
import InterNSections from '../components/InterNSections.vue'
import AppFeatures from '../components/AppFeatures.vue'
import HighlightTours from '../components/HighlightTours.vue'
import TravelStories from '../components/TravelStories.vue'
import UpComingEvents from '../components/UpComingEvents.vue'
import IntroSection from '../components/IntroSection.vue'
import BookWithUsSection from '../components/BookWithUsSection.vue'
import HotDealsSection from '../components/HotDealsSection.vue'
import OurPackagesSection from '../components/OurPackagesSection.vue'
import TravelGuidesSection from '../components/TravelGuidesSection.vue'

export default {
  name: 'HomePage',
  layout: 'MainLayout',
  components: {
 
    AppCarousel,
    HighlightTours,
    AppFeatures,
    LocalSections ,
    InterNSections,
    TravelStories,
    IntroSection,
    BookWithUsSection,
UpComingEvents,
OurPackagesSection,
HotDealsSection,
TravelGuidesSection,
  },
}
</script>

<style scoped>

.home-page {
  background-color: #f2f0eb; /* Set the background color to your desired color */
padding-top: 0;
}
/* #app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
} */
.content {
  flex: 1; /* Make the content area flex-grow to fill remaining space */
  /* display: flex; */
  margin-left: 20px;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px; /* Add padding to the content area */
}
</style>