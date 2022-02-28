import axios from 'axios';
import { Module } from 'vuex';
import Cat from '../../models/Cat';

const endpoint = 'https://api.thecatapi.com/v1/images/search';

export class CatState {
  cats: Cat[];
  totalCats: number;

  constructor() {
    this.cats = [];
    this.totalCats = 0;
  }
}

export const CatModule: Module<CatState, CatState> = {
  state: () => {
    return new CatState();
  },
  actions: {
    async updateCats(s, { page, limit }) {
      axios.defaults.headers.common['x-api-key'] =
        ' 24be637f-e596-4847-b47a-1791feeea1bd';

      const resp = await axios.get(endpoint, {
        params: {
          limit: limit,
          page: page - 1,
          order: 'Desc'
        }
      });

      s.commit('setTotalCats', Number(resp.headers['pagination-count']));
      s.commit('setCats', resp.data);

      console.log(resp.data[0]);
    }
  },
  mutations: {
    setCats(s, cats) {
      s.cats = cats;
    },
    setTotalCats(s, totalCats) {
      s.totalCats = totalCats;
    }
  },
  getters: {
    getCats(s) {
      return s.cats;
    },
    getTotalCats(s) {
      return s.totalCats;
    }
  }
};
