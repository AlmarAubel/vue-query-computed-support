<script setup lang="ts">
import {getUser} from './UserApi';
import {useQuery} from '@tanstack/vue-query';

const userId = "1";
//staleTime: 1000 * 6

var {data, isLoading, status, isFetching, isStale} = useQuery({
  queryKey: ["users", userId],
  queryFn: () => getUser(userId)
});
</script>

<template>
  <div> status: {{ status }}</div>
  <div>isFetching: {{ isFetching ? "🟢": "🚫"  }}</div>
  <div>freshness: {{ isStale ? "Stale" : "fresh" }}</div>

  <div v-if="isLoading">loading</div>
  <div v-else>
    <pre>{{ data }} </pre>
  </div>
</template>


<!--select: data=> {throw new Error("Foutje in select")},-->
<!--onError: err=> console.log('err', err)-->