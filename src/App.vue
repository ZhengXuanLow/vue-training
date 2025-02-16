<script setup>
    let message ="<u>Hello Vue</u>";
    let name="content";
    let checked = true;
</script>

<template>
    <nav> 基本的導覽列 </nav>

    <!-- 
    <main> {{message}} </main>
    -->

    <!-- <main v-html="message.toUpperCase()"> </main> -->

    <main> {{message.toUpperCase()}} </main>

    <div :class="checked?'dark':'light'"> 操作標簽的屬性 </div>

</template>

<style scoped>
main {
    background-color: #dddddd;
}

.content{
    color: blue;
}

.dark{
    color:#333333;
}

.light{
    color:#888888;
}

</style>