import { createApp, provide, h } from 'vue';
import App from './App.vue';
import './assets/styles/index.css';
import './assets/styles/style.css';
import router from './router';
import { ApolloClient, InMemoryCache } from '@apollo/client/core';
import { DefaultApolloClient } from '@vue/apollo-composable';
import VueLazyLoad from 'vue3-lazyload';
const defaultClient = new ApolloClient({
  uri: 'https://frontsmile.herokuapp.com/graphql',
  cache: new InMemoryCache(),
});

const app = createApp({
  setup() {
    provide(DefaultApolloClient, defaultClient);
    provide('backendURL', ''); //Change for new backend IMG
  },
  render() {
    return h(App);
  },
})
app.use(router)
app.use(VueLazyLoad);
app.mount('#app')
