<script setup lang="ts">
import { ref,unref,computed } from 'vue'
import { createQueryKeys } from '@lukemorales/query-key-factory';
import { getUser } from './UserApi';
import {useQuery, useQueryClient} from '@tanstack/vue-query';
import { MaybeRef } from '../types';

const queryClient = useQueryClient();
const userId = ref<string>("")
const userQueries = createQueryKeys('users', {
  all:null,
  detail: (userId: MaybeRef<string>) => ({
    queryKey: [userId],
    queryFn: () => getUser(unref(userId)),
  }),
});

const reset = ()=>{
  console.log("reset",userQueries._def);
  queryClient.invalidateQueries(["users"])
}

var {data, isLoading, status, isFetching, isStale, refetch} = useQuery({
  ...userQueries.detail(userId),
  enabled: computed((() => !!userId.value))
});
</script>

<template>
  <h1>Invalidate</h1>
  <input v-model="userId" placeholder="Userid."/>
  <div>status: {{ status }}</div>
  <div>isFetching: {{ isFetching ? "🟢": "🚫"  }}</div>
  <div>freshness: {{ isStale ? "Stale" : "fresh" }}</div>
  <div v-if="isLoading">loading</div>
  <div v-else>
    <pre>{{ data }} </pre>
  </div>
  
  <button @click="reset">reset</button>
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
