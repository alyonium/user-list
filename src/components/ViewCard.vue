<template>
  <view-card-dummy :onToggle="onToggle" :onDelete="onDelete" :onCancel="onCancel" :user="user"/>
</template>

<script>
import axios from 'axios';
import ViewCardDummy from '@/components/ViewCardDummy';

export default {
  name: 'ViewCard',
  components: {
    ViewCardDummy,
  },
  props: {
    user: Object,
    onToggle: Function,
    onCancel: Function,
  },
  methods: {
    onDelete() {
      axios
        .delete(`${this.$httpRequest}/remove/${this.user.id}`)
        .then(() => {
          this.$emit('update-list');
        });
    },
  },
};
</script>

<style scoped>

</style>
