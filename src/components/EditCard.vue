<template>
  <edit-card-dummy
    :user="user"
    :isFull="isFull"
    @save="onSave"
    @cancel="onCancel"
    />
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
            this.$emit('toggle', id);
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
