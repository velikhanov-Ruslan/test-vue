<template>
  <v-text-field :maxlength="maxlength" v-model="model" :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
    :type="visible ? 'text' : 'password'" density="compact" variant="outlined"
    @click:append-inner="visible = !visible"></v-text-field>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const visible = ref(false)
const model = defineModel()
defineProps<{
  maxlength?: number;
}>();
</script>

<style scoped></style>
