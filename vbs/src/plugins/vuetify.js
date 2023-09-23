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
      dark: {
        primary: "#4C1229",
        onprimary: "#E6AEC4",
        secondary: "#48364C",
        onsecondary: "#E1D0E6",
        tertiary: "#30234C",
        ontertiary:"#CBBEE6",
        neutral:"#333132",
        accent: "#DF3578",
        error: "#b71c1c",
        anchor: "#DF3578",
        amazon: "#ac8454",
      },
      light: {
        primary: "#E6AEC4",
        onprimary: "#DF3578",
        secondary: "#E1D0E6",
        onsecondary: "#78597F",
        tertiary: "#CBBEE6",
        ontertiary:"#402f66",
        neutral:"#e6dadf",
        accent: "#DF3578",
        error: "#b71c1c",
        anchor: "#DF3578",
        amazon: "#ac8454",
      },
    },
  },
});
