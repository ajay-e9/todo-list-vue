<script setup>
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { useToDoStore } from "../../stores/todo";

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

const todoStore = useToDoStore();

const { todos } = storeToRefs(todoStore);

const text = ref("");
const dueDate = ref("");

const AddTodo = () => {
  if (!text || !dueDate) {
    return;
  }
  todos.value.push({
    text: text.value,
    dueDate: dueDate.value,
  });
};
</script>
<template>
  <fieldset class="flex items-center mt-4 justify-center justify-items-center">
    <legend class="sr-only">To-do</legend>
    <div class="space-y-5">
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
        placeholder="Add Todo"
        v-model="text"
      />
      <input
        class="shadow appearance-none border rounded py-2 px-3 mr-4 text-grey-darker block"
        placeholder="Add Todo"
        type="date"
        v-model="dueDate"
      />
      <button
        type="button"
        class="rounded-full bg-indigo-600 p-1 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        @click="AddTodo"
      >
        <i class="fi fi-rr-add h-5 w-5"></i>
        Add Task
      </button>
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

