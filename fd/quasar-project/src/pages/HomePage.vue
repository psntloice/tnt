<template>
  <div class="q-page-container q-nopadding" :class="pageContainerClasses">
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
</div>

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
  data() {
    return {
      pageContainerClasses: ['home-page-padding'] // Add any other classes if needed
    }
  }
}
</script>
<style scoped>
.home-page-padding {
  padding-top: 3px;
}

/* Override the padding for smaller screens */
/* Adjust the breakpoint (max-width) and padding value as needed */
.q-page-container.home-page-padding.q-layout-md .q-page {
  padding-top: 1px;
}
.home-page {
  background-color: #f2f0eb; /* Set the background color to your desired color */
padding-top: 0;
}
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.content {
  flex: 1; /* Make the content area flex-grow to fill remaining space */
  /* display: flex; */
  margin-left: 20px;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px; /* Add padding to the content area */
}
</style>