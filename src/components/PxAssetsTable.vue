<template>
  <table>
    <thead>
      <tr class="bg-gray-100 border-b-2 border-gray-400">
        <th></th>
        <th>
          <span>Ranking</span>
        </th>
        <th>Nombre</th>
        <th>Precio</th>
        <th>Cap. de Mercado</th>
        <th>Variación 24hs</th>
        <td class="hidden sm:block">
          <input type="text"
            class="bg-gray-100 focus:outline-none border-b border-gray-400 py-2 px-4 block "
            id="filter"
            placeholder="Buscar ... "
            v-model="filter"
          />
        </td>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="a in filteredAssets"
        :key="a.id"
        class="border-b border-gray-200 hover:bg-gray-100 hover:bg-orange-100"
      >
        <td>
          <img class="w-6 h-6" :src="imgURL(a.symbol)" :alt="a.name" />
        </td>
        <td>
          <b># {{ a.rank }}</b>
        </td>
        <td>
          <router-link
            class="hover:underline text-green-600"
            :to="{
              name: 'coin-details',
              params: { id: a.id },
            }"
          >
            {{ a.name }}
          </router-link>
          <small class="ml-1 text-gray-500">
            {{ a.symbol }}
          </small>
        </td>
        <td>{{ a.priceUsd | dollar }}</td>
        <td>{{ a.marketCapUsd | dollar }}</td>
        <td
          :class="
            a.changePercent24Hr.includes('-')
              ? 'text-red-600'
              : 'text-green-600'
          "
        >
          {{ a.changePercent24Hr | percent }}
        </td>
        <td class="hidden sm:block">
          <PxButton @custom-click="goToCoin(a.id)">
            <span>Details</span>
          </PxButton>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import PxButton from '@/components/PxButton';
export default {
  name: 'PxAssetsTable',
  components: { PxButton },
  props: {
    assets: {
      type: Array,
      default: () => [],
    },
  },
  data () {
    return {
      filter: ''
    }
  },
  computed: {
    filteredAssets(){
      if(!this.filter){
        return this.assets;
      }

      return this.assets.filter(a => 
      a.symbol.toLowerCase().includes(this.filter.toLowerCase()) || 
      a.name.toLowerCase().includes(this.filter.toLowerCase()));
    }
  },
  methods: {
    imgURL(symbol) {
      return `https://static.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`;
    },
    goToCoin(id) {
      this.$router.push({
        name: 'coin-details',
        params: {
          id,
        },
      });
    },
  },
};
</script>

<style lang="css" scoped>
.up::before {
  content: '👆';
}

.down::before {
  content: '👇';
}

td {
  padding: 20px 0px;
  font-size: 0.6rem;
  text-align: center;
}

th {
  padding: 5px;
  font-size: 0.6rem;
}

@media (min-width: 640px) {
  td,
  th {
    padding: 20px;
    font-size: 1rem;
  }

  th {
    padding: 12px;
  }
}
</style>
