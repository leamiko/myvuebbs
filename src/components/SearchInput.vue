<template>
  <div class="navbar-form navbar-left hidden-sm">
    <div class="form-group">
      <input
        v-model.trim="searchValue"
        type="text"
        class="form-control search-input mac-style"
        placeholder="搜索"
        @keyup.enter="search"
        @input="updateSearchValue"
      >
    </div>
  </div>
</template>

<script>
import * as types from "@/store/mutation-types";

export default {
  name: "SearchInput",

  data() {
    return {
      value: "" // 搜索值
    };
  },

  computed: {
    searchValue: {
      get() {
        return this.$store.state.searchValue;
      },

      set(value) {
        this.value = value;
      }
    }
  },

  methods: {
    search() {
      const value = this.value;

      if (value !== "") {
        console.log(value);
        this.$router.push({ name: 'Search', query: { q: value } })
      }
    },

    updateSearchValue() {
      this.$store.commit(types.UPDATE_SEARCH_VALUE, this.value);
    }
  }
};
</script>

<style scoped>
.search-input {
  background-image: url(https://vuejscaffcdn.phphub.org/assets/images/icon-search.png);
}
</style>


