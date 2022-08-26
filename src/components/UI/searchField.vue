<template>
  <div class="searchField">
    <i class="fa-solid fa-magnifying-glass"></i>
    <input
      type="text"
      class="searchInput"
      placeholder="Поиск Имени, статуса или даты"
    />
  </div>
</template>

<script>
export default {
  name: "searchField",
};
</script>

<style>
.searchInput {
  padding: 10px;
  border: none;
  min-width: 350px;
}
.fa-magnifying-glass {
  color: #59bba6;
  padding-right: 6px;
}
</style>
