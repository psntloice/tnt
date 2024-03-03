<template>
  <q-header class="app-header" transparent>
    <q-toolbar>
      <q-btn flat dense icon="menu" color="white" @click="$emit('toggle-menu')" />
      <q-toolbar-title>Instincts of Kenya</q-toolbar-title>
     <div class="trs">
      <q-btn flat dense label="Tours" @click="navigateTo('tours')" />
    </div> 
      <div class="search-container">
        <q-input
        rounded outlined
        ref="searchInput"
        v-model="searchQuery"
        dense 
        placeholder="Search..."
        class="search-bar"
        :class="{ active: searchActive }"
        @keydown.enter="search"
      >
     
        <template v-slot:append>
          <q-btn flat dense icon="search" @click="toggleSearch(!searchActive)" />
        </template>
      </q-input>
    </div>
      </q-toolbar>
  </q-header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AppHeader',
  data() {
    return {
      searchQuery: '',
searchActive: false
    }
  },
  methods: {
    navigateTo(routeName: string) {
      // Implement navigation logic here using Vue Router
      console.log(`Navigating to ${routeName}`);
    },
    search() {
      // Implement search functionality here
      console.log(`Searching for: ${this.searchQuery}`);
      // You can perform search operations using this.searchQuery
    },
    toggleSearch(active: boolean) {
      this.searchActive = active;
      if (!active) {
        // Clear search query when search is inactive
        this.searchQuery = '';
      }
    }
  }
})
</script>

<style scoped>
.app-header {
  /* Add custom styles for the header */
  background-color: transparent; /* Set background color to transparent */
  text-align: center;
color: rgb(13, 12, 15);
height: 10vh;
position: fixed; /* Fixed position ensures it stays on top */
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000; /* Ensure the header is on top */
}

.search-container {
  display: flex;
  flex-direction: row-reverse; 
}
.search-bar {
  transition: width 0.3s ease; /* Smooth transition for width change */
  width: 50%; /* Initial width */
  flex-shrink: 1;
}
.search-bar.active {
  width: 100%; /* Adjust width as needed */
  border-color: black;
}
.trs{
  padding-right: 25px;
}
</style>
