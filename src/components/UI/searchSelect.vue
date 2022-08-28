<template>
  <div class="searchSelect">
    <p class="label">Сортировать по:</p>
    <select name="" id="" v-model="modelValue" @change="updateValue" class="selectFilter">
    <option disabled value="" >Выберите фильтр</option>
    <option
      :value="filterOption.value"
      v-for="filterOption in filterOptions"
      :key="filterOption.id"
    >
      {{filterOption.name}}
    </option>
    >
  </select>
  </div>
</template>

<script>
export default {
  name: "searchSelect",
   props:{
    modelValue: {
        type: String,
    },
    filterOptions:{
        type: Array,
    }
  },
  methods: {
    updateValue(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style>
.searchSelect {
  display: flex;
}
.selectFilter{
  padding-left: 10px;
  border: none;
}
.label{
  align-self: center;
}
</style>
