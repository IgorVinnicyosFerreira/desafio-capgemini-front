<template>
  <v-container>
    <h2 class="mb-9">Últimas 15 transações</h2>
    <v-row class="justify-center" v-if="loading">
      <v-progress-circular indeterminate />
    </v-row>
    <v-simple-table v-else>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Valor</th>
            <th class="text-left">Data</th>
            <th class="text-left">Transação</th>
          </tr>
        </thead>
        <tbody v-if="hasTransactions">
          <tr
            v-for="(transaction, index) in transactions"
            :key="`trs-${index}`"
          >
            <td>
              {{ formatCurrency(transaction.value) }}
            </td>
            <td>{{ formatDate(transaction.date) }}</td>
            <td>{{ transaction.description }}</td>
          </tr>
        </tbody>
        <tbody v-else>
          <tr>
            <td colspan="3">Sem histórico de transações</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>
<script src="./script.js"></script>