import { createApp, provide, h } from 'vue';
import App from './App.vue';
import './assets/styles/index.css';
import './assets/styles/style.css';
import router from './router';
import { ApolloClient, InMemoryCache} from '@apollo/client/core';
import { DefaultApolloClient } from '@vue/apollo-composable'

const defaultClient = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache(),
});

const app = createApp({
  setup() {
    provide(DefaultApolloClient, defaultClient)
    provide('backendURL','http://localhost:1337')
  },
  render() {
    return h(App);
  },
})
  .use(router)
  .mount('#app');
