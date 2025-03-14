<template>
  <v-form validate-on="blur input lazy">
    <v-row>
      <v-col cols="12" md="3">
        <AccountInput v-model="innerDataAccount.label" :maxlength="50" />
      </v-col>
      <v-col cols="12" md="2">
        <AccountSelect v-model="innerDataAccount.type" :rules="[FormDataRules.required]" />
      </v-col>
      <v-col cols="12" :md="isNotLDAP ? 2 : 4">
        <AccountInput v-model="innerDataAccount.login" :maxlength="100" :rules="[FormDataRules.required]" />
      </v-col>
      <v-col cols="12" md="2" v-if="isNotLDAP">
        <AccountPassword v-model="innerDataAccount.password" :maxlength="100" :rules="[FormDataRules.required]" />
      </v-col>
      <v-col cols="12" md="2">
        <v-icon @click="onClick" class="icon" icon="mdi-delete" size="x-large"></v-icon>
      </v-col>
    </v-row>
  </v-form>
</template>

<script setup lang="ts">
import { useAccountsStore, type Account } from '@/stores/accounts';
import { computed, ref, watch } from 'vue';
import AccountInput from './AccountInput.vue';
import AccountPassword from './AccountPassword.vue';
import AccountSelect from './AccountSelect.vue';

const props = defineProps<{
  account: Account
}>()
const store = useAccountsStore()
const innerDataAccount = ref<Account>({
  ...props.account,
  label: Array.isArray(props.account.label)
    ? props.account.label.map(e => e.text).join(';')
    : props.account.label || ''
})

const FormDataRules = {
  required: (value: string | number) => !!value || 'Required!',
  maxLength: (value: string) => value?.length < 50 || 'не более 50 символов'
}
function onClick() {
  store.deleteAccount(props.account.id)
}

const isNotLDAP = computed(() => {
  return innerDataAccount.value.type !== 'LDAP'
})

watch(innerDataAccount.value, (v: Account) => {

  if (v.type === 'LDAP') {
    v.password = null;
  }


  store.updateAccount({
    ...v,
    label: v.label.split(';').filter((item: string) => item.trim() !== '').map((e: { text: string }) => ({ text: e }))
  })
})
</script>

<style scoped lang="scss">
.icon {
  display: block;
}
</style>
