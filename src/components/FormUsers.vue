<template>
  <v-row>
    <v-col v-for="(title, index) in titles" :key="index" cols="12" :md="title.col">{{ title.label }}</v-col>
  </v-row>
  <AccountRow v-for="account in store.accounts" :key="account.id" :account="account" />

  store.accounts: {{store.accounts.map(e => e.label)}}
</template>

<script setup lang="ts">
import AccountRow from './AccountRow.vue';
import { useAccountsStore } from '@/stores/accounts';

const store = useAccountsStore();


const titles = [{ label: 'Метки', col: 3 }, { label: 'Тип записи', col: 2 }, { label: 'Логин', col: 2 }, { label: 'Пароль', col: 3 }, { label: '', col: 2 },]

</script>

<style scoped></style>
