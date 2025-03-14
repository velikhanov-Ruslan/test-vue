<template>
  <div class="form">
    <div class="form__head">Учетные записи <v-icon @click="onClick" class="form__icon" icon="mdi-plus"
        size="large"></v-icon>
    </div>
    <div class="form__hint"> <v-icon class="form__icon circle" icon="mdi-help" size="small"></v-icon> Для указания
      нескольких меток для
      одной пары
      логин/пароль используйте разделитель ;</div>

    <FormUsers />
  </div>
</template>

<script setup lang="ts">
import FormUsers from './FormUsers.vue';
import { useAccountsStore } from '@/stores/accounts';

const store = useAccountsStore()

function onClick() {
  store.addAccount()
}
</script>

<style scoped lang="scss">
.form {
  width: 100%;

  &__head {
    margin-bottom: 20px;
    font-size: 26px;
    font-weight: 600;

    i {
      cursor: pointer;

    }

  }

  &__hint {
    background-color: rgba(183, 226, 243, 0.5);
    border-radius: 4px;
    padding: 4px;
    margin-bottom: 20px;
  }

  &__icon {
    border: 1px solid var(--vt-c-black);
    border-radius: 9px;
    margin-left: 9px;

    &.circle {
      border-radius: 50%;
      padding: 13px;
      font-size: 13px;
    }
  }
}
</style>
