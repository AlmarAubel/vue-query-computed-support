<script setup lang="ts">
import { ref,unref,computed } from 'vue'
import { createQueryKeys } from '@lukemorales/query-key-factory';
import { getUser } from './UserApi';
import { useQuery } from '@tanstack/vue-query';
import { MaybeRef } from '../types';

const userId = ref<string>("")
const enabled = computed((() => !!userId.value));
const userQueries = createQueryKeys('users', {  
  detail: (userId: MaybeRef<string>) => ({
    queryKey: [userId],
    queryFn: () => getUser(unref(userId)),
  }),
});

//The query will only load when the user entered a userId
var {data, isLoading, status, isFetching, isStale} = useQuery({
  ...userQueries.detail(userId),
  enabled
});
</script>

<template>
  <h1>Enabled</h1>
  <input v-model="userId" placeholder="Userid."/>
  <div>status: {{ status }}</div>
  <div>isFetching: {{ isFetching ? "🟢": "🚫"  }}</div>
  <div>freshness: {{ isStale ? "Stale" : "fresh" }}</div>
  <div v-if="isLoading">loading</div>
  <div v-else>
    <pre>{{ data }} </pre>
  </div>
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
