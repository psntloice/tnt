<template>
    <q-header>
      <q-toolbar>
        <q-btn flat dense icon="menu" @click="$emit('toggle-menu')" />
        <q-toolbar-title>Instincts of Kenya</q-toolbar-title>
      </q-toolbar>
    </q-header>
  </template>
  
  <script>
  export default {
    name: 'AppHeader' // Change component name to avoid reserved name conflicts
  }
  </script>
  
  <style scoped>
  /* Add custom styles for the header */
  </style>