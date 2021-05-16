<template>
  <v-container>
    <h2 class="mb-9">Saque em conta corrente</h2>
    <v-alert
      class="mb-9"
      v-model="success"
      outlined
      type="success"
      text
      dismissible
    >
      Saque realizado com sucesso
    </v-alert>
    <v-alert
      class="mb-9"
      v-if="hasErrors"
      outlined
      type="error"
      text
      dismissible
    >
      <p
        class="text-left my-0"
        v-for="(error, index) in errors"
        :key="`err-${index}`"
      >
        - {{ error }}
      </p>
    </v-alert>
    <v-form ref="formWithdraw" v-model="formValid" @submit.prevent="onSubmit">
      <v-container>
        <v-row>
          <v-col class="py-0" cols="12" md="6">
            <v-text-field
              v-model.lazy="value"
              :rules="[(v) => !!v || 'Valor é obgriatório']"
              outlined
              label="Valor"
              dense
              v-money="configMask"
            ></v-text-field>
          </v-col>
          <v-col class="py-0" cols="12" md="6">
            <v-text-field
              v-model="password"
              outlined
              label="Senha"
              counter
              maxlength="6"
              type="password"
              dense
              :rules="[(v) => !!v || 'Senha é obgriatória']"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-btn type="submit" width="100%" color="primary">
              <v-progress-circular indeterminate :size="25" v-if="loading" />
              <template v-else>Sacar</template>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-container>
</template>
<script src="./script.js"></script>
