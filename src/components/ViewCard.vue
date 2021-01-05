<template>
  <view-card-dummy
    @toggle="onToggle"
    @delete="onDelete"
    :user="user"/>
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
  },
  methods: {
    onDelete() {
      axios
        .delete(`${this.$httpRequest}/remove/${this.user.id}`)
        .then(() => {
          this.$emit('update-list');
        });
    },
    onToggle(id) {
      this.$emit('toggle', id);
    },
  },
};
</script>

<style scoped>

</style>
