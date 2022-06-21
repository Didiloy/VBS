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
  <v-container class="d-flex flex-column justify-center align-center">
    <div class="d-flex flex-column justify-center align-start">
      <h1 class="grey--text Heading 1 py-2">{{ $t("VersionView.title") }}</h1>
      <div class="py-5">
        <h3 class="grey--text Heading 3">
          {{ $t("VersionView.version") }} 0.3:
        </h3>
        <ul v-html="$t('VersionView.0_3.ul')"></ul>
      </div>
      <div class="py-5">
        <h3 class="grey--text Heading 3">
          {{ $t("VersionView.version") }} 0.2.5:
        </h3>
        <ul v-html="$t('VersionView.0_2_5.ul')"></ul>
      </div>
      <div class="py-5">
        <h3 class="grey--text Heading 3">
          {{ $t("VersionView.version") }} 0.2.4:
        </h3>
        <ul v-html="$t('VersionView.0_2_4.ul')"></ul>
      </div>
      <div class="py-5">
        <h3 class="grey--text Heading 3">
          {{ $t("VersionView.version") }} 0.2.3:
        </h3>
        <ul v-html="$t('VersionView.0_2_3.ul')"></ul>
      </div>
    </div>
  </v-container>
</template>
<script>
export default {
  name: "VersionView",
};
</script>
