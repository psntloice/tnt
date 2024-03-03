<template>
  <q-footer class="app-footer">
    <div class="q-pa-md">
      <div>&copy; 2024 Instincts of Kenya. All rights reserved.</div>
    </div>
  </q-footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AppFooter'
})
</script>

<style scoped>
.app-footer {
  /* Add custom styles for the footer */
  background-color: #7c8487;
/* background-color: transparent; */
display: flex;
  color:black;
text-align: center;
height: 30vh;
}
</style>
