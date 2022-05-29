//  This file is part of VBS.
//     Copyright (C) 2022  Dylan Loya

//     This program is free software: you can redistribute it and/or modify
//     it under the terms of the GNU General Public License as published by
//     the Free Software Foundation, either version 3 of the License, or
//     (at your option) any later version.

//     This program is distributed in the hope that it will be useful,
//     but WITHOUT ANY WARRANTY; without even the implied warranty of
//     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//     GNU General Public License for more details.

//     You should have received a copy of the GNU General Public License
//     along with this program.  If not, see <https://www.gnu.org/licenses/>.
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
        dark: false,
        themes: {
            light: {
                primary: "#D5D5D5",
                secondary: "#FFFFFF",
                accent: "#DF3578",
                error: "#b71c1c",
                anchor: "#DF3578",
                amazon: "#ac8454",
            },
            dark: {
                primary: "#292d34",
                secondary: "#191b1f",
                accent: "#DF3578",
                error: "#b71c1c",
                anchor: "#DF3578",
                amazon: "#ac8454",
            },
        },
    },
});