<template>
  <edit-card-dummy
    @save="onSave"
    @cancel="onCancel"
    :isFull="isFull"/>
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
    isAddCard: Boolean,
  },
  data() {
    return {
      isFull: true,
    };
  },
  methods: {
    onSave(newName, newAge) {
      if (newName === '' || newAge === ''
          || newName === undefined || newAge === undefined) {
        this.isFull = false;
      } else {
        this.isFull = true;
      }

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
    onCancel() {
      this.$emit('cancel');
    },
  },
};
</script>
