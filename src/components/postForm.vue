<template>
  <div class="app__title">
    <h1 class="app__title-name">To do list</h1>
    <plus-button
      class="app__title-btn"
      @click="$store.commit('dialogVisibility', true)"
    ></plus-button>
  </div>
  <div class="app__search">
    <search-field
      class="app__search-field"
      :modelValue="searchQuery"
      @update:modelValue="setSearchQuery"
    ></search-field>
    <search-select
      class="app__search-select"
      :modelValue="filterOption"
      @update:modelValue="setFilterOption"
      :filterOptions="filterOptions"
    ></search-select>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
import plusButton from "../components/UI/plusButton";
import searchField from "../components/UI/searchField";
import searchSelect from "../components/UI/searchSelect";
export default {
  name: "postForm",
  components: {
    plusButton,
    searchField,
    searchSelect,
  },
  data() {
    return {
      /* searchQuery: "", */
    };
  },
  methods: {
    ...mapMutations(["setSearchQuery", "setFilterOption"]),
  },
  computed: {
    ...mapState({
      searchQuery: (state) => state.searchQuery,
      filterOption: (state) => state.filterOption,
      filterOptions: (state) => state.filterOptions,
    }),
    ...mapGetters({
      filteredPosts: "filteredPosts",
      searchQueryPosts: "searchQueryPosts",
    }),
  },
};
</script>
<style>
.app__title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 34px;
  padding-left: 45px;
  color: #16191d;
}
.app__title-name {
  font-size: 24px;
  font-family: "Montserrat", sans-serif;
}
.app__title-btn {
  align-self: center;
}
.app__search {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 30px;
}
.app__search-field {
}
</style>
