<template>
  <v-card
    elevation="14"
  >
      <v-card-actions>
        <v-btn
          color="teal lighten-2"
          elevation="2"
          @click="onEdit">
          Edit
        </v-btn>
        <v-btn
          color="red lighten-2"
          elevation="2"
          @click="onDelete">
          Delete
        </v-btn>
      </v-card-actions>
      <v-list-item>Name: {{ user.name }} </v-list-item>
      <v-list-item>Age: {{ user.age }} </v-list-item>
  </v-card>
</template>

<script>
export default {
  name: 'VueCardDummy',
  props: {
    user: Object,
  },
  methods: {
    onEdit() {
      this.$emit('toggle', this.user.id);
    },
    onDelete() {
      this.$emit('delete');
    },
  },
};
</script>
