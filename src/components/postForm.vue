<template>
  <div class="app__title">
    <h1 class="app__title-name">To do list</h1>
    <plus-button class="app__title-btn"></plus-button>
  </div>
  <div class="app__search">
    <search-field class="app__search-field"></search-field>
    <search-select class="app__search-select"></search-select>
  </div>
  <input type="checkbox" class="check" name="check" id="check">
  <label for="check">qwe</label>
</template>

<script>
import plusButton from "../components/UI/plusButton"
import searchField from "../components/UI/searchField"
import searchSelect from "../components/UI/searchSelect"
export default {
  name: "postForm",
  components:{
    plusButton,
    searchField,
    searchSelect
  }
};
</script>
<style>
.app__title{
    display: flex;
    font-size: 24px;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 34px;
}
.app__title-name {
  font-family: "Montserrat", sans-serif;
}
.app__title-btn{
    align-self: center;
}
.app__search{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.app__search-field{
    
}
input[type="checkbox"]{
    display: none;
    transition: .2s;
    border-radius: 50%;
}
input[type="checkbox"]:checked + label::before{
    content: '';
    background-repeat: no-repeat;
    background-size: 100%;
    background-position-y: 40%;
    background-image: url('C:\Users\senio\OneDrive\Рабочий стол\todo-list\public\Vector 13.svg');
    border: 3px #134EC1 solid;
}
label::before{
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 3px black solid;
    vertical-align: middle;

}
</style>
