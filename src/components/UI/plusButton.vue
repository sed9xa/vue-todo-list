<template>
  <button class="button">
        <i class="fa-solid fa-plus"></i>
    </button>
</template>

<script>
export default {
    name: 'plusButton',

}
</script>

<style>
.button{
    width: 40px;
    height: 40px;
    position: relative;
    border: none;
    background-color: #D6DBEB;
    border-radius: 50%;
}
.fa-plus{
    transform: scale(180%);
    color: #314B99;
    transition: .3s;
}
.fa-plus:hover{
    
    color: #eb8511;
}
</style>