
import { defineStore } from "pinia";
import { ref } from "vue";

export const useSidebarStore = defineStore('counter', () => {
    const SideBarCollapsed = ref(false);
    const toggleSidebar = () => {
        SideBarCollapsed.value = !SideBarCollapsed.value;
        console.log("SideBarCollapsed", SideBarCollapsed.value);
    };

    return { SideBarCollapsed, toggleSidebar }
})