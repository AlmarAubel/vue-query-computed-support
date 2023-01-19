<script setup lang="ts">
import {getUser, updateUser} from './UserApi';
import {useMutation, useQuery, useQueryClient} from '@tanstack/vue-query';
import {ref} from "vue";

const userId = "1";
const gebruikersNaam = ref<string>("");
const queryClient = useQueryClient()

var {mutate, status: mutationStatus} = useMutation({
  mutationFn: (user: {id:string, name:string}) => updateUser(user.id, user.name),
  onSuccess: () => queryClient.invalidateQueries({queryKey:["users", userId]})
})

function saveUser() {
  mutate({id:userId,name:gebruikersNaam.value})
}

var {data, isLoading, status, isFetching, isStale} = useQuery({
  queryKey: ["users", userId],
  queryFn: () => getUser(userId),
  onSuccess: data => gebruikersNaam.value = data.gebruikersnaam,
  staleTime: Infinity
});

</script>

<template>

  <div> status: {{ status }}</div>
  <div>isFetching: {{ isFetching ? "🟢" : "🚫" }}</div>
  <div>freshness: {{ isStale ? "Stale" : "fresh" }}</div>

  <div v-if="isLoading">loading</div>
  <div v-else>
    <hr/>
    <input v-model="gebruikersNaam" placeholder="Naam."/>
    <pre>{{ data }} </pre>
    <button @click="saveUser">Save</button>
    
    <hr>
    <h2>Mutation</h2>
    status: {{mutationStatus}}
  </div>
</template>
