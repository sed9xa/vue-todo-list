<template>
  <div class="searchSelect">
    <p class="label">Сортировать по:</p>
    <select name="" id="" class="select">
      <option value="date">Дата</option>
      <option value="status">Статус</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "searchSelect",
};
</script>

<style>
.searchSelect {
  display: flex;
}
.select{
  padding-left: 10px;
  border: none;
}
.label{
  align-self: center;
}
</style>
