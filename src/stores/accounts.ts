import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface Account {
  label: string | { text: string }[]
  type: 'LDAP' | 'Локальная' | null
  login: string
  password: string | null
  id: number
}

export const useAccountsStore = defineStore('accounts', () => {
  const storedAccounts = localStorage.getItem('accounts')
  const accounts = ref<Account[]>(storedAccounts ? JSON.parse(storedAccounts) : [])
  function addAccount() {
    accounts.value.push({
      label: '',
      login: '',
      password: '',
      type: null,
      id: Date.now(),
    })
    localStorage.setItem('accounts', JSON.stringify(accounts.value))
  }

  function deleteAccount(id: number) {
    accounts.value = accounts.value.filter((account) => account.id !== id)
    localStorage.setItem('accounts', JSON.stringify(accounts.value))
  }

  function updateAccount(account: Account) {
    const _account = accounts.value.find((a) => a.id === account.id)
    if (_account) {
      Object.assign(_account, account)
    }

    localStorage.setItem('accounts', JSON.stringify(accounts.value))
  }

  return { accounts, addAccount, deleteAccount, updateAccount }
})
