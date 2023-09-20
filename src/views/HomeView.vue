<script setup>
import Navbar from "../components/Navbar/Navbar.vue";
import Sidebar from "../components/Sidebar/Sidebar.vue";
import { useSidebarStore } from "../components/Sidebar/Store";
import { ref } from "vue";

const store = useSidebarStore();

const SideBarItems = ref([]);

SideBarItems.value.push(
  { name: "Inbox", path: "/inbox" },
  { name: "Today", path: "/today" },
  { name: "Upcoming", path: "/upcoming" }
);
</script>
<template>
  <Sidebar :items="SideBarItems" v-if="store.SideBarCollapsed" />
  <Navbar />
  <main></main>
</template>
