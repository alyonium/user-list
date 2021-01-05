<template>
  <v-container>
    <v-row>
      <v-col
        cols="2"
        offset="8"
        class="mb-10"
      >
        <v-btn
          elevation="2"
          @click="addNewUser()"
          v-if="!isAddCard"
        >
          Add new user
        </v-btn>
      </v-col>
      <v-col
        cols="2"
        class="mb-10 d-flex align-center">
        Users Quantity: {{ usersQuantity }}
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="3"
        offset="2"
        v-for="user in users"
        :key="user.userData.id"
        class="mb-10">
          <edit-card
            v-if="user.isEdit"
            :user="user.userData"
            @toggle="handleEditToggle"
            @cancel="getNewList"
            @update-list="getNewList"
          />
          <view-card
            v-else
            :user="user.userData"
            @toggle="handleEditToggle"
            @cancel="getNewList"
            @update-list="getNewList"
          />
      </v-col>
      <v-col
        cols="3"
        offset="2"
        class="mb-10"
        v-if="isAddCard">
        <add-card
          :isAddCard="isAddCard"
          @cancel="getNewList()"
          @update-list="getNewList()"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';
import ViewCard from '@/components/ViewCard';
import EditCard from '@/components/EditCard';
import AddCard from '@/components/AddCard';

export default {
  name: 'UserList',
  components: {
    ViewCard,
    EditCard,
    AddCard,
  },
  data() {
    return {
      isAddCard: false,
      usersQuantity: null,
      users: [],
    };
  },
  mounted() {
    this.getNewList();
  },
  methods: {
    handleEditToggle(id) {
      const currentUser = this.users.find((user) => user.userData.id === id);
      currentUser.isEdit = !currentUser.isEdit;
    },
    getNewList() {
      this.users = [];
      axios
        .get(`${this.$httpRequest}/getAll`)
        .then((response) => {
          response.data.forEach((user) => {
            const userCopy = {
              userData: user,
              isEdit: false,
            };
            this.users.push(userCopy);
          });
          this.isAddCard = false;
          this.usersQuantity = response.data.length;
        });
    },
    addNewUser() {
      this.isAddCard = true;
    },
  },
};
</script>

<style scoped>

</style>
