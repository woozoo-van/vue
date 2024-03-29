<script setup>

import userList from "../assets/data/userList.json"

</script>

<template>
    <h1>hello Schedule</h1>

    <ul v-for="user in userList.users">
        <li>
            <cite>이름 : {{ user.name }}</cite>
            <span>전화번호 : {{ user.phone_number }}</span>
            <span>등록시간 : {{ user.created_date }}</span>
        </li>
    </ul>
</template>