<template>
  <edit-card-dummy :onSave="onSave" :onCancel="onCancel" :isFull="isFull"/>
</template>

<script>
import axios from 'axios';
import EditCardDummy from '@/components/EditCardDummy';

export default {
  name: 'AddCard',
  components: {
    EditCardDummy,
  },
  props: {
    onCancel: Function,
    isAddCard: Boolean,
  },
  data() {
    return {
      isFull: false,
    };
  },
  methods: {
    onSave(newName, newAge) {
      this.isFull = !(newName === '' || newAge === '');

      if (this.isFull) {
        axios
          .post(`${this.$httpRequest}/create`, {
            name: newName,
            age: parseInt(newAge, 10),
          })
          .then(() => {
            this.$emit('update-list');
          });
      }
    },
  },
};
</script>
