<template>
  <div class="crud-container m-4">
    <div class="border border-2 d-flex row">
      <CatItem
        v-for="cat in cats"
        :key="cat.id"
        :cat="cat"
        class="col-3 d-flex flex-row justify-content-center"
        @click="showModal(cat)"
      ></CatItem>
    </div>
    <b-pagination
      v-if="this.cats"
      v-model="currentPage"
      :total-rows="totalCats"
      :per-page="perPage"
      align="fill"
      class="pt-4"
    ></b-pagination>
  </div>
</template>

<script>
import CatItem from '~/components/molecules/CatItem.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      currentPage: 1,
      perPage: 12,
      isShow: false
    };
  },
  computed: {
    ...mapGetters({
      cats: 'getCats',
      totalCats: 'getTotalCats'
    })
  },
  components: {
    CatItem
  },
  async mounted() {
    await this.updateCats({ page: this.currentPage, limit: this.perPage });
    //this.$store.dispatch('cat/updateCats');
  },
  methods: {
    ...mapActions({
      updateCats: 'updateCats'
    }),
    showModal() {
      this.isShow = true;
    }
  },
  watch: {
    async currentPage() {
      await this.updateCats({ page: this.currentPage, limit: this.perPage });
    }
  }
};
</script>

<style>
.crud-container {
  width: 1000px;
}

.modal {
  width: 300px;
  padding: 30px;
  box-sizing: border-box;
  background-color: #fff;
  font-size: 20px;
  text-align: center;
}
</style>
