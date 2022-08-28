<template>
  <div class="searchField">
    <i class="fa-solid fa-magnifying-glass"></i>
    <input
      :value="modelValue"
      @input="updateInput"
      type="text"
      class="searchInput"
      placeholder="Поиск Имени, статуса или даты"
    />
  </div>
</template>

<script>
export default {
  name: "searchField",
  props:{
    modelValue: String,
  },

  methods:{
    updateInput(event){
      this.$emit('update:modelValue', event.target.value)
    }
  }
};
</script>

<style>
.searchField {
  padding-left: 45px;
}
.searchInput {
  padding: 10px;
  border: none;
  min-width: 350px;
}
.fa-magnifying-glass {
  color: #59bba6;
  padding-right: 6px;
  height: 18px;
  width: 18px;
}
</style>
