<template>
  <main>
    <PxHeader :links="links" />
    <div
      v-show="isLoading"
      class="flex justify-center align-center"
      :class="{ 'mt-32': isLoading }"
    >
      <bounce-loader :loading="isLoading" :size="100" :color="'#68d391'" />
    </div>
    <div v-show="!isLoading">
      <router-view
        class="container px-5 sm:px-20 py-20 flex justify-center"
        @toggleLoading="handleLoading"
      />
    </div>
  </main>
</template>

<script>
import PxHeader from '@/components/PxHeader';

export default {
  name: 'App',
  components: {
    PxHeader,
  },
  data() {
    return {
      isLoading: false,
      links: [
        {
          title: 'BTC',
          to: { name: 'coin-details', params: { id: 'bitcoin' } },
        },
        {
          title: 'ETH',
          to: { name: 'coin-details', params: { id: 'ethereum' } },
        },
        {
          title: 'XRP',
          to: { name: 'coin-details', params: { id: 'xrp' } },
        },
        {
          title: 'About',
          to: { name: 'about' },
        },
      ],
    };
  },
  methods: {
    handleLoading() {
      this.isLoading = !this.isLoading;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
