import * as Vue from 'vue';
import { createStore } from '../store/createStore';
import { injectContext } from './inject-context';
import BootstrapVue from 'bootstrap-vue-3';

export const createApp: Vue.CreateAppFunction<Element> = (
  rootComponent,
  rootProps
): Vue.App => {
  const app = Vue.createApp(rootComponent, rootProps);
  const inject = injectContext(app);

  // Setup vuex
  const store = createStore();
  app.use(store);
  console.log(store);
  inject('store', store);

  // Setup bootstrap Vue
  app.use(BootstrapVue);

  return app;
};
