import Vue from "vue";
import App from "./App.vue";
import "ant-design-vue/dist/antd.css";
import { InputNumber, Button, Tag } from "ant-design-vue";

Vue.use(Button, InputNumber, Tag);

Vue.component(InputNumber.name, InputNumber);
Vue.component(Tag.name, Tag);

Vue.config.productionTip = false;

new Vue({
    render: h => h(App)
}).$mount("#app");
