import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const useToDoStore = defineStore("todos", () => {
    const todos = reactive([
    ])

    const addTodo = (todo) => {
        todos.value.push(todo)
    }

    return {

        todos,
        addTodo
    }
})