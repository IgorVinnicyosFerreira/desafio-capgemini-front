<template>
  <v-app>
    <v-main class="grey lighten-2 align-center">
      <v-container>
        <v-row class="justify-center">
          <v-col cols="12" md="6">
            <v-sheet min-height="50vh" rounded="lg" class="py-5 px-10">
              <v-alert v-if="hasErrors" text color="red lighten-1">
                <p
                  class="text-left"
                  v-for="(error, index) in errors"
                  :key="`err-${index}`"
                >
                  - {{ error }}
                </p>
              </v-alert>
              <h1 class="mb-9">Banco Capgemini</h1>

              <v-form
                ref="formLogin"
                v-model="formValid"
                @submit.prevent="onSubmit"
              >
                <v-text-field
                  class="ma-0"
                  v-model="agencie"
                  outlined
                  label="Agência"
                  dense
                  :rules="[(v) => !!v || 'Agência é obgriatória']"
                  v-mask="'#####'"
                ></v-text-field>
                <v-text-field
                  class="ma-0"
                  v-model="account"
                  outlined
                  label="Conta"
                  hint="conta com dígito verificador"
                  persistent-hint
                  dense
                  :rules="[(v) => !!v || 'Conta é obgriatória']"
                  v-mask="'######-#'"
                ></v-text-field>
                <v-text-field
                  type="password"
                  counter
                  maxlength="6"
                  class="ma-0"
                  v-model="password"
                  outlined
                  label="Senha"
                  dense
                  :rules="[(v) => !!v || 'Senha é obgriatória']"
                ></v-text-field>
                <v-btn type="submit" width="100%" color="primary">
                  <v-progress-circular
                    indeterminate
                    :size="25"
                    v-if="loading"
                  />
                  <template v-else>Login</template>
                </v-btn>
              </v-form>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
<script src="./script.js"></script>