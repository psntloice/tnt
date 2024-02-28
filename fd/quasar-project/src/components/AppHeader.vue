<template>
  <q-header class="app-header" transparent>
    <q-toolbar>
      <q-btn flat dense icon="menu" @click="$emit('toggle-menu')" />
      <q-toolbar-title>Instincts of Kenya</q-toolbar-title>
    </q-toolbar>
  </q-header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AppHeader'
})
</script>

<style scoped>
.app-header {
  /* Add custom styles for the header */
  background-color: transparent; /* Set background color to transparent */
  
}
</style>
