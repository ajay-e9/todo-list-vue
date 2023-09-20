<script setup>
import { defineProps } from "vue";

const props = defineProps({
  items: {
    type: Object,
    default: null,
  },
  isCollapsed: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div
    class="fixed flex flex-col top-14 left-0 w-14 hover:w-64 md:w-64 bg-white h-full text-gray-600 transition-all duration-300 border-none z-10 sidebar"
  >
    <div
      class="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow"
    >
      <ul class="flex flex-col py-4 space-y-1">
        <li v-for="item in props.items" :key="item.name">
          <a
            :href="item.path"
            class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-700 text-gray-600 hover:text-white border-l-4 border-transparent"
          >
            <!-- Icono Home de Font Awesome -->
            <span class="inline-flex justify-center items-center ml-4">
              <i class="fas fa-home"></i>
            </span>
            <span class="ml-2 text-sm tracking-wide truncate">{{
              item.name
            }}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.sidebar li:hover a::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 4px;
  background: linear-gradient(to bottom, #00ffff, #008080); /* Gradiente cyan */
}

/* Estilos para cambiar el color del ícono y el texto a blanco al pasar el cursor */
.sidebar li:hover a i,
.sidebar li:hover a span {
  color: white;
}
</style>