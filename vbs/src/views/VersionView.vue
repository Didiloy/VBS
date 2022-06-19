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
      <h1 class="grey--text Heading 1 py-2">Versions</h1>
      <div class="py-5">
        <h3 class="grey--text Heading 3">Version 0.3:</h3>
        <ul>
          <li>Implémentation de l'api composition de vuejs.</li>
          <li>Ajout du bouton pour toggle la sidebar.</li>
        </ul>
      </div>
      <div class="py-5">
        <h3 class="grey--text Heading 3">Version 0.2.5:</h3>
        <ul>
          <li>
            Ajout de skeleton-loader lors du chargement des livres dans la
            recherche et les recommendations.
          </li>
        </ul>
      </div>
      <div class="py-5">
        <h3 class="grey--text Heading 3">Version 0.2.4:</h3>
        <ul>
          <li>Ajout de la page de versions.</li>
        </ul>
      </div>
      <div class="py-5">
        <h3 class="grey--text Heading 3">Version 0.2.3:</h3>
        <ul>
          <li>Ajout du bouton flottant pour revenir en haut de la page.</li>
          <li>
            Ajout d'un placeholder quand la note google n'est pas disponible.
          </li>
          <li>
            Ajout de notifications lors de l'ajout et la suppression de livres à
            la bibliothèque / liste de souhaits.
          </li>
        </ul>
      </div>
    </div>
  </v-container>
</template>
