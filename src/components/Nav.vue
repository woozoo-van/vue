<script setup>
import { ref } from 'vue'

import MenuList from "../assets/data/menuList.json"

const activeMenuId = ref(1);

function activeMenu(id) {
    activeMenuId.value = id;

}
</script>

<template>
    <ul class="menu">
        <li v-for="menu in MenuList.menus">
            <a :class="{ active: menu.id === activeMenuId }" @click="activeMenu(menu.id)" href="@">{{
            menu.name }}</a>
        </li>
    </ul>
</template>