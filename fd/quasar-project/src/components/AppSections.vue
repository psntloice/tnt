<template>
  <div class="app-sections">
    <!-- Section 1 -->
    <div class="section">
      <h2>Section 1</h2>
      <p>This is the content of section 1.</p>
    </div>

    <!-- Section 2 -->
    <div class="section">
      <h2>Section 2</h2>
      <p>This is the content of section 2.</p>
    </div>

    <!-- Add more sections as needed -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AppSections'
})
</script>

<style scoped>
.app-sections {
  /* Styles for the entire component */
  padding: auto;
  background-image: url("'/images/' + t1 + '.jpg'");
  /* Adjust background properties as needed */
  background-size: cover;
  background-position: center;
}

.section {
  /* Styles for each section */
  margin-bottom: 20px;
}

.section h2 {
  /* Styles for section headings */
  padding: auto;
}

.section p {
  /* Styles for section paragraphs */
  padding: auto;
}
</style>
