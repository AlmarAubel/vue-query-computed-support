<script setup lang="ts">
import { ref,unref,computed } from 'vue'
import { createQueryKeys } from '@lukemorales/query-key-factory';
import { getUser } from './UserApi';
import { useQuery } from '@tanstack/vue-query';
import { MaybeRef } from '../types';

const userId = ref<string>("")

const userQueries = createQueryKeys('users', {  
  detail: (userId: MaybeRef<string>) => ({
    queryKey: [userId],
    queryFn: () => getUser(unref(userId)),

  }),
});

var { data, isLoading, status  } = useQuery({
  ...userQueries.detail(userId),
  enabled: computed((() => !!userId.value))
});
</script>

<template>  
  <input v-model="userId" placeholder="Userid."/>
  <div>Status: {{ status }}</div>
  <div v-if="isLoading">loading</div>
  <div v-else> {{ data }}</div>  
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
