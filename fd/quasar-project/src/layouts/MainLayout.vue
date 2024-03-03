<template>
  <q-layout view="lHh Lpr lFf" >
    <q-header class="app-header" elavated>
      
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

   

    <q-page-container class="pct">
      <router-view />
    </q-page-container>
    <!-- <q-footer elevated>
        <q-toolbar>
          <q-toolbar-title>Footer</q-toolbar-title>
        </q-toolbar>
      </q-footer> -->
      <q-footer class="app-footer">
    <div class="q-pa-md">
      <div>&copy; 2024 Instincts of Kenya. All rights reserved.</div>
    </div>
  </q-footer>
  </q-layout>
  <!-- <q-layout>
  ...
  <q-page-container>
    <q-page>
      page content -->
    <!-- </q-page>
  </q-page-container>
  ...
</q-layout> -->
</template>

<!-- <script setup lang="ts">
import { ref } from 'vue';
import EssentialLink, { EssentialLinkProps } from 'components/EssentialLink.vue';

const essentialLinks: EssentialLinkProps[] = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
];

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script> -->

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
.pct {
  padding-top: 0px;
}
.app-footer {
  /* Add custom styles for the footer */
  background-color: #7c8487;
/* background-color: transparent; */
display: flex;
  color:black;
text-align: center;
height: 30vh;
}
.app-header {
  /* Add custom styles for the header */
  padding-top: 0px;
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
