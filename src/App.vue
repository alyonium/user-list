<template>
  <v-app>
    <v-main>
      <v-row class="d-flex justify-center">
        <h1 class="mt-10 mb-10">
          Users
        </h1>
      </v-row>
      <user-list/>
    </v-main>
  </v-app>
</template>

<script>
import UserList from '@/components/UserList';

export default {
  name: 'App',

  components: {
    UserList,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
input {
  outline: none;
  margin-left: 10px;
  padding: 0 5px;
  width: 150px;
  border: 1px solid gray;
}
</style>
