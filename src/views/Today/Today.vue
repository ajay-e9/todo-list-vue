<script setup>
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
dayjs.extend(localizedFormat);

const props = defineProps({
  text: {
    type: String,
    default: () => "This is my first task.",
  },
  timestamp: {
    type: String,
    default: () => new Date(),
  },
});
const todos = [
  {
    text: "My New Task 1",
    dueDate: new Date(),
  },
  {
    text: "My New Task 2",
    dueDate: new Date(),
  },
  {
    text: "My New Task 3",
    dueDate: new Date(),
  },
];
</script>
<template>
  <fieldset class="flex items-center mt-4 justify-center justify-items-center">
    <legend class="sr-only">To-do</legend>
    <div class="space-y-5">
      <div
        v-for="todo in todos"
        :key="todo.text"
        class="relative flex items-start"
      >
        <div class="flex h-6 items-center">
          <input
            :id="todo.text"
            :aria-describedby="`${todo.text}-description`"
            name="plan"
            type="radio"
            class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
          />
        </div>
        <div class="ml-3 text-sm leading-6">
          <label :for="todo.text" class="font-medium text-gray-900">{{
            todo.text
          }}</label>
          <p :id="`${todo.text}-description`" class="text-gray-500">
            {{ dayjs(todo.dueDate).format("LLL") }}
          </p>
        </div>
      </div>
    </div>
  </fieldset>
</template>

