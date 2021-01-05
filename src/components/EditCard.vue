<template>
  <edit-card-dummy :onSave="onSave" :onCancel="onCancel" :user="user" :isFull="isFull"/>
</template>

<script>
import axios from 'axios';
import EditCardDummy from '@/components/EditCardDummy';

export default {
  name: 'EditCard',
  components: {
    EditCardDummy,
  },
  props: {
    user: Object,
    onToggle: Function,
    onCancel: Function,
  },
  data() {
    return {
      isFull: true,
    };
  },
  methods: {
    onSave(newName, newAge, id) {
      this.isFull = !(newName === '' || newAge === '');

      if (this.isFull) {
        axios
          .put(`${this.$httpRequest}/edit/${id}`, {
            name: newName,
            age: parseInt(newAge, 10),
          })
          .then(() => {
            this.onToggle(id);
            this.$emit('update-list');
          });
      }
    },
  },
};
</script>

<style scoped>

</style>
