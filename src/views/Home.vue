<template>
  <div>
    <PxAssetsTable :assets="assets" />
  </div>
</template>

<script>
import api from '@/api';
import PxAssetsTable from '@/components/PxAssetsTable';

export default {
  name: 'Home',
  components: {
    PxAssetsTable,
  },
  data() {
    return {
      assets: [],
    };
  },
  async created() {
    this.$emit('toggleLoading',true);
    let data = await api.getAssets();
    this.assets = data;
    this.$emit('toggleLoading',false);
  },
};
</script>
