<template>
  <v-card
    elevation="14"
  >
      <v-card-actions>
        <v-btn
          color="teal lighten-2"
          elevation="2"
          @click="onSave">
          Save
        </v-btn>
        <v-btn
          color="red lighten-2"
          elevation="2"
          @click="onCancel">
          Cancel
        </v-btn>
      </v-card-actions>
      <v-list-item>Name:
        <input type="text" v-model="newName"/>
      </v-list-item>
      <v-list-item>Age:
        <input type="number" v-model="newAge"/>
      </v-list-item>
      <v-alert
        v-if="!isFull"
        dense
        outlined
        type="error"
      >
        Please, fill all fields before saving.
      </v-alert>
  </v-card>
</template>

<script>
export default {
  name: 'EditCardDummy',
  props: {
    user: Object,
    isFull: Boolean,
  },
  data() {
    return {
      newName: this?.user?.name,
      newAge: this?.user?.age,
      newId: this?.user?.id,
    };
  },
  methods: {
    onSave() {
      this.$emit('save', this.newName, this.newAge, this.newId);
    },
    onCancel() {
      this.$emit('cancel');
    },
  },
};
</script>
