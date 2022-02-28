import * as Vue from 'vue';
import { Store } from 'vuex';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store;
  }

  interface App {
    $store: Store;
  }
}
