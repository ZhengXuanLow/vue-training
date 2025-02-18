<script setup>
    // let message ="<u>Hello Vue</u>";
    // let name="content";
    // let checked = true;

    let level=0;
    let topics =["HTML","CSS","JavaScript","Vue,js"];
    let topicsObject = {
        HTML: "HyperText Markup Language",
        CSS: "Cascading Style Sheets",
        JavaScript: "JavaScript",
        Vue: "Vue.js"
    }

    //6. Vue 樣板語法：事件處理
    let handler = function(){
        console.log("Click");
    }

    let mouseoverHandler=function(){
    console.log("Mouse Over");
    };

</script>

<template>
    <nav> 基本的導覽列 </nav>

    <!-- 
    <main> {{message}} </main>
    -->

    <!-- <main v-html="message.toUpperCase()"> </main> -->

    <!-- <main> {{message.toUpperCase()}} </main> -->

    <div :class="checked?'dark':'light'"> 操作標簽的屬性 </div>

    <main> 
        <!-- 5. Vue 樣板語法：流程控制-->
        <div v-if="level===3">大神</div>
        <div v-else-if="level===2">資深</div>
        <div v-else-if="level===1">中階</div>
        <div v-else>
            <div>入門</div>
            <ul >
                <li v-for="name in topics" >{{name}}</li>
            </ul>

            <ul >
                <li v-for="(name, index) in topics" >{{ index + 1}} - {{ name }}</li>
            </ul>

            <ul >
                <li v-for="(value, key) in topicsObject" > {{key}}: {{value}}</li>
            </ul>
        </div>

        <!-- 6. Vue 樣板語法：事件處理-->
        <button @click.once="handler" @mouseover="mouseoverHandler">按鈕</button>
        <a href="https://www.google.com/" v-on:click.prevent="handler"> Google </a>
    </main>

    

   

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