<template>
  <div v-if="this.cat" class="p-4">
    <img class="cat-img p-2 border" :src="this.cat.url" />
  </div>
</template>

<script lang="ts">
import Cat from '../../models/Cat';
export default {
  props: {
    cat: {
      type: Cat,
      required: true
    }
  }
};
</script>

<style scoped>
.cat-img {
  object-fit: contain;
  width: 200px;
  height: 200px;
}
</style>
