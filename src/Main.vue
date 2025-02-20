<script setup>
import {ref} from "vue";
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
    // let handler = function(){
    //     console.log("Click");
    // }

    // let mouseoverHandler=function(){
    // console.log("Mouse Over");
    // };

    //7. Vue 響應式狀態
    let state = ref({
        title: "網站標題",
        className: "title"
    });
    let handler = function(){
         console.log("點擊");
         state.value.title="新的網站標題";
         state.value.className="title highlight";
    };

    //8. Vue  表單輸入元件、響應式狀態的綁定
    let content = ref("");
    let clearContent = function(){
        content.value="";
    };
    let interest = ref([]);
    let color = ref("null");


</script>

<template>
 

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

        <!-- 7. Vue 響應式狀態-->
         <div :class="state.className"> {{state.title}} </div>
         <button @click="handler">按鈕</button>

        <!-- 8. Vue  表單輸入元件、響應式狀態的綁定 -->
        <h3>單行輸入框</h3>
        <input type="text" v-model="content"/>
        <div>使用者輸入的文字是: {{content}}</div>
        <button @click="clearContent">清空輸入框</button>

        <h3>多選框</h3>
        角色扮演 <input type="checkbox"  value="RPG" v-model="interest"/>
        即時策略 <input type="checkbox" value="RTS" v-model="interest"/>
        動作游戲 <input type="checkbox" value="Action" v-model="interest"/>
        <div > 喜歡的的游戲 </div> 
        <ul>
            <li v-for="n in interest"> {{ n }} </li>
        </ul>

        <h3>單選框</h3>
        紅 <input type="radio" value="red" v-model="color"/>
        綠 <input type="radio" value="green" v-model="color"/>
        <div :class="color"> 這是一段文字 </div>


        <h3>下來式選單</h3>
        <select v-model="color">
            <option value="">請選擇顔色</option>
            <option value="red">紅</option>
            <option value="green">綠</option>
        </select>
        <div :class="color"> 這是一段文字 </div>


    </main>

    <!-- 9. Vue 組件結構：基本觀念和語法  -->




    

   

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

.title{
    font-weight:bold;
}

.highlight{
    color:red;
}

.red{
    color:red;
}

.green{
    color:green;
}

main{padding:10px;background-color: #dddddd;}
</style>