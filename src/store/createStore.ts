import { CatState, CatModule } from './modules/cat-module';
import { createStore as createStoreVuex } from 'vuex';

const modules = {
  cat: CatModule
};

export const createStore = () => {
  return createStoreVuex({
    modules
  });
};
