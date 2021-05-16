<template>
  <v-app id="inspire">
    <v-app-bar app color="white" flat>
      <v-tabs
        centered
        class="ml-n9"
        color="grey darken-1"
        mobile-breakpoint="xs"
        show-arrows
      >
        <v-tab v-for="link in getVisiblesLink" :key="link.name" :to="link.path">
          {{ link.name }}
        </v-tab>
      </v-tabs>

      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item @click="onLogout">
            <v-list-item-title>Sair</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-main class="grey lighten-2">
      <v-container>
        <v-row>
          <v-col cols="12" sm="4" md="3" v-if="$vuetify.breakpoint.smAndUp">
            <v-sheet rounded="lg" min-height="268" class="pa-5">
              <h4>Agência</h4>
              <p>{{ account.agencies_number }}</p>

              <h4>Conta</h4>
              <p>{{ account.number }}-{{ account.verification_digit }}</p>

              <h4>Títular</h4>
              <p>{{ account.owner }}</p>

              <h4>Saldo</h4>
              <p>{{ formattedBalance }}</p>
            </v-sheet>
          </v-col>

          <v-col cols="12" sm="8">
            <v-sheet min-height="70vh" rounded="lg">
              <router-view />
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
<script src="./script.js"></script>