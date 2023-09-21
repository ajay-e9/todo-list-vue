<script setup>
import { useSidebarStore } from "../Sidebar/Store.js";
const store = useSidebarStore();
</script>

<template>
  <nav class="bg-white shadow border-solid border-t-2 border-blue-700">
    <div
      class="flex items-center justify-between border-solid border-b-2 border-gray-300 ml-4"
    >
      <div class="flex items-center space-x-4">
        <div class="block">
          <button
            id="nav"
            class="flex items-center px-3 py-2 border-2 rounded text-blue-700 border-blue-700 hover:text-blue-700 hover:border-blue-700"
            @click="store.toggleSidebar"
          >
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <!-- Home button -->
        <router-link
          to="home"
          class="block mt-4 hover:text-white px-4 py-2 mb-2 rounded hover:bg-blue-700 mr-2"
        >
          <i class="fi fi-rr-home"></i>
          <span class="ml-2 max-sm:hidden">Home</span>
        </router-link>

        <!-- Notifications button -->
        <a
          href="#responsive-header"
          class="block mt-4 hover:text-white px-4 py-2 mb-2 rounded hover:bg-blue-700 mr-2"
        >
          <i class="fi fi-bs-bell"></i>
          <span class="ml-2 max-sm:hidden">Notifications</span>
        </a>
      </div>

      <div class="flex items-center space-x-4">
        <div class="relative mx-auto text-gray-600">
          <input
            class="border-2 border-gray-300 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Search"
          />
          <button type="submit" class="absolute right-0 top-0 mt-3 mr-2">
            <svg
              class="text-gray-600 h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 56.966 56.966"
              style="enable-background: new 0 0 56.966 56.966"
              xml:space="preserve"
              width="512px"
              height="512px"
            >
              <path
                d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
              />
            </svg>
          </button>
        </div>

        <router-link
          to="#"
          class="block mt-4 hover:text-white px-4 py-2 mb-2 rounded hover:bg-blue-700 mr-2"
        >
          <i class="fi fi-rr-circle-user to-black" />
          <span class="ml-2 max-sm:hidden">Account</span>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<style scoped>
</style>