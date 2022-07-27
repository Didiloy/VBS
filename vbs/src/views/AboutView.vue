<!-- This file is part of VBS.
    Copyright (C) 2022  Dylan Loya

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>. -->
<template>
  <div class="d-flex flex-column justify-space-between align-center">
    <v-container class="d-flex flex-column justify-center align-start">
      <v-img class="" height="300px" width="300px" :src="icone_vbs"></v-img>
      <h1 class="grey--text Heading 1 py-2">{{ $t("AboutView.title") }}</h1>
      <p v-html="$t('AboutView.licence')"></p>
      <p v-html="$t('AboutView.find_source_code')"></p>
      <h2 class="grey--text pt-2">
        {{ $t("AboutView.report_bug") }}
      </h2>
      <p v-html="$t('AboutView.report_bug_text')"></p>
      <p class="pt-6">
        {{ $t("AboutView.made_with") }}
        <v-icon class="accent--text pr-2"> favorite</v-icon>
        {{ $t("AboutView.by") }}
        <a href="https://www.linkedin.com/in/dylan-loya-993711196/"
          >Dylan Loya</a
        >
      </p>
    </v-container>
    <p class="grey--text pt-16 text-decoration-underline">
      <a href="/#/version"> {{ $t("AboutView.version") }} 0.3.2</a>
    </p>
  </div>
</template>
<script>
export default {
  name: "AboutView",
  data() {
    return {
      icone_vbs: require("../assets/logo/78986_VBS_flat_RK_04.png"),
    };
  },
};
</script>
