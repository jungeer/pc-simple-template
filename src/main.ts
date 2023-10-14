import "./assets/css/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import Antd from "ant-design-vue";

import App from "./App.vue";
import router from "./router";

import 'virtual:uno.css'
import "ant-design-vue/dist/antd.less";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Antd);

app.mount("#app");
