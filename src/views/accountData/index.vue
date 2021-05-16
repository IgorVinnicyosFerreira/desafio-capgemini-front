<template>
  <v-container>
    <h4>Agência</h4>
    <p>{{ account.agencies_number }}</p>

    <h4>Conta</h4>
    <p>{{ account.number }}-{{ account.verification_digit }}</p>

    <h4>Títular</h4>
    <p>{{ account.owner }}</p>
  </v-container>
</template>
<script src="./script.js"></script>