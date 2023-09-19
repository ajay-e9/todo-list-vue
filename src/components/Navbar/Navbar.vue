<script setup>
</script>

<template>
  <nav class="bg-blue-800 min-h-[3em] align-top leading-[3em]">
    <ul class="m-0 p-0 h-full flex">
      <li><i class="fi fi-rr-home"></i><span>Home</span></li>
      <li><i class="fi fi-rr-circle-user to-black"></i><span>Account</span></li>
      <li>
        <div class="inline">
          <input
            type="text"
            placeholder="Search"
            class="pl-2 pr-10 py-1 text-blue-800 bg-blue-300 rounded-l-md focus:outline-none focus:bg-white focus:text-blue-800"
          />
          <button class="bg-blue-300 rounded-r-md px-2 py-1 inline">
            <i class="fi fi-br-search"></i>
          </button>
        </div>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
li {
  display: inline;
  color: whitesmoke;
  margin-left: 1em;
}
ul > li > span {
  margin-left: 0.5em;
}
</style>