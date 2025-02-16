//載入createApp函式
import { createApp } from "vue";

//載入根組件
import App from "./App.vue";

//建立Vue App 物件 
const app = createApp(App);

//挂載到HTML 標簽底下
app.mount("#app");