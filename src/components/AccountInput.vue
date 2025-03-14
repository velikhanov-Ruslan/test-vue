<template>
  <v-text-field :maxlength="maxlength" :counter="!!maxlength" v-model="model" variant="outlined"
    density="compact"></v-text-field>
</template>

<script setup lang="ts">

defineProps<{
  maxlength?: number;
}>();


const model = defineModel<string>();

</script>
