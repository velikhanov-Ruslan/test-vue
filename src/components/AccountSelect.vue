<template>
  <div>
    <v-select v-model="model" variant="outlined" density="compact" :items="options"></v-select>
  </div>
</template>

<script setup lang="ts">
const options = ['LDAP', 'Локальная'];
const model = defineModel()

</script>

<style scoped></style>
