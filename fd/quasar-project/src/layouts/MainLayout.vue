<template>
  <q-layout view="lHh Lpr lFf" >
    <q-header class="app-header" elavated>
      <div class="tbard">
      <q-toolbar class="tbar" id="mytbar">
      <q-btn flat dense icon="menu" color="white" @click="$emit('toggle-menu')" />
      <q-toolbar-title class="theei" id="mytbar">
        <h3 class="title">INSTINCTS OF KENYA</h3>
            </q-toolbar-title>
     <!-- <div class="trs" id="mytbar">
      <q-btn flat dense label="Tours" @click="navigateTo('tours')" id="mytbar"/>
    </div>  -->
      <div class="search-container" id="mytbar">
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
    </div>

    </q-header>

   

    <q-page-container>
      <router-view />
    </q-page-container>
   
      <q-footer class="app-footer">
    <!-- <div class="q-pa-md"> -->
      <q-toolbar>
          <q-toolbar-title>Instincts of Kenya</q-toolbar-title>
        </q-toolbar>
      <div>&copy; 2024 Instincts of Kenya. All rights reserved.</div>
    <!-- </div> -->
  </q-footer>
  </q-layout>
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

<style lang="scss" scoped>
/* Define header styles */
.title {
  font-weight: 800;
  font-size: 4vw;
  text-shadow: 0 0 2vw rgba(0, 0, 0, 0.8); /* Example using viewport units for responsiveness */
}
.theei{
  width:90vw;
}
.tbard{
  width: 100%;
  display: flex;
}
.tbar{
  display: flex;
  justify-content: center;
   word-spacing: 20px;
   padding: 0;
}
#mytbar{
  font-size: 20px !important;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  
}
.q-page-container {
    padding: 0 !important;
}

.app-footer {
  /* Add custom styles for the footer */
  background-color: #7c8487;
  position: relative;
/* display: flex; */
  color:black;
text-align: center;
height: 25vh;
}
.trs{
  font-size: 50px;
}
.app-header {
  /* Add custom styles for the header */
  padding-top: 0px;
  display: flex;
  background-color: transparent; /* Set background color to transparent */
  text-align: center;
color: white;
height: 13vh;
position: fixed; /* Fixed position ensures it stays on top */
  top: 0;
  left: 0;
  width: 100%;  
  font-size: 60px;
  z-index: 1000; /* Ensure the header is on top */
}

.search-container {
  display: flex;
  flex-direction: row-reverse; 
  width:15vh;
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
