/* eslint-disable prettier/prettier */
import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import "@fortawesome/fontawesome-free/css/all.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: "md" || "fa",
    },
    theme: {
        options: {
            customProperties: true,
        },
        dark: true,
        themes: {
            light: {
                primary: "#D5D5D5",
                secondary: "#FFFFFF",
                accent: "#DF3578",
                error: "#b71c1c",
                anchor: "#DF3578",
            },
            dark: {
                primary: "#292643",
                secondary: "#44426E",
                accent: "#DF3578",
                error: "#b71c1c",
                anchor: "#DF3578",
            },
        },
    },
});